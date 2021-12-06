<?php

require_once ("config.php");

/**
 * Handling Database 
 */
class Database {

  private $conn;

  /**
   * Connect to the DB
   * @return connection from the DB
   */
  public function connect() {
    $this->conn = null;

    try {

      $this->conn = new PDO(DB_DSN,DB_USER,DB_PASS);
      $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      return $this->conn;

    } catch(PDOException $err) {
      echo $err->getMessage();
    }


  }

  /**
   * Disconnect from the DB
   */
  public function disconnect() {
    $this->conn = null;
  }

}