<?php

require_once('../lib/JWT.php');
require_once('../config/config.php');


function isAuth () {
  $jwt = new JWT();

  $headers = apache_request_headers();
  if(isset($headers['Authorization'])) {
    $tokenFull = htmlspecialchars($headers['Authorization']);
    $token = explode(' ', $tokenFull)[1];

    if($jwt->verify($token, SECRET) && isset($jwt->decodePayload($token)['id'])) {
      $_POST['id'] = $jwt->decodePayload($token)['id'];
      return true;
    } else {
      return 'Access denied';
    }
  } else {
    return 'Missing token';
  }
}