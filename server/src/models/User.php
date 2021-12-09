<?php

require_once("../lib/JWT.php");

class User
{
    private $conn;
    private $header = [
        "alg" => "HS256",
        "typ" => "JWT"
    ];

    public function __construct($db)
    {

        $this->conn = $db;
    }

    public function get($id)
    {
        try {
            $q = 'SELECT id, email, nickname, image, admin FROM user WHERE id=:id';
            $stmt = $this->conn->prepare($q);
            $stmt->execute([
                'id' => $id
            ]);
            return $stmt;
        } catch (PDOException $err) {
            echo json_encode(['message' => $err->getMessage()]);
        }
    }

    public function create($req)
    {

        try {
            $q = 'INSERT INTO user (id, nickname, email, password, image) 
        VALUES (:id, :nickname, :email , :password, :image )';
            $stmt = $this->conn->prepare($q);
            $stmt->execute([
                'id' => $req['id'],
                'nickname' => $req['nickname'],
                'email' => $req['email'],
                'password' => password_hash($req['password'], PASSWORD_BCRYPT),
                'image' => $req['image']
            ]);
            $res = $this->get($req['id']);
            $this->formatRes($res, "Failed", "User created !", true);
        } catch (PDOException $err) {
            echo json_encode(['message' => $err->getMessage()]);
        }
    }


    public function update($req, $id)
    {
        try {
            $q = 'UPDATE user SET password=:password, image=:image ';
            $stmt = $this->conn->prepare($q);
            $stmt->execute([
                'password' => $req['password'],
                'image' => $req['image']
            ]);
            $res = $this->get($id);
            $this->formatRes($res, 'Error', 'Updated with success !');
        } catch (PDOException $err) {
            echo json_encode(['message' => $err->getMessage()]);
        }
    }

    public function checkAuth($req)
    {
        try {
            $q = 'SELECT password, id from user WHERE email = :email';
            $stmt = $this->conn->prepare($q);
            $stmt->execute(["email" => $req['email']]);
            if ($stmt->rowCount() === 0) {
                http_response_code(403);
                echo json_encode(['message' => 'Invalid credentials']);
            } else {
                $user = $stmt->fetch(PDO::FETCH_ASSOC);
                if (password_verify($req['password'], $user['password'])) {
                    $res = $this->get($user['id']);
                    $this->formatRes($res, "Failed", "Authentificated User !", true);
                } else {
                    http_response_code(403);
                    echo json_encode(['message' => 'Invalid credentials']);
                }
            }
        } catch (PDOException $err) {
            echo json_encode(['message' => $err->getMessage()]);
        }
    }

    /**
     * Format request to send to JSON
     * @param PDO pdo response
     * @param String Message to display if empty request
     */
    public function formatRes($res, $errMsg, $successMsg, $token = false)
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
                if ($token) {
                    $jwt = new JWT();
                    $token = $jwt->generate(
                        $this->header,
                        [
                            'email' => $row['email'],
                            'nickname' => $row['nickname'],
                            'image' => $row['image'],
                            'id' => $row['id']
                        ],
                        SECRET
                    );
                    $res_arr['token'] = "Bearer $token";
                }
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
