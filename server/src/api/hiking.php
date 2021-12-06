<?php
require_once("../models/Hiking.php");
require_once("../config/Database.php");
require_once("../lib/hikingFunc.php");
require_once("../lib/uuid.php");

// set php merde
$_POST = json_decode(file_get_contents('php://input'), true);
header('Content-Type: application/json; charset=utf-8');

// Init DB
$database = new Database();
$database = $database->connect(); //Connect

// Init hiking
$hiking = new Hiking($database);

$reqMethod = $_SERVER['REQUEST_METHOD']; // get the request method

switch ($reqMethod) {
  case 'GET':
    // if want to have one hiking
    if (!empty($_GET['id'])) {
      $id = htmlspecialchars($_GET['id']); 
      $hiking->get($id);
    } else {
      $hiking->get();
    }
    break;
  case 'POST':
    $req = clearHikingPost();
    // If missing body items, send error status
    if ($req === false) {
      header('HTTP/1.0 400 Required item missing');
    } else {
      $hiking->create($req);
    }
    break;
  default:
    header('HTTP/1.0 405 Method Not Allowed');
    break;
}