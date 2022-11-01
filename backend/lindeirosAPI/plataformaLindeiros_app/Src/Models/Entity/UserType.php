<?php

namespace src\Models\Entity;

use core\Model;
use PDO;
use DOMDocument;
use src\Models\Interfaces\EntityInterface;
use src\Models\utils\DomBuilder;
use src\Models\Uuid;

class UserType extends Model implements EntityInterface
{
    public function add($data)
    {
        $return = array("error" => "", "isValid" => false);

        if (empty($data["extension"])) {
            $return['error'] = "Por favor informe a extensão do documento";
            return $return;
        }

        if (empty($data["path"])) {
            $return['error'] = "Por favor informe o caminho do documento";
            return $return;
        }

        if (empty($data["demands_id"])) {
            $return['error'] = "Por favor informe o id da demanda relacionada a esse documento";
            return $return;
        }

        $data["name"] = md5(time().rand(0, 999999));

        $dados = $this->_select(["*"])->_where("name", "=", $data["name"])->_execute(self::_ONE);

        if (count($dados) != 0) {
            $data["name"] = md5(time().rand(0, 999999));
        }

        $data['id'] = Uuid::v4();

        $this->_insert($data)->_execute();
        $return["isValid"] = true;

        return $return;
    }

    public function getOne($id, $noParent = false, $jsonFormat = true){
        $builder = new DomBuilder("userType");
        $dados = $this->_select(["*"])->_where("id", "=", $id)->_execute(self::_ONE);

        if (count($dados) > 0) {
            $builder->generate($dados);

            return ($jsonFormat) ? $builder->buildObj() : $builder->getStruct($noParent);
        } else {
            return "Usuario não encontrados";
        }
    }

    public function getOnePure($id)
    {
        if (Uuid::is_valid($id)) {
            $dados = $this->_select(["*"])->_where("id", "=", $id)->_execute(self::_ONE);

            if (count($dados) > 0) {
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
        $builder = new DomBuilder("userType");
        $dados = $this->_select(["*"])->_execute();

        if (count($dados) > 0) {
            foreach($dados as $item){
                $builder->generate($item);
            }

            return ($jsonFormat) ? $builder->buildObj() : $builder->getStruct($noParent);
        } else {
            return "Documentos não encontrados";
        }
    }

    public function edit($data, $id)
    {
        $return = array("error" => "", "isValid" => false);


        if (Uuid::is_valid($id)) {
            if (count($data) > 0) {
                if ($this->exist($id)) {
                    if(isset($data["password"])){
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
            $dados = $this->_select(["*"])->_where("email", "=", $email)->_execute();
        
            if (count($dados) > 0 && password_verify($password, $dados[0]["password"])) {
                $return["response"] = $this->getOne($dados[0]["id"]);
                unset($return["data"]['User']['password']);
                $return["isValid"] = true;
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
