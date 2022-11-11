<?php

namespace src\Models\Entity;

use core\Model;
use src\Models\Interfaces\EntityInterface;
use src\Models\Utils\DomBuilder;
use src\Models\Uuid;
use src\Models\Utils\Urlify;

class Demands extends Model implements EntityInterface
{
    public function add($data)
    {
        $return = array("error" => "", "isValid" => false);

        $data = array_filter($data);

        if (empty($data["name"])) {
            $return['error'] = "Por favor informe o nome da demanda";
            return $return;
        }

        if (empty($data["description"])) {
            $return['error'] = "Por favor informe a descrição da demanda";
            return $return;
        }

        if (empty($data["priority"])) {
            $return['error'] = "Por favor informe a prioridade da demanda";
            return $return;
        }

        if (empty($data["generalText"])) {
            $return['error'] = "Por favor informe o objetivo geral da demanda";
            return $return;
        }

        if (empty($data["specificText"])) {
            $return['error'] = "Por favor informe os objetivos especificos da demanda";
            return $return;
        }

        if (empty($data["axes_id"])) {
            $return['error'] = "Por favor informe o id do eixo relacionado a demanda";
            return $return;
        }

        if (empty($data["city_id"])) {
            $return['error'] = "Por favor informe o id da cidade relacionada a demanda";
            return $return;
        }

        $objective = new Objective();

        $obData["general"] = (isset($data["generalText"])) ? $data["generalText"] : [];
        $obData["textSpecific"] = (isset($data["specificText"])) ? $data["specificText"] : [];
        $obData = array_filter($obData);

        $data["id"] = Uuid::v4();
        $data["url"] = Urlify::parseToUrl($data["name"]);
        $data["name"] = ucfirst(mb_strtolower($data["name"]));
        $data["progress"] = 0;
        $data["cover"] = "logo.png";
        $data["status"] = 1;

        if (!$this->verifyUrl($data["url"])) {
            $data["objective_id"] = $objective->add($obData);

            unset($data["generalText"]);
            unset($data["specificText"]);
            $this->_insert($data)->_execute();

            $return["isValid"] = true;
        } else {
            $return['error'] = "Por favor informe um nome unico para o titulo";
        }


        return $return;
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

                $proposalPush = array();

                if (isset($itens["proposalList"]['ProposalList'])) {
                    if(isset($itens["proposalList"]['ProposalList']["proposal_id"])){
                        $proposalPush[] = $proposal->getOne($itens["proposalList"]['ProposalList']["proposal_id"], true, false);
                    }else{
                        foreach ($itens["proposalList"]['ProposalList'] as $prop) {
                            $proposalPush[] = $proposal->getOne($prop["proposal_id"], true, false);
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

    public function demandByMonth()
    {
        $return = array("error" => "", "isValid" => false);

        $builder = new DomBuilder("statistics");

        $dados = $this->_select(["MONTH(createdAt) as 'month'","COUNT(*) as 'qtd'"], [], false)->_groupBy("MONTH(createdAt)")->_execute();

        if (count($dados) > 0) {
            $finalData = array();

            foreach($dados as $item){
                $innerData = array();
                $innerBuilder = new DomBuilder("item");
        
                $innerData["month"] = $item["month"];    
                $innerData["qtd"] = $item["qtd"];    
                $innerBuilder->generate($innerData);

                $finalData[] = $innerBuilder->getStruct(true);
            }

            $builder->generate($finalData);
            $return["idValid"] = true;
            return $builder->buildObj();
        } else {
            $return['error'] = "Demanda não encontrada";
        }

        return $return;
    }

    public function demandByAxes()
    {
        $return = array("error" => "", "isValid" => false);

        $builder = new DomBuilder("statistics");

        $dados = $this->_select(["COUNT(tb_demands.id) as 'qtd'"], ["axes_id"=>"inner join|tb_axes.id|name as name"], false)->_groupBy("axes_id")->_execute();
        

        if (count($dados) > 0) {
            $finalData = array();

            foreach($dados as $item){
                $innerData = array();
                $innerBuilder = new DomBuilder("item");
        
                $innerData["name"] = $item["name"];    
                $innerData["qtd"] = $item["qtd"];    
                $innerBuilder->generate($innerData);

                $finalData[] = $innerBuilder->getStruct(true);
            }
            $builder->generate($finalData);
            $return["idValid"] = true;
            return $builder->buildObj();
        } else {
            $return['error'] = "Demanda não encontrada";
        }

        return $return;
    }

    public function demandByCity()
    {
        $return = array("error" => "", "isValid" => false);

        $builder = new DomBuilder("statistics");

        $dados = $this->_select(["COUNT(tb_demands.id) as 'qtd'"], ["city_id"=>"inner join|tb_city.id|name as name"], false)->_groupBy("city_id")->_execute();
        

        if (count($dados) > 0) {
            $finalData = array();

            foreach($dados as $item){
                $innerData = array();
                $innerBuilder = new DomBuilder("item");
        
                $innerData["name"] = $item["name"];    
                $innerData["qtd"] = $item["qtd"];    
                $innerBuilder->generate($innerData);

                $finalData[] = $innerBuilder->getStruct(true);
            }
            $builder->generate($finalData);
            $return["idValid"] = true;
            return $builder->buildObj();
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

                if (isset($dados["proposalList"]['ProposalList'])) {
                    if(isset($dados["proposalList"]['ProposalList']["proposal_id"])){
                        $proposalPush[] = $proposal->getOne($dados["proposalList"]['ProposalList']["proposal_id"], true, false);
                    }else{
                        foreach ($dados["proposalList"]['ProposalList'] as $prop) {
                            $proposalPush[] = $proposal->getOne($prop["proposal_id"], true, false);
                        }
                    }
                }


                $dados["proposalList"] = $proposalPush;

                if (!count($proposalPush) > 0) {
                    unset($dados["proposalList"]);
                }

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

        $builder = new DomBuilder("demand");

        if (Uuid::is_valid($id)) {
            $dados = $this->_select(["*"])->_where("id", "=", $id)->_execute(self::_ONE);

            if (count($dados) > 0) {
                $dados["progress"] = (isset($dados["progress"])) ? $dados["progress"] : 0;

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

    public function edit($data, $id)
    {
        $return = array("error" => "", "isValid" => false);

        if (Uuid::is_valid($id)) {
            $data = array_filter($data);

            if (count($data) > 0) {
                if ($this->exist($id)) {
                    if (isset($data["generalText"]) || isset($data["specificText"])) {
                        $demand = $this->getOnePure($id);
                        $objective = new Objective();

                        $obData["general"] = (isset($data["generalText"])) ? $data["generalText"] : [];
                        $obData["textSpecific"] = (isset($data["specificText"])) ? $data["specificText"] : [];
                        $obData = array_filter($obData);

                        $objective->edit($obData, $demand["Demand"]["objective_id"]);
                    }

                    if (isset($data["axes_id"])) {
                        $axes = new Axes();

                        if (!$axes->exist($data["axes_id"])) {
                            $return['error'] = "Não existe um eixo com esse id";
                            return $return;
                        }
                    }

                    if (isset($data["city_id"])) {
                        $city = new City();

                        if (!$city->exist($data["city_id"])) {
                            $return['error'] = "Não existe uma cidade com esse id";
                            return $return;
                        }
                    }

                    unset($data["generalText"]);
                    unset($data["specificText"]);

                    if (count($data) > 0) {
                        $this->_update($data)->_where("id", "=", $id)->_execute();
                    }

                    $return["isValid"] = true;
                } else {
                    $return['error'] = "Não existe uma demanda com esse id";
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

        $proposal = new ProposalList();
        $proposalList = $proposal->getByDemand($id);

        if (!isset($proposalList["ProposalList"])) {
            $demand = $this->getOnePure($id);
            $objective = new Objective();

            if (isset($demand["Demand"])) {
                $this->_delete()->_where("id", "=", $id)->_execute();
                $objective->delete($demand["Demand"]["objective_id"]);
                $return["isValid"] = true;
            }
        } else {
            $return["error"] = "Não é permitido apagar demandas que possuem propostas vinculadas";
        }

        return $return;
    }

    public function exist($id)
    {
        return ($this->_select(["*"])->_where("id", "=", $id)->_rowCount()) > 0 ? true : false;
    }

    private function verifyUrl($url)
    {
        return ($this->_select(["*"])->_where("url", "=", $url)->_rowCount()) > 0 ? true : false;
    }
}
