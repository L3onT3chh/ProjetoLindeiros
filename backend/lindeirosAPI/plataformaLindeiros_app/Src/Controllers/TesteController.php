<?php

namespace src\Controllers;


use core\Controller;
use src\Models\Entity\Teste;
use src\Models\Requisitor;

class TesteController extends Controller
{
    public function index()
    {
        $return = array("error" => "", "isValid" => false);
        
        $id = addslashes("93c32d62-ca82-4a02-8210-5ae8e8c104d1");
        $user = new Teste();
        $user = $user->get(false, $id);
        $return = ["data" => $user];

        $this->returnJson($return);
    }
}
