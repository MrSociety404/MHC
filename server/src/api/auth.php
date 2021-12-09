<?php

require_once("../models/User.php");
require_once("../config/Database.php");
require_once("../lib/authFunc.php");

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');
$reqMethode = $_SERVER['REQUEST_METHOD'];
if ($reqMethode == "OPTIONS") {
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
  header("HTTP/1.1 200 OK");
  die();
}

$_POST = json_decode(file_get_contents('php://input'), true);

$db = new Database();
$db = $db->connect();

$user = new User($db);

if($reqMethode === 'POST') {

  $req = clearAuthPost();
  if($req !== false) {
    $res = $user->checkAuth($req);
  }

} else {
  http_response_code(405);
  echo json_encode(['message' => 'Method not allowed']);
}