<?php

require_once("../models/User.php");
require_once("../config/Database.php");
require_once("../lib/authFunc.php");

$_POST = json_decode(file_get_contents('php://input'), true);
header('Content-Type: application/json; charset=utf-8');

$db = new Database();
$db = $db->connect();

$user = new User($db);

$reqMethode = $_SERVER['REQUEST_METHOD']; //get the request method

if($reqMethode === 'POST') {

  $req = clearAuthPost();
  if($req !== false) {
    $res = $user->checkAuth($req);
  }

} else {
  http_response_code(405);
  echo json_encode(['message' => 'Method not allowed']);
}