<?php
/**
 * Clear send array
 * @return Array assos array after clearing
 */
function clearHikingPost()
{
  if (
    isset($_POST['name']) &&
    isset($_POST['level']) &&
    isset($_POST['description']) &&
    isset($_POST['id_user'])
  ) {
    $arr = [
      "id" => uuid(),
      "name" => htmlspecialchars($_POST['name']),
      "level" => intval(htmlspecialchars($_POST['level'])),
      "distance" => intval(htmlspecialchars($_POST['distance'])),
      "duration" => intval(htmlspecialchars($_POST['duration'])),
      "elevation_gain" => intval(htmlspecialchars($_POST['elevation_gain'])),
      "description" => htmlspecialchars($_POST['description']),
      "image" => htmlspecialchars($_POST['image']),
      "id_user" => htmlspecialchars($_POST['id_user'])
    ];
    return $arr;
  } else {
    return false;
  }
}
