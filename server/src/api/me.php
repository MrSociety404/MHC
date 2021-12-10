<?php

require_once('../lib/isAuth.php');
require_once("../models/User.php");
require_once("../config/Database.php");

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type,access-control-allow-origin , Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');
$reqMethode = $_SERVER['REQUEST_METHOD'];
if ($reqMethode == "OPTIONS") {
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, access-control-allow-origin,Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
  header("HTTP/1.1 200 OK");
  die();
}

$_POST = json_decode(file_get_contents('php://input'), true);


$db = new Database();
$db = $db->connect();

$user = new User($db);

if ($reqMethode === 'GET') {

  $auth = isAuth();
  if ($auth === true) {

    if (isset($_POST['id'])) {
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
