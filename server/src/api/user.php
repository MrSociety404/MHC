<?php

require_once("../models/User.php");
require_once("../config/Database.php");
require_once("../lib/userFunc.php");
header("Access-Control-Allow-Origin: http://localhost:3000");

$_POST = json_decode(file_get_contents('php://input'), true);
header('Content-Type: application/json; charset=utf-8');

$db = new Database();
$db = $db->connect();

$user = new User($db);

$reqMethode = $_SERVER['REQUEST_METHOD']; //get the request method

switch ($reqMethode) {
  case 'GET':
    if (isset($_GET['id'])) {
      $id = htmlspecialchars($_GET['id']);
      $res = $user->get($id);
      $user->formatRes($res, "No user found", "We found the user");
    } else {
      http_response_code(400);
      echo json_encode(['message' => 'Missing ID']);
    }
    break;
  case 'POST':
    $req = clearUserPost();
    if ($req !== false) {
      $user->create($req);
    } else {
      http_response_code(404);
      echo json_encode(['message' => 'Missing arguments']);
    }
    break;
  case 'PATCH':
    if (isset($_GET['id'])) {
      $id = htmlspecialchars($_GET['id']);
      $res = $user->get($id);
      if ($res->rowCount() !== 0) {
        $req = clearUserPatch();
        if ($req !== false) {
          $user->update($req, $id);
        } else {
          http_response_code(404);
          echo json_encode(['message' => 'Missing arguments']);
        }
      } else {
        http_response_code(404);
        echo json_encode(['message' => 'Invalid ID']);
      }
    } else {
      http_response_code(400);
      echo json_encode(['message' => 'Missing ID']);
    }
    break;

  default:
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed']);
    break;
}
