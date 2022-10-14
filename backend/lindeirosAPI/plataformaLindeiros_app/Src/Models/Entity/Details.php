<?php

namespace src\Models\Entity;

use core\Model;
use src\Models\Interfaces\EntityInterface;
use src\Models\Utils\DomBuilder;
use src\Models\Uuid;

class Details extends Model{
    public function add($data){
        $data["id"] = Uuid::v4();
        $this->_insert($data)->_execute();

        return $data["id"];
    }
    public function getAll($id, $noParent = false, $jsonFormat = true)
    {
        $builder = new DomBuilder("details");

        $dados = $this->_select(["*"])->_where("demands_id", "=", $id)->_execute();

        if (count($dados) > 0) {

            foreach ($dados as $item) {
                $builder->generate($item);
            }

            return ($jsonFormat) ? $builder->buildObj() : $builder->getStruct($noParent);
        } else {
            return "Usuarios não encontrado";
        }
    }

    public function getOne($id, $noParent = false, $jsonFormat = true){
        $return = array("error" => "", "isValid" => false);

        $builder = new DomBuilder("details");
        
        if (Uuid::is_valid($id)) {
            $dados = $this->_select(["*"])->_where("id", "=", $id)->_execute(self::_ONE);

            if (count($dados) > 0) {
                $builder->generate($dados);

                $return["idValid"] = true;
                return ($jsonFormat) ? $builder->buildObj() : $builder->getStruct($noParent);
            } else {
                $return['error'] = "Demanda não encontrada";
            }
        } else {
            $return['error'] = "Somente ids no formato uuid-v4 são aceitos";
        }

        return $return;
    }

    public function edit($data, $id){
        $this->_update($data)->_where("id", "=", $id)->_execute();
    }

    public function delete($id){
        $this->_delete()->_where("id", "=", $id)->_execute();
    }

    public function exist($id){

    }
}