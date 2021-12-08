<?php
class User{
 private $conn;

 public function __construct($db){

    $this->conn= $db;

 }

public function get($id){
    try {
        $q = 'SELECT * FROM user WHERE id=:id';
        $stmt= $this->conn->prepare($q);
        $stmt->execute([
            'id'=>$id        ]);
        return $stmt;


    } catch (PDOException $err) {
        echo json_encode(['message'=>$err->getMessage()]);
    }
}

public function create($req){
    try {
        $q = 'INSERT INTO user (id, nickname, email, password, image) 
        VALUES (:id, :nickname, :email , :password, :image )';
        $stmt= $this->conn->prepare($q);
        $stmt->execute([
            'id'=>$req['id'],
            'nickname'=>$req['nickname'],
            'email'=>$req['email'],
            'password'=>password_hash($req['password'], PASSWORD_BCRYPT),
            'image'=>$req['image']
        ]);
    $res=$this->get($req['id']);
    $this->formatRes($res, 'Error', 'Created with success !');
    
    } catch (PDOException $err) {
        echo json_encode(['message'=>$err->getMessage()]);
    }
}


 public function update($req, $id){
     try {
         $q ='UPDATE user SET password=:password, image=:image ';
         $stmt= $this->conn->prepare($q);
         $stmt->execute([
             'password'=>$req['password'],
             'image'=>$req['image']
         ]);
     $res=$this->get($id);
     $this->formatRes($res, 'Error', 'Updated with success !');
     
     } catch (PDOException $err) {
         echo json_encode(['message'=>$err->getMessage()]);
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
