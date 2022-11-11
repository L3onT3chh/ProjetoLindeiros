<?php

namespace src\Controllers;


use core\Controller;
use core\Cors;
use src\Models\Entity\City;
use src\Models\Requisitor;

class CityController extends Controller
{
    public $description = "Rotas destinadas a manipulação dos dados da entidade city. Entidade essa responsavel por armazenar os dados dos municipios lindeiros";

    public function index()
    {
        $this->returnJson(["error" => "Ops.. essa rota não existe :()"]);
    }

    public function all()
    {
        $return = array("error" => "", "isValid" => false);

        $city = new City();
        $city = $city->getAll();
        $return = ["data" => $city];

        $this->returnJson($return);
    }
}
