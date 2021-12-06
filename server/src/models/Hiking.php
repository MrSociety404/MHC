<?php 

class Hiking {

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
  public function get($id=null) {
    $q = 'SELECT * FROM hiking';

    // if have an id add to the query
    if($id!== null) {
      $q .= " WHERE id=\"".$id."\"";
    }

    // prepare & execute the query
    $stmt = $this->conn->prepare($q);
    $stmt->execute();

    $this->formatRes($stmt, 'No hiking found');
  }

  /**
   * Create a hiking
   * @return created hiking
   */
  public function create($req) {
    echo json_encode($req);
  }

  /**
   * Format request to send to JSON
   * @param PDO pdo response
   * @param String Message to display if empty request
   */
  private function formatRes($res, $errMsg) {
    $num = $res->rowCount();

    // check if any user
    if ($num > 0) {
      // user arr 
      $res_arr = [];
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