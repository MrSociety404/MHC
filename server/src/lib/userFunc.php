<?php
require_once("uuid.php");

function clearUserPost(){

    if(
        isset($_POST ['nickname'])&&
        isset($_POST['email'])&&
        isset($_POST['password'])&&
        isset($_POST['image'])
    ){
        $res_arr=[
            'id'=>uuid(),
            'nickname'=>htmlspecialchars($_POST['nickname']),
            'email'=>htmlspecialchars($_POST['email']),
            'password'=>htmlspecialchars($_POST['paswword']),
            'image'=>htmlspecialchars($_POST['image'])

        ];

        return $res_arr;
    }else{
        return false;
    }
}