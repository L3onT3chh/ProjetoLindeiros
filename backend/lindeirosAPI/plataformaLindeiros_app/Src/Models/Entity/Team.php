<?php

namespace src\Models\Entity;

use core\Model;
use src\Models\Interfaces\EntityInterface;
use src\Models\Utils\DomBuilder;
use src\Models\Uuid;

class Team extends Model implements EntityInterface
{
    public function add($data)
    {
        $proposalId = $data["proposal_id"];

        foreach($data["team"] as $name){
            $id = Uuid::v4();
            $info = [
                "id"=>$id,
                "name"=>$name,
                "proposal_id"=>$proposalId
            ];
            $this->_insert($info)->_execute();
        }
    }
    public function getAll($jsonFormat = true)
    {
        $return = array("error" => "", "isValid" => false);

        $builder = new DomBuilder("demand");

        $dados = $this->_select(["*"])->_execute();
        $axes = new Axes();
        $city = new City();
        $objective = new Objective();
        $proposal = new Proposal();
        $proposalList = new ProposalList();

        if (count($dados) > 0) {

            foreach ($dados as $itens) {
                $itens["progress"] = (isset($itens["progress"])) ? $itens["progress"] : 0;
                $itens["objective_id"] = $objective->getOne($itens["objective_id"], true, false);
                $itens["axes_id"] = $axes->getOne($itens["axes_id"], true, false);
                $itens["city_id"] = $city->getOne($itens["city_id"], true, false);
                $itens["proposalList"] = $proposalList->getByDemand($itens["id"], true);
                $itens["proposalList"] = (gettype($itens["proposalList"]) == "array") ? $itens["proposalList"] : array();

                $proposalPush = array();
                
                if (gettype($itens["proposalList"]) == "array") {
                    foreach ($itens["proposalList"] as $prop) {
                        foreach ($prop as $item) {
                            $proposalPush[] = $proposal->getOne($item["proposal_id"], true, false);
                        }
                    }
                }

                $itens["proposalList"] = $proposalPush;
                $builder->generate($itens);
            }

            $return["idValid"] = true;
            return ($jsonFormat) ? $builder->buildObj() : $builder->getStruct();
        } else {
            $return['error'] = "Demanda não encontrada";
        }

        return $return;
    }

    public function getOne($id, $noParent = false, $jsonFormat = true)
    {
        $return = array("error" => "", "isValid" => false);

        $builder = new DomBuilder("demand");

        if (Uuid::is_valid($id)) {
            $dados = $this->_select(["*"])->_where("id", "=", $id)->_execute(self::_ONE);
            $axes = new Axes();
            $city = new City();
            $objective = new Objective();
            $proposal = new Proposal();
            $proposalList = new ProposalList();

            if (count($dados) > 0) {
                $dados["progress"] = (isset($dados["progress"])) ? $dados["progress"] : 0;
                $dados["objective_id"] = $objective->getOne($dados["objective_id"], true, false);
                $dados["axes_id"] = $axes->getOne($dados["axes_id"], true, false);
                $dados["city_id"] = $city->getOne($dados["city_id"], true, false);
                $dados["proposalList"] = $proposalList->getByDemand($dados["id"], true);

                $proposalPush = array();
                foreach ($dados["proposalList"] as $prop) {
                    foreach ($prop as $item) {
                        $proposalPush[] = $proposal->getOne($item["proposal_id"], true, false);
                    }
                }

                $dados["proposalList"] = $proposalPush;
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

    public function edit($data, $id)
    {
    }

    public function delete($id)
    {
    }

    public function deleteByProposalId($id){
        $this->_delete()->_where("proposal_id", "=", $id)->_execute();
    }

    public function exist($id)
    {
    }
}
