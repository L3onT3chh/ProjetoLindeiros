<?php

namespace src\Models;

use src\Config;

class Requisitor
{

    private $user_id;

    public function validateCredentials($id)
    {
        $this->user_id = $id;
        return true;
    }

    public function isLogged(){
        if(!empty($this->user_id)){
            return true;
        }

        return false;
    }

    public function getId(){
        return $this->user_id;
    }

    public function validateJWT($token)
    {
        $jwt = new Jwt;
        $info = $jwt->validate($token);

        if (isset($info->user_id)) {
            $this->user_id = $info->user_id;
            return true;
        } else {
            return false;
        }

        return $jwt->create(["user_id" => $this->user_id]);
    }

    public function createJWT()
    {
        $jwt = new Jwt;

        return $jwt->create(["user_id" => $this->user_id]);
    }
}
