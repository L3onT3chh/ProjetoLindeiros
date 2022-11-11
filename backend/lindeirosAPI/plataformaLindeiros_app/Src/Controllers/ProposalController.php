<?php

namespace src\Controllers;

use core\Controller;
use src\Models\Entity\Proposal;
use src\Models\Entity\User;
use src\Models\Requisitor;

class ProposalController extends Controller
{
    public $description = "Rotas destinadas a manipulação dos dados da entidade proposal, aqui é onde se encontra as proposta enviada pelos representantes. Cada uma proposta é obrigatoriamente relacionada a uma demanda.";

    public function index()
    {
    }

    public function add()
    {
        $return = array("error" => "", "isValid" => false);
        $data = $this->getRequestData();
        $req = new Requisitor;
        $user = new User;

        if (!empty($_SERVER['HTTP_TOKEN']) && $req->validateJWT($_SERVER['HTTP_TOKEN'])) {
            if ($req->isLogged()) {
                if ($user->exist($req->getId())) {
                    $data['description'] = addslashes((isset($data["description"])) ? $data["description"] : "");
                    $data['priority'] = addslashes((isset($data["priority"])) ? $data["priority"] : "");
                    $data['value'] = addslashes((isset($data["value"])) ? $data["value"] : "");
                    $data['deadline'] = addslashes((isset($data["deadline"])) ? $data["deadline"] : "");
                    $data['demands_id'] = addslashes((isset($data["demands_id"])) ? $data["demands_id"] : "");
                    $data['time'] = json_decode($data['time']);
                    $data['user'] = $user->getOne($req->getId(), true);

                    $proposal = new Proposal();
                    $result = $proposal->add($data);

                    if ($result['isValid']) {
                        $return['data'] = "success";
                        $return["isValid"] = true;
                    } else {
                        $return['error'] = $result['error'];
                    }
                } else {
                    $return['error'] = 'Esse usuario não existe';
                }
            } else {
                $return['error'] = 'É neccessario estar logado para executar essa ação';
            }
        } else {
            $return['error'] = 'Acesso negado informe um jwt valido';
        }

        $this->returnJson($return);
    }

    public function edit($params)
    {
        $return = array("error" => "", "isValid" => false);
        $req = new Requisitor;
        $user = new User;
        $proposal = new Proposal();

        if (isset($params["id"])) {
            $id = addslashes($params["id"]);

            if (!empty($_SERVER['HTTP_TOKEN']) && $req->validateJWT($_SERVER['HTTP_TOKEN'])) {
                $data = $this->getRequestData();

                if (!$user->hasAutorityTo($req->getId()) && !$proposal->isMine($id, $req->getId())) {
                    $return['error'] = "Seu usuario não tem permissão para essa ação!!";
                    $this->returnJson($return);
                    exit;
                }
                
                $dataEdit['description'] = addslashes((isset($data["description"])) ? $data["description"] : "");
                $dataEdit['priority'] = addslashes((isset($data["priority"])) ? $data["priority"] : "");
                $dataEdit['value'] = addslashes((isset($data["value"])) ? $data["value"] : "");
                $dataEdit['deadline'] = addslashes((isset($data["deadline"])) ? $data["deadline"] : "");

                $result = $proposal->edit($dataEdit, $id);

                if ($result['isValid']) {
                    $return['data'] = "success";
                    $return["isValid"] = true;
                } else {
                    $return['error'] = $result['error'];
                }
            } else {
                $return['error'] = 'Acesso negado informe um jwt valido';
            }
        } else {
            $return['error'] = 'Por favor, informe o valor do id!!';
        }

        $this->returnJson($return);
    }

    public function delete($params)
    {
        $return = array("error" => "", "isValid" => false);

        $req = new Requisitor;
        $user = new User();
        $proposal = new Proposal();

        if (isset($params["id"])) {
            if (!empty($_SERVER['HTTP_TOKEN']) && $req->validateJWT($_SERVER['HTTP_TOKEN'])) {
                $id = addslashes($params["id"]);
                
                if (!$user->hasAutorityTo($req->getId()) && !$proposal->isMine($id, $req->getId())) {
                    $return['error'] = "Seu usuario não tem permissão para essa ação!!";
                    $this->returnJson($return);
                    exit;
                }

                $proposal = new Proposal();
                $proposal = $proposal->delete($id);

                if(!$proposal["isValid"]){
                    $return["error"] = $proposal["error"];
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

    public function getList($params)
    {
        $return = array("error" => "", "isValid" => false);

        if (isset($params["id"])) {
            $id = addslashes($params["id"]);

            $proposal = new Proposal();
            $result = $proposal->getAllByDemandId($id);

            if (!empty($result)) {
                $return['data'] = $result;
                $return["isValid"] = true;
            } else {
                $return['error'] = "Não foi possivel realizar a busca";
            }
        } else {
            $return['error'] = 'Informe o id';
        }

        $this->returnJson($return);
    }
}
