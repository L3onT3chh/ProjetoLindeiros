<?php

namespace src\Controllers;


use core\Controller;
use core\Cors;
use src\Models\Entity\UserType;
use src\Models\Requisitor;

class UserTypeController extends Controller
{
    public $description = "Rotas destinadas a manipulação dos dados da entidade userType, cada um dos usuarios cadastrados possuem um cargo e consequentemente um nivel de acesso. Essa entidade existe justamente para administrar os niveis de acesso";

    public function index()
    {
        $this->returnJson(["error" => "Ops.. essa rota não existe :()"]);
    }

    public function all()
    {
        $return = array("error" => "", "isValid" => false);

        $req = new Requisitor;

        if (!empty($_SERVER['HTTP_TOKEN']) && $req->validateJWT($_SERVER['HTTP_TOKEN'])) {
            $user = new UserType();
            $user = $user->getAll(true);
            $return = ["data" => $user];
        } else {
            $this->statusCode(404);
            $return['error'] = 'Acesso negado informe um jwt valido';
        }

        $this->returnJson($return);
    }
}
