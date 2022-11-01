<?php

namespace src\Controllers;


use core\Controller;
use src\Models\Uuid;

class NotFoundController extends Controller
{
    public function index(){
        echo "Not_found";
        echo Uuid::v4();
        // $this->returnJson(["error"=>"Ops.. essa rota não existe :()"]);
    }
}

