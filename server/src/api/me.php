<?php

require_once('../lib/isAuth.php');

$_POST = json_decode(file_get_contents('php://input'), true);
header('Content-Type: application/json; charset=utf-8');

$reqMethode = $_SERVER['REQUEST_METHOD']; //get the request method


if($reqMethode === 'GET') {
  
  $auth = isAuth();
  if($auth === true) {

    http_response_code(202);
    echo json_encode(['message' => 'Success auth']);

  } else {
    http_response_code(400);
    echo json_encode(['message' => $auth]);
  }

} else {
  http_response_code(405);
  echo json_encode(['message' => 'Method not allowed']);
}