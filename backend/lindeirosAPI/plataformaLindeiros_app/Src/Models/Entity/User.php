<?php

namespace src\Models\Entity;

use core\Model;
use PDO;
use DOMDocument;
use src\Models\Interfaces\EntityInterface;
use src\Models\utils\DomBuilder;
use src\Models\Uuid;

class User extends Model implements EntityInterface
{
    public function add($data)
    {
        $return = array("error" => "", "isValid" => false);
        $pattern = "/^([0-9]{4})\-([0-9]{2})\-([0-9]{2})$/i";

        if (empty($data["name"])) {
            $return['error'] = "Por favor informe o nome do usuario";
            return $return;
        }

        if (empty($data["phone"])) {
            $return['error'] = "Por favor informe o telefone do usuario";
            return $return;
        }

        if (empty($data["phone_ddd"])) {
            $return['error'] = "Por favor informe o ddd do usuario";
            return $return;
        }

        if (empty($data["email"])) {
            $return['error'] = "Por favor informe o email do usuario";
            return $return;
        }

        if (empty($data["password"])) {
            $return['error'] = "Por favor informe a senha do usuario";
            return $return;
        }

        if (empty($data["born_date"]) || !preg_match($pattern, $data["born_date"])) {
            $return['error'] = "Data de nascimento do usuario vazia ou fora do padrão yyyy-mm-dd";
            return $return;
        }

        if (empty($data["cpf"])) {
            $return['error'] = "Por favor informe o cpf do usuario";
            return $return;
        }

        if (empty($data["city"])) {
            $return['error'] = "Por favor informe a cidade do usuario";
            return $return;
        }

        if (empty($data["user_type"])) {
            $return['error'] = "Por favor informe o tipo desse usuario";
            return $return;
        }

        $dados = $this->_select(["*"])->_where("email", "=", $data["email"])->_execute(self::_ONE);

        if (count($dados) == 0) {
            $id = Uuid::v4();
            $data["id"] = $id;
            $data["city_id"] = $data["city"];
            $data["userType_id"] = $data["user_type"];
            $data["password"] = password_hash($data["password"], PASSWORD_DEFAULT);
            unset($data["city"]);
            unset($data["user_type"]);

            $this->_insert($data)->_execute();

            $return["isValid"] = true;
        } else {
            $return['error'] = "Um usuario com esse e-mail ja existe";
        }

        return $return;
    }

    public function hasAutorityOver($editId, $loggedId)
    {
        $userType = new UserType();

        $editPermission = $userType->getOne($editId, true);
        $loggedPermission = $userType->getOne($loggedId, true);

        if ($loggedPermission["UserType"]["permission"] <= $editPermission["UserType"]["permission"]) {
            return true;
        }

        return false;
    }

    public function hasAutorityTo($loggedId)
    {
        $userType = new UserType();

        $user = $this->getOnePure($loggedId, true);

        if (isset($user["userType_id"])) {
            $loggedPermission = $userType->getOnePure($user["userType_id"]);

            if (isset($loggedPermission["id"])) {
                if ($loggedPermission["permission"] == 1) {
                    return true;
                }
            }
        }

        return false;
    }

    public function getOne($id, $noParent = false, $jsonFormat = true)
    {
        $builder = new DomBuilder("user");

        if (Uuid::is_valid($id)) {
            $dados = $this->_select(["*"], [
                "userType_id" => "inner join|tb_usertype.id|name as userType",
                "city_id" => "inner join|tb_city.id|name as city"
            ])->_where("id", "=", $id)->_execute(self::_ONE);

            if (count($dados) > 0) {
                $dados['address'] = (empty($dados['address'])) ? "Não informado" : $dados['address'];
                unset($dados['city_id']);
                unset($dados['userType_id']);
                unset($dados['password']);

                $builder->generate($dados);

                return ($jsonFormat) ? $builder->buildObj() : $builder->getStruct($noParent);
            } else {
                return "Usuario não encontrado";
            }
        } else {
            return "Somente ids no formato uuid-v4 são aceitos";
        }
    }

    public function getOnePure($id)
    {
        if (Uuid::is_valid($id)) {
            $dados = $this->_select(["*"])->_where("id", "=", $id)->_execute(self::_ONE);

            if (count($dados) > 0) {
                $dados['address'] = (empty($dados['address'])) ? "Não informado" : $dados['address'];

                return $dados;
            } else {
                return "Usuario não encontrado";
            }
        } else {
            return "Somente ids no formato uuid-v4 são aceitos";
        }
    }

    public function getAll($noParent = false, $jsonFormat = true)
    {
        $builder = new DomBuilder("user");

        $dados = $this->_select(["*"], [
            "userType_id" => "inner join|tb_usertype.id|name as userType",
            "city_id" => "inner join|tb_city.id|name as city"
        ])->_execute();

        if (count($dados) > 0) {

            foreach ($dados as $item) {
                unset($item['city_id']);
                unset($item['userType_id']);
                unset($item['password']);
                $item['address'] = (empty($item['address'])) ? "Não informado" : $item['address'];

                $builder->generate($item);
            }

            return ($jsonFormat) ? $builder->buildObj() : $builder->getStruct($noParent);
        } else {
            return "Usuarios não encontrado";
        }
    }

    public function edit($data, $id)
    {
        $return = array("error" => "", "isValid" => false);


        if (Uuid::is_valid($id)) {
            if (count($data) > 0) {
                if ($this->exist($id)) {
                    if (isset($data["password"])) {
                        $data["password"] = password_hash($data["password"], PASSWORD_DEFAULT);
                    }

                    $data["city_id"] = $data["city"];
                    $data["userType_id"] = $data["user_type"];
                    unset($data["city"]);
                    unset($data["user_type"]);

                    $this->_update($data)->_where("id", "=", $id)->_execute();
                    $return["isValid"] = true;
                } else {
                    $return['error'] = "Não existe um usuario com esse id";
                }
            } else {
                $return['error'] = "Informe pelo menos um parametro";
            }
        } else {
            $return['error'] = "Somente ids no formato uuid-v4 são aceitos";
        }

        return $return;
    }

    public function delete($id)
    {
        $return = array("error" => "", "isValid" => false);

        if ($this->exist($id)) {
            if (Uuid::is_valid($id)) {
                $sql = $this->_delete()->_where("id", "=", $id)->_execute();
                $return["isValid"] = true;
            } else {
                $return['error'] = "Somente ids no formato uuid-v4 são aceitos";
            }
        } else {
            $return['error'] = "Esse usuario não existe";
        }

        return $return;
    }

    public function login($email, $password)
    {
        $return = array("error" => "", "isValid" => false);
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $dados = $this->_select(["*"])->_where("email", "=", $email)->_execute(self::_ONE);

            if (count($dados) > 0 && password_verify($password, $dados["password"])) {
                $return["response"] = $this->getOne($dados["id"]);

                if(isset($return["response"]["User"])){
                    unset($return["data"]['User']['password']);
                    $return["isValid"] = true;
                }else{
                    $return['error'] = $return["response"];    
                }
            } else {
                $return['error'] = "e-mail ou senha incorreta";
            }
        } else {
            $return['error'] = "Informe um e-mail valido";
        }

        return $return;
    }

    public function exist($id)
    {
        return ($this->_select(["*"])->_where("id", "=", $id)->_rowCount()) > 0 ? true : false;
    }
}
