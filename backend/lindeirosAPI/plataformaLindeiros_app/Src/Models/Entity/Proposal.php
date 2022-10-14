<?php

namespace src\Models\Entity;

use core\Model;
use src\Models\Interfaces\EntityInterface;
use src\Models\Utils\DomBuilder;
use src\Models\Uuid;
use src\Models\Entity\Team;

class Proposal extends Model
{
    public function add($data)
    {
        $pattern = "/^([0-9]{4})\-([0-9]{2})\-([0-9]{2})$/i";
        $return = array("error" => "", "isValid" => false);

        if (empty($data["description"])) {
            $return['error'] = "Por favor informe a descrição da proposta";
            return $return;
        }

        if (empty($data["priority"])) {
            $return['error'] = "Por favor informe a prioridade da proposta";
            return $return;
        }

        if (empty($data["value"])) {
            $return['error'] = "Por favor informe o orçamento da proposta";
            return $return;
        }

        if (empty($data["deadline"])) {
            $return['error'] = "Por favor informe o prazo da proposta";
            return $return;
        }

        if (empty($data["deadline"]) || !preg_match($pattern, $data["deadline"])) {
            $return['error'] = "Data da proposta fora do padrão yyyy-mm-dd";
            return $return;
        }

        if (empty($data["demands_id"])) {
            $return['error'] = "Por favor informe o id da demanda";
            return $return;
        }

        if (empty($data["time"])) {
            $return['error'] = "Por favor informe o time dos envolvidos";
            return $return;
        }

        $team = new Team();
        $details = new Details();
        $proposalList = new ProposalList();

        $detailArray = [
            "value" => $data["value"],
            "deadline" => $data["deadline"],
            "numberInvolved" => count($data['time'])
        ];

        $detailId = $details->add($detailArray);
        $proposalId = Uuid::v4();

        $proposalArray = [
            "id" => $proposalId,
            "description" => $data["description"],
            "priority" => $data["priority"],
            "details_id" => $detailId
        ];

        $this->_insert($proposalArray)->_execute();

        $teamArray = [
            "proposal_id" => $proposalId,
            "team" => $data['time']
        ];

        $team->add($teamArray);

        $proposalListArray = [
            "id" => Uuid::v4(),
            "proposal_id" => $proposalId,
            "demands_id" => $data['demands_id']
        ];

        $proposalList->add($proposalListArray);
        $return['isValid'] = true;

        return $return;
    }
    public function getAllByProposalId($id, $noParent = false, $jsonFormat = true)
    {
        $builder = new DomBuilder("proposalList");

        $dados = $this->_select(["*"])->_where("id", "=", $id)->_execute();
        $details = new Details();

        if (count($dados) > 0) {
            foreach ($dados as $item) {
                $item["details_id"] = $details->getOne($item["details_id"], true, false);
                $builder->generate($item);
            }

            return ($jsonFormat) ? $builder->buildObj() : $builder->getStruct($noParent);
        } else {
            return "Usuarios não encontrado";
        }
    }

    public function getQtd()
    {
        $builder = new DomBuilder("proposal");

        $data = array();
        $dados = $this->_select(["*"])->_rowCount();

        $data["qtd"] = $dados;
        $builder->generate($data);

        return $builder->buildObj();
    }

    public function getAllByDemandId($id, $noParent = false, $jsonFormat = true)
    {
        $builder = new DomBuilder("proposalList");

        $details = new Details();

        $proposalList = new ProposalList();
        $proposalList = $proposalList->getByDemand($id, true);

        if (is_array($proposalList)) {
            $proposalList = $proposalList["ProposalList"];

            foreach ($proposalList as $prop) {
                $data = $this->_select(["*"])->_where("id", "=", $prop['proposal_id'])->_execute(self::_ONE);
                $data['details_id'] = $details->getOne($data['details_id'], true, false);
                $builder->generate($data);
            }
        }


        return ($jsonFormat) ? $builder->buildObj() : $builder->getStruct($noParent);
    }

    public function getOne($id, $noParent = false, $jsonFormat = true)
    {
        $return = array("error" => "", "isValid" => false);

        $builder = new DomBuilder("proposal");

        if (Uuid::is_valid($id)) {
            $dados = $this->_select(["*"])->_where("id", "=", $id)->_execute(self::_ONE);
            $details = new Details();

            if (count($dados) > 0) {
                $dados["details_id"] = $details->getOne($dados["details_id"], true, false);

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

    public function getOnePure($id)
    {
        $return = array("error" => "", "isValid" => false);

        $builder = new DomBuilder("proposal");

        if (Uuid::is_valid($id)) {
            $dados = $this->_select(["*"])->_where("id", "=", $id)->_execute(self::_ONE);

            if (count($dados) > 0) {
                $builder->generate($dados);

                $return["idValid"] = true;
                return $builder->buildObj();
            } else {
                $return['error'] = "Demanda não encontrada";
            }
        } else {
            $return['error'] = "Somente ids no formato uuid-v4 são aceitos";
        }

        return $return;
    }

    public function isMine($proposal, $user)
    {
        return ($this->_select(["*"])->_where("id", "=", $proposal)->_cond("AND")->_where("user_id", "=", $user)->_rowCount() > 0) ? true : false;
    }

    public function edit($data, $id)
    {
        $return = array("error" => "", "isValid" => false);
        $pattern = "/^([0-9]{4})\-([0-9]{2})\-([0-9]{2})$/i";
        $data = array_filter($data);

        if (isset($data["deadline"]) && (empty($data["deadline"]) || !preg_match($pattern, $data["deadline"]))) {
            $return['error'] = "Data da proposta fora do padrão yyyy-mm-dd";
            return $return;
        }

        if (count($data) > 0) {
            if (isset($data["value"]) || isset($data["deadline"])) {
                $proposal = $this->getOnePure($id);
                $details = new Details();

                $obData["value"] = (isset($data["value"])) ? $data["value"] : [];
                $obData["deadline"] = (isset($data["deadline"])) ? $data["deadline"] : [];
                $obData = array_filter($obData);

                $details->edit($obData, $proposal["Proposal"]["details_id"]);
            }

            unset($data["value"]);
            unset($data["deadline"]);

            if (count($data) > 0) {
                $this->_update($data)->_where("id", "=", $id)->_execute();
            }
            $return['isValid'] = true;
        } else {
            $return['error'] = "Informe pelo menos um valor para ser editado";
        }

        return $return;
    }

    public function delete($id)
    {
        $return = array("error" => "", "isValid" => false);

        if (Uuid::is_valid($id)) {
            $proposal = $this->getOnePure($id);
            $details = new Details();
            $team = new Team();
            $proposalList = new ProposalList();

            $proposalList->deleteByProposal($proposal["Proposal"]["id"]);
            $this->_delete()->_where("id", "=", $id)->_execute();
            $team->deleteByProposalId($proposal["Proposal"]["id"]);
            $details->delete($proposal["Proposal"]["details_id"]);
            $return["isValid"] = true;
        } else {
            $return['error'] = "Somente ids no formato uuid-v4 são aceitos";
        }

        return $return;
    }

    public function exist($id)
    {
    }
}
