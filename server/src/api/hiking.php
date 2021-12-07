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
      $res = $hiking->get($id);
      $hiking->formatRes($res, 'No hiking found', 'Success');
    } else {
      $res = $hiking->get();
      $hiking->formatRes($res, 'No hiking found', 'Success');
    }
    break;
  case 'POST':
    $req = clearHikingPost();
    // If missing body items, send error status
    if ($req === false) {
      header('HTTP/1.0 400 Required item missing');
    } else {
      $res = $hiking->create($req);
    }
    break;
  case 'DELETE': 
    if(isset($_GET['id'])) {
      $id = htmlspecialchars($_GET['id']);
      $hiking->delete($id);
    } else {
      header('HTTP/1.0 400 Required ID is missing');
    }
    break;
  case 'PATCH':
    if(isset($_GET['id'])) {
      $id = htmlspecialchars($_GET['id']);
      $resHiking = $hiking->get($id);
      if($resHiking->rowCount() !== 0) {
        $req = clearHikingUpdate();
        if($req === false) {
          header('HTTP/1.0 400 Required item missing');
        } else {
          $hiking->update($id, $req);
        }
      } else {
        header('HTTP/1.0 404 Invalid ID');
      }
    } else {
      header('HTTP/1.0 400 Required ID is missing');
    }
    break;
  default:
    header('HTTP/1.0 405 Method Not Allowed');
    break;
}