<?php

namespace src\Controllers;

use core\Controller;
use src\Models\Entity\Demands;
use src\Models\Entity\User;
use src\Models\Requisitor;

class DemandaController extends Controller
{
    public $description = "Rotas destinadas a manipulação dos dados da entidade demanda, principal objeto do sistema seu cadastro, remoção, e edição somente é realizado pelo administrador, portanto todas as rotas exceto a get necessitam do token jwt";

    public function index()
    {
    }

    public function single($params)
    {
        $return = array("error" => "", "isValid" => false);

        $req = new Requisitor;

        if (isset($params["id"])) {
            $id = addslashes($params["id"]);
            $demand = new Demands();
            $demand = $demand->getOne($id);
            $return = ["data" => $demand];
        } else {
            $return['error'] = "Por favor, informe o valor do id!!";
        }

        $this->returnJson($return);
    }

    public function delete($params)
    {
        $return = array("error" => "", "isValid" => false);

        $req = new Requisitor;
        $user = new User();

        if (isset($params["id"])) {
            if (!empty($_SERVER['HTTP_TOKEN']) && $req->validateJWT($_SERVER['HTTP_TOKEN'])) {
                if (!$user->hasAutorityTo($req->getId())) {
                    $return['error'] = "Seu usuario não tem permissão para essa ação!!";
                    $this->returnJson($return);
                    exit;
                }

                $id = addslashes($params["id"]);
                $demand = new Demands();
                $demand = $demand->delete($id);

                if(!$demand["isValid"]){
                    $return["error"] = $demand["error"];
                    $this->returnJson($return);
                    exit;
                }

                $return["isValid"] = true;
            }else{
                $return['error'] = 'Acesso negado informe um jwt valido';
            }
        } else {
            $return['error'] = "Por favor, informe o valor do id!!";
        }

        $this->returnJson($return);
    }

    public function edit($params)
    {
        $return = array("error" => "", "isValid" => false);

        $demand = new Demands();
        $user = new User();
        $req = new Requisitor();

        if (!empty($_SERVER['HTTP_TOKEN']) && $req->validateJWT($_SERVER['HTTP_TOKEN'])) {
            $data = $this->getRequestData();

            if (!isset($params["id"])) {
                $return['error'] = "Por favor, informe o valor do id!!";
                $this->returnJson($return);
                exit;
            }

            if (!$user->hasAutorityTo($req->getId())) {
                $return['error'] = "Seu usuario não tem permissão para essa ação!!";
                $this->returnJson($return);
                exit;
            }

            $id = addslashes($params["id"]);

            $dataEdit['name'] = addslashes((isset($data["name"])) ? $data["name"] : "");
            $dataEdit['progress'] = addslashes((isset($data["progress"])) ? $data["progress"] : "");
            $dataEdit['description'] = addslashes((isset($data["description"])) ? $data["description"] : "");
            $dataEdit['cover'] = addslashes((isset($data["cover"])) ? $data["cover"] : "");
            $dataEdit['status'] = addslashes((isset($data["status"])) ? $data["status"] : "");
            $dataEdit['priority'] = addslashes((isset($data["priority"])) ? $data["priority"] : "");
            $dataEdit['generalText'] = addslashes((isset($data["generalText"])) ? $data["generalText"] : "");
            $dataEdit['specificText'] = addslashes((isset($data["specificText"])) ? $data["specificText"] : "");
            $dataEdit['axes_id'] = addslashes((isset($data["axes_id"])) ? $data["axes_id"] : "");
            $dataEdit['city_id'] = addslashes((isset($data["city_id"])) ? $data["city_id"] : "");

            $result = $demand->edit($dataEdit, $id);

            if ($result['isValid']) {
                $return['data'] = "success";
                $return["isValid"] = true;
            } else {
                $return['error'] = $result['error'];
            }
        } else {
            $return['error'] = 'Acesso negado informe um jwt valido';
        }

        $this->returnJson($return);
    }

    public function create()
    {
        $return = array("error" => "", "isValid" => false);

        $demand = new Demands();
        $user = new User();
        $req = new Requisitor();

        if (!empty($_SERVER['HTTP_TOKEN']) && $req->validateJWT($_SERVER['HTTP_TOKEN'])) {
            $data = $this->getRequestData();

            if (!$user->hasAutorityTo($req->getId())) {
                $return['error'] = "Seu usuario não tem permissão para essa ação!!";
                $this->returnJson($return);
                exit;
            }

            $dataAdd['name'] = addslashes((isset($data["name"])) ? $data["name"] : "");
            $dataAdd['description'] = addslashes((isset($data["description"])) ? $data["description"] : "");
            $dataAdd['priority'] = addslashes((isset($data["priority"])) ? $data["priority"] : "");
            $dataAdd['generalText'] = addslashes((isset($data["generalText"])) ? $data["generalText"] : "");
            $dataAdd['specificText'] = addslashes((isset($data["specificText"])) ? $data["specificText"] : "");
            $dataAdd['axes_id'] = addslashes((isset($data["axes_id"])) ? $data["axes_id"] : "");
            $dataAdd['city_id'] = addslashes((isset($data["city_id"])) ? $data["city_id"] : "");

            $result = $demand->add($dataAdd);

            if ($result['isValid']) {
                $return['data'] = "success";
                $return["isValid"] = true;
            } else {
                $return['error'] = $result['error'];
            }
        } else {
            $return['error'] = 'Acesso negado informe um jwt valido';
        }

        $this->returnJson($return);
    }

    public function all()
    {
        $return = array("error" => "", "isValid" => false);

        $demand = new Demands();
        $demand = $demand->getAll(true);
        $return = ["data" => $demand];

        $this->returnJson($return);
    }
}
