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
    $_POST['distance'] = isset($_POST['distance']) ? $_POST['distance'] : null;
    $_POST['duration'] = isset($_POST['duration']) ? $_POST['duration'] : null;
    $_POST['elevation_gain'] = isset($_POST['elevation_gain']) ? $_POST['elevation_gain'] : null;
    $_POST['image'] = isset($_POST['image']) ? $_POST['image'] : null;
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

function clearHikingUpdate()
{
  if (
    isset($_POST['name']) &&
    isset($_POST['level']) &&
    isset($_POST['description'])
  ) {
    $_POST['distance'] = isset($_POST['distance']) ? $_POST['distance'] : null;
    $_POST['duration'] = isset($_POST['duration']) ? $_POST['duration'] : null;
    $_POST['elevation_gain'] = isset($_POST['elevation_gain']) ? $_POST['elevation_gain'] : null;
    $_POST['image'] = isset($_POST['image']) ? $_POST['image'] : null;
    $arr = [
      "name" => htmlspecialchars($_POST['name']),
      "level" => intval(htmlspecialchars($_POST['level'])),
      "distance" => intval(htmlspecialchars($_POST['distance'])),
      "duration" => intval(htmlspecialchars($_POST['duration'])),
      "elevation_gain" => intval(htmlspecialchars($_POST['elevation_gain'])),
      "description" => htmlspecialchars($_POST['description']),
      "image" => htmlspecialchars($_POST['image']),
    ];
    return $arr;
  } else {
    return false;
  }
}