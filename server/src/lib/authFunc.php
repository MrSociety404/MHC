<?php

function clearAuthPost () {
  if(
    isset($_POST['email']) && 
    isset($_POST['password'])
  ) {
    return [
      'email' => htmlspecialchars($_POST['email']),
      'password' => htmlspecialchars($_POST['password'])
    ];
  } else {
    http_response_code(404);
    echo json_encode(['message' => 'Missing arguements']);
    return false;
  }
}