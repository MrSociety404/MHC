<?php

require_once('../lib/JWT.php');
require_once('../config/config.php');


function isAuth () {
  $jwt = new JWT();

  $headers = apache_request_headers();
  if(isset($headers['Authorization'])) {
    $tokenFull = htmlspecialchars($headers['Authorization']);
    $token = explode(' ', $tokenFull)[1];

    if($jwt->isValid($token) && $jwt->check($token, SECRET)) {
      return true;
    } else {
      return 'Access denied';
    }
  } else {
    return 'Missing token';
  }
}