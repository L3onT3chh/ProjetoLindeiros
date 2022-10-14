<?php

namespace src\Controllers;


use core\Controller;
use core\Cors;
use src\Models\Entity\User;
use src\Models\Requisitor;

class UserController extends Controller
{
    public $description = "Rotas destinadas a manipulação dos dados da entidade user, seja representantes ou administrador essa entidade contempla todos os usuarios do sistema";

    public function index()
    {
        $this->returnJson(["error" => "Ops.. essa rota não existe :()"]);
    }

    public function create()
    {
        $return = array("error" => "", "isValid" => false);

        $data = $this->getRequestData();
        $req = new Requisitor;


        if (!empty($_SERVER['HTTP_TOKEN']) && $req->validateJWT($_SERVER['HTTP_TOKEN'])) {
            $dataAdd = array();
            $user = new User();

            if (!$user->hasAutorityTo($req->getId())) {
                $return['error'] = 'Você não tem permissão para criar esse usuario';
                $this->returnJson($return);
                exit;
            }

            $dataAdd['born_date'] = addslashes((isset($data["born_date"])) ? $data["born_date"] : "");
            $dataAdd['cpf'] = addslashes((isset($data["cpf"])) ? $data["cpf"] : "");
            $dataAdd['email'] = addslashes((isset($data["email"])) ? $data["email"] : "");
            $dataAdd['password'] = addslashes((isset($data["password"])) ? $data["password"] : "");
            $dataAdd['name'] = addslashes((isset($data["name"])) ? $data["name"] : "");
            $dataAdd['phone'] = addslashes((isset($data["phone"])) ? $data["phone"] : "");
            $dataAdd['phone_ddd'] = addslashes((isset($data["phone_ddd"])) ? $data["phone_ddd"] : "");
            $dataAdd['city'] = addslashes((isset($data["city"])) ? $data["city"] : "");
            $dataAdd['user_type'] = addslashes((isset($data["user_type"])) ? $data["user_type"] : "");
            $dataAdd['address'] = addslashes((isset($data["address"])) ? $data["address"] : "");

            $result = $user->add($dataAdd);

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

    public function single($params)
    {
        $return = array("error" => "", "isValid" => false);

        $data = $this->getRequestData();
        $req = new Requisitor;

        if (!empty($_SERVER['HTTP_TOKEN']) && $req->validateJWT($_SERVER['HTTP_TOKEN'])) {
            if (isset($params["id"])) {
                $id = addslashes($params["id"]);
                $user = new User();
                $user = $user->getOne($id);
                $return = ["data" => $user];
            } else {
                $this->statusCode(404);
                $return['error'] = "Por favor, informe o valor do id!!";
            }
        } else {
            $this->statusCode(404);
            $return['error'] = 'Acesso negado informe um jwt valido';
        }

        $this->returnJson($return);
    }

    public function all()
    {
        $return = array("error" => "", "isValid" => false);

        $data = $this->getRequestData();
        $req = new Requisitor;

        if (!empty($_SERVER['HTTP_TOKEN']) && $req->validateJWT($_SERVER['HTTP_TOKEN'])) {
            $user = new User();
            $user = $user->getAll(true);
            $return = ["data" => $user];
        } else {
            $this->statusCode(404);
            $return['error'] = 'Acesso negado informe um jwt valido';
        }

        $this->returnJson($return);
    }

    public function edit($params)
    {
        $return = array("error" => "", "isValid" => false);

        $data = $this->getRequestData();
        $req = new Requisitor;

        $user = new User();
        $id = addslashes($params["id"]);

        if (!empty($_SERVER['HTTP_TOKEN']) && $req->validateJWT($_SERVER['HTTP_TOKEN'])) {
            if (isset($params["id"])) {
                $dataEdit = array();

                $loggedType = $user->getOnePure($req->getId(), true);
                $editType = $user->getOnePure($id, true);

                if (!$user->hasAutorityOver($editType["User"]["userType_id"], $loggedType["User"]["userType_id"])) {
                    $return['error'] = 'Você não tem permissão para editar esse usuario';
                    $this->returnJson($return);
                    exit;
                }

                $dataEdit['born_date'] = addslashes((isset($data["born_date"])) ? $data["born_date"] : "");
                $dataEdit['cpf'] = addslashes((isset($data["cpf"])) ? $data["cpf"] : "");
                $dataEdit['email'] = addslashes((isset($data["email"])) ? $data["email"] : "");
                $dataEdit['password'] = addslashes((isset($data["password"])) ? $data["password"] : "");
                $dataEdit['name'] = addslashes((isset($data["name"])) ? $data["name"] : "");
                $dataEdit['phone'] = addslashes((isset($data["phone"])) ? $data["phone"] : "");
                $dataEdit['phone_ddd'] = addslashes((isset($data["phone_ddd"])) ? $data["phone_ddd"] : "");
                $dataEdit['city'] = addslashes((isset($data["city"])) ? $data["city"] : "");
                $dataEdit['user_type'] = addslashes((isset($data["user_type"])) ? $data["user_type"] : "");
                $dataEdit['address'] = addslashes((isset($data["address"])) ? $data["address"] : "");

                $result = $user->edit($dataEdit, $id);

                if ($result['isValid']) {
                    $return['data'] = "success";
                    $return["isValid"] = true;
                } else {
                    $return['error'] = $result['error'];
                }
            } else {
                $return['error'] = "Por favor, informe o valor do id!!";
            }
        } else {
            $return['error'] = 'Acesso negado informe um jwt valido';
        }

        $this->returnJson($return);
    }

    public function delete($param)
    {
        $return = array("error" => "", "isValid" => false);
        $req = new Requisitor;

        if (!empty($_SERVER['HTTP_TOKEN']) && $req->validateJWT($_SERVER['HTTP_TOKEN'])) {
            if (isset($param["id"])) {
                $user = new User();
                $id = addslashes($param["id"]);

                $result = $user->delete($id);

                if ($result['isValid']) {
                    $return['data'] = "success";
                    $return["isValid"] = true;
                } else {
                    $return['error'] = $result['error'];
                }
            } else {
                $return['error'] = "Por favor, informe o valor do id!!";
            }
        } else {
            $return['error'] = 'Acesso negado informe um jwt valido';
        }

        $this->returnJson($return);
    }

    public function login()
    {
        $return = array("error" => "", "isValid" => false);

        $data = $this->getRequestData();
        $req = new Requisitor;

        if (isset($data["email"]) && isset($data["password"])) {
            $user = new User();

            $email = addslashes($data["email"]);
            $password = addslashes($data["password"]);

            $result = $user->login($email, $password);

            if ($result['isValid']) {
                if (!$user->hasAutorityTo($result["response"]["User"]["id"])) {
                    $return['error'] = 'Você não tem permissão para efetuar o login';
                    $this->returnJson($return);
                    exit;
                }

                $return = $result;
                $req->validateCredentials($return['response']['User']['id']);
                $return['response']['User']['jwt'] = $req->createJWT();
            } else {
                $return['error'] = $result['error'];
            }
        } else {
            $return['error'] = "Por favor, informe email e senha do usuario";
        }

        $this->returnJson($return);
    }
}
