<?php

require_once('../lib/isAuth.php');
require_once("../models/User.php");
require_once("../config/Database.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$_POST = json_decode(file_get_contents('php://input'), true);
header('Content-Type: application/json; charset=utf-8');

$reqMethode = $_SERVER['REQUEST_METHOD']; //get the request method

$db = new Database();
$db = $db->connect();

$user = new User($db);

if($reqMethode === 'GET') {
  
  $auth = isAuth();
  if($auth === true) {

    if(isset($_POST['id'])) {
      $res = $user->get(htmlspecialchars($_POST['id']));
      $user->formatRes($res, "No user found", "Success auth");
    }

  } else {
    http_response_code(400);
    echo json_encode(['message' => $auth]);
  }

} else {
  http_response_code(405);
  echo json_encode(['message' => 'Method not allowed']);
}