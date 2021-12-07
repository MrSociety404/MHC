<?php

class Hiking
{

  private $conn;

  /**
   * Construct the databse
   * @param PDO pdo connection to the database
   */
  public function __construct($db)
  {
    $this->conn = $db;
  }

  /**
   * Get all the hiking
   * @param String Optional id of the hiking to fetch
   * @return JSON object
   */
  public function get($id = null)
  {
    $q = 'SELECT * FROM hiking';

    // if have an id add to the query
    if ($id !== null) {
      $q .= " WHERE id=\"" . $id . "\"";
    }

    // prepare & execute the query
    $stmt = $this->conn->prepare($q);
    $stmt->execute();

    return $stmt;
  }

  /**
   * Create a hiking
   * @return created hiking
   */
  public function create($req)
  {
    try {
      $q = 'INSERT INTO hiking 
        (id, name, level, distance, duration, elevation_gain, description, image, id_user ) VALUES 
        (:id, :name, :level, :distance, :duration, :elevation_gain, :description, :image, :id_user );';

      $stmt = $this->conn->prepare($q);
      $stmt->execute([
        'id' => $req['id'],
        'name' => $req['name'],
        'level' => $req['level'],
        'distance' => $req['distance'],
        'duration' => $req['duration'],
        'elevation_gain' => $req['elevation_gain'],
        'description' => $req['description'],
        'image' => $req['image'],
        'id_user' => $req['id_user']
      ]);
    } catch (PDOException $err) {
      echo json_encode(['message' => $err->getMessage()]);
    }
    $res = $this->get($req['id']);
    $this->formatRes($res, 'Error in the post', 'Hiking add with success !');
  }

  /**
   * Delete an hiking
   */
  public function delete($id)
  {
    $resHiking = $this->get($id);
    if($resHiking->rowCount() !== 0) {
      try {
        $q = 'DELETE FROM hiking WHERE id = :id';
        $stmt = $this->conn->prepare($q);
        $stmt->execute(['id' => $id]);
        echo json_encode(['message' => 'Delete with success !']);
      } catch (PDOException $err) {
        echo json_encode(['message' => $err->getMessage()]);
      }
    } else {
      echo json_encode(['message' => "no match id"]);
    }
  }

  /**
   * Update an Hiking
   */
  public function update($id, $req) 
  {
    try {
      $q = 'UPDATE hiking SET 
        name = :name,
        level = :level,
        distance = :distance,
        duration = :duration,
        elevation_gain = :elevation_gain,
        description = :description,
        image = :image 
        WHERE id = :id';
      $stmt = $this->conn->prepare($q);
      $stmt->execute([
        'name' => $req['name'],
        'level' => $req['level'],
        'distance' => $req['distance'],
        'duration' => $req['duration'],
        'elevation_gain' => $req['elevation_gain'],
        'description' => $req['description'],
        'image' => $req['image'],
        'id' => $id
      ]);
      $res = $this->get($id);
      $this->formatRes($res, 'Cannot update', 'Update with succcess');
    } catch(PDOException $err) {
      echo json_encode(['message' => $err->getMessage()]);
    }
  }

  /**
   * Format request to send to JSON
   * @param PDO pdo response
   * @param String Message to display if empty request
   */
  public function formatRes($res, $errMsg, $successMsg)
  {
    $num = $res->rowCount();

    // check if any user
    if ($num > 0) {
      // user arr 
      $res_arr = [];
      $res_arr['message'] = $successMsg;
      $res_arr['data'] = [];

      while ($row = $res->fetch(PDO::FETCH_ASSOC)) {
        array_push($res_arr['data'], $row);
      }

      // Turn to JSON
      echo json_encode($res_arr);
    } else {
      http_response_code(404);

      echo json_encode(
        array('message' => $errMsg)
      );
    }
  }
}
