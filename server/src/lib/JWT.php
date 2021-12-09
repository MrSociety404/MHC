<?php
/**
 * JSON Web Token for PHP
 * @author MrSociety404
 * @version 1.0
 */
class JWT
{

  /**
   * Generate a base 64 header string
   * @return string base
   */
  private function generateHeader(): string
  {
    // Create token header as a JSON string
    $header = json_encode(['alg' => 'HS256', 'typ' => 'JWT']);
    // Encode Header to Base64Url String
    return str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
  }

  /**
   * Hash the payload into a string
   * @param array $payload 
   * @return string hashed Payload
   */
  private function hashPayload($payload): string
  {
    // Create token payload as a JSON string
    $payloadJson = json_encode($payload);
    // Encode Payload to Base64Url String
    return str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payloadJson));
  }

  /**
   * Generate a signature
   * @param string $base64Url Header
   * @param string $base64Url Payload
   * @param string $secret Scret key
   * @return string signature
   */
  private function hashSignature($base64UrlHeader, $base64UrlPayload, $secret): string
  {
    // Create Signature Hash
    $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, $secret, true);
    // Encode Signature to Base64Url String
    return str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));
  }

  /**
   * Generate a token
   * @param array $payload
   * @param string $secret key
   * @return string JWT Token
   */
  public function generate(array $payload, string $secret): string
  {
    // Generate all the string
    $base64UrlHeader = $this->generateHeader();
    $base64UrlPayload = $this->hashPayload($payload);
    $base64UrlSignature = $this->hashSignature($base64UrlHeader, $base64UrlPayload, $secret);

    // Combine together
    return $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;
  }

  /**
   * Decode a givent token to extract the payload
   * @param string $Token to decode
   * @return array $Payload decoded
   */
  public function decodePayload($token): array
  {
    // Split the string
    $hashToken = explode('.', $token)[1];

    // Decode payload
    $payload = json_decode(base64_decode($hashToken), true);

    return $payload;
  }

  /**
   * Verify if the token is valid
   * @param string $Token as a string
   * @param string $Scret key as a string
   * @return boolean valid or not
   */
  public function verify($token, $secret): bool
  {
    // Decode the payload
    $payload = $this->decodePayload($token);

    // Generate a new token
    $verifToken = $this->generate($payload, $secret);

    // Verify the token
    return $verifToken === $token;
  }
}
