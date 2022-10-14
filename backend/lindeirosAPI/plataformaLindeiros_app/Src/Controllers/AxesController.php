<?php

namespace src\Controllers;


use core\Controller;
use core\Cors;
use src\Models\Entity\Axes;
use src\Models\Requisitor;

class AxesController extends Controller
{
    public $description = "Rotas destinadas a manipulação dos dados da entidade axes. Onde se encontra os eixos estruturantes que fazem parte do programa de governança";

    public function index()
    {
        $this->returnJson(["error" => "Ops.. essa rota não existe :()"]);
    }

    public function all()
    {
        $return = array("error" => "", "isValid" => false);

        $axes = new Axes();
        $axes = $axes->getAll();
        $return = ["data" => $axes];

        $this->returnJson($return);
    }
}
