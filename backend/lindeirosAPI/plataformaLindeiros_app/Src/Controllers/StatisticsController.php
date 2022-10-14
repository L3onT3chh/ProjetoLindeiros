<?php

namespace src\Controllers;


use core\Controller;
use core\Cors;
use src\Models\Entity\Demands;
use src\Models\Entity\Proposal;
use src\Models\Entity\User;
use src\Models\Requisitor;

class StatisticsController extends Controller
{
    public $description = "Rotas destinadas a manipulação dos dados gerais do sistema. Aqui é possivel encontrar rotas que fornecem alguns dados estatisticos sobre demandas, eixos entre outros.";

    public function index()
    {
        $this->returnJson(["error" => "Ops.. essa rota não existe :()"]);
    }

    public function demandByMonth()
    {
        $return = array("error" => "", "isValid" => false);

        $req = new Requisitor;

        if (!empty($_SERVER['HTTP_TOKEN']) && $req->validateJWT($_SERVER['HTTP_TOKEN'])) {
            $user = new User();

            if (!$user->hasAutorityTo($req->getId())) {
                $return['error'] = 'Você não tem permissão para consultar essa rota';
                $this->returnJson($return);
                exit;
            }

            $statistic = new Demands();
            $statistic = $statistic->demandByMonth();
            
            $return = ["data" => $statistic];
        }else{
            $return["error"] = "Informe um token jwt valido";
        }

        $this->returnJson($return);
    }

    public function demandByAxes()
    {
        $return = array("error" => "", "isValid" => false);

        $req = new Requisitor;

        if (!empty($_SERVER['HTTP_TOKEN']) && $req->validateJWT($_SERVER['HTTP_TOKEN'])) {
            $user = new User();

            if (!$user->hasAutorityTo($req->getId())) {
                $return['error'] = 'Você não tem permissão para consultar essa rota';
                $this->returnJson($return);
                exit;
            }

            $statistic = new Demands();
            $statistic = $statistic->demandByAxes();
            $return = ["data" => $statistic];

        }else{
            $return["error"] = "Informe um token jwt valido";
        }

        $this->returnJson($return);
    }

    public function demandByCity()
    {
        $return = array("error" => "", "isValid" => false);

        $req = new Requisitor;

        if (!empty($_SERVER['HTTP_TOKEN']) && $req->validateJWT($_SERVER['HTTP_TOKEN'])) {
            $user = new User();

            if (!$user->hasAutorityTo($req->getId())) {
                $return['error'] = 'Você não tem permissão para consultar essa rota';
                $this->returnJson($return);
                exit;
            }

            $statistic = new Demands();
            $statistic = $statistic->demandByCity();
            $return = ["data" => $statistic];

        }else{
            $return["error"] = "Informe um token jwt valido";
        }

        $this->returnJson($return);
    }

    public function proposalQtd()
    {
        $return = array("error" => "", "isValid" => false);

        $req = new Requisitor;

        if (!empty($_SERVER['HTTP_TOKEN']) && $req->validateJWT($_SERVER['HTTP_TOKEN'])) {
            $user = new User();

            if (!$user->hasAutorityTo($req->getId())) {
                $return['error'] = 'Você não tem permissão para consultar essa rota';
                $this->returnJson($return);
                exit;
            }

            $statistic = new Proposal();
            $statistic = $statistic->getQtd();
            $return = ["data" => $statistic];
        }else{
            $return["error"] = "Informe um token jwt valido";
        }

        $this->returnJson($return);
    }
}
