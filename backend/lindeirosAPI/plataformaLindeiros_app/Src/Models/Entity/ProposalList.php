<?php

namespace src\Models\Entity;

use core\Model;
use src\Models\Interfaces\EntityInterface;
use src\Models\Utils\DomBuilder;
use src\Models\Uuid;

class ProposalList extends Model{
    public function add($data){
        if(!empty($data)){
            $this->_insert($data)->_execute();
        }
    }
    public function getByDemand($id, $noParent = false, $jsonFormat = true)
    {
        $builder = new DomBuilder("proposalList");

        $dados = $this->_select(["proposal_id"])->_where("demands_id", "=", $id)->_execute();
        
        if (count($dados) > 0) {

            foreach ($dados as $item) {
                $builder->generate($item);
            }

            return ($jsonFormat) ? $builder->buildObj() : $builder->getStruct($noParent);
        } else {
            return "Proposta não encontrado";
        }
    }

    public function getOne($id, $noParent = false, $jsonFormat = true){
        $return = array("error" => "", "isValid" => false);

        $builder = new DomBuilder("proposalList");
        
        if (Uuid::is_valid($id)) {
            $dados = $this->_select(["*"])->_where("id", "=", $id)->_execute(self::_ONE);
            $axes = new Axes();
            $city = new City();
            $objective = new Objective();

            if (count($dados) > 0) {
                $dados["progress"] = (isset($dados["progress"])) ? $dados["progress"] : 0;
                $dados["objective_id"] = $objective->getOne($dados["objective_id"], true, false);
                $dados["axes_id"] = $axes->getOne($dados["axes_id"], true, false);
                $dados["city_id"] = $city->getOne($dados["city_id"], true, false);
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
        
    }

    public function deleteByProposal($id){
        $this->_delete()->_where("proposal_id", "=", $id)->_execute();
    }

    public function delete($id){

    }

    public function exist($id){

    }
}