<?php

namespace src\Models\Entity;

use core\Model;
use src\Models\Utils\DomBuilder;
use src\Models\Interfaces\EntityInterface;
use src\Models\Uuid;

class Objective extends Model{
    public function add($data){
        $id = Uuid::v4();
        $data["id"] = $id;

        $this->_insert($data)->_execute();
        
        return $id;
    }
    public function getOne($id, $noParent = false, $jsonFormat = true){
        $builder = new DomBuilder("objective");
        
        if (Uuid::is_valid($id)) {
            $dados = $this->_select(["*"])->_where("id", "=", $id)->_execute(self::_ONE);
            
            if (count($dados) > 0) {
                $specificPush = array();
                $dados["textSpecific"] = explode("@", $dados["textSpecific"]);       

                foreach($dados["textSpecific"] as $item){
                    $specificPush[] = $this->getSpecific($item);
                }

                $dados["textSpecific"] = $specificPush;
                $builder->generate($dados);
                return ($jsonFormat) ? $builder->buildObj() : $builder->getStruct($noParent);
            } else {
                return "Objective não encontrado";
            }
        } else {
            return "Somente ids no formato uuid-v4 são aceitos";
        }
    }

    public function edit($data, $id)
    {
        $return = array("error" => "", "isValid" => false);


        if (Uuid::is_valid($id)) {
            if (count($data) > 0) {
                if ($this->exist($id)) {
                    $this->_update($data)->_where("id", "=", $id)->_execute();
                    $return["isValid"] = true;
                } else {
                    $return['error'] = "Não existe um objective com esse id";
                }
            } else {
                $return['error'] = "Informe pelo menos um parametro";
            }
        } else {
            $return['error'] = "Somente ids no formato uuid-v4 são aceitos";
        }

        return $return;
    }

    public function delete($id){
        $this->_delete()->_where("id", "=", $id)->_execute();
    }

    public function exist($id)
    {
        return ($this->_select(["*"])->_where("id", "=", $id)->_rowCount()) > 0 ? true : false;
    }

    private function getSpecific($specific){
        $specificFinal = array();
        $specificList = new DomBuilder("specificText");
        
    
        $specificFinal["text"] = $specific;    
        $specificList->generate($specificFinal);
        
        return $specificList->getStruct(true);
    }
}