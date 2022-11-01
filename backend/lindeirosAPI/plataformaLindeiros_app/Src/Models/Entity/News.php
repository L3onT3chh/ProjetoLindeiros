<?php

namespace src\Models\Entity;

use core\Model;
use src\Models\Interfaces\EntityInterface;
use src\Models\utils\DomBuilder;
use src\Models\Utils\Urlify;
use src\Models\Uuid;

class News extends Model implements EntityInterface
{
    public function add($data)
    {
        $return = array("error" => "", "isValid" => false);

        if (empty($data["title"])) {
            $return['error'] = "Por favor informe o titulo da noticia";
            return $return;
        }

        if (empty($data["body"])) {
            $return['error'] = "Por favor informe o corpo da noticia";
            return $return;
        }

        if (empty($data["city_id"])) {
            $return['error'] = "Por favor informe a cidade relacionada";
            return $return;
        }

        $data["title_url"] = Urlify::parseToUrl($data["title"]);
        $dados = $this->_select(["*"])->_where("title_url", "=", $data["title_url"])->_execute(self::_ONE);

        if (count($dados) == 0) {
            $data["id"] = Uuid::v4();

            $this->_insert($data)->_execute();

            $return["isValid"] = true;
        } else {
            $return['error'] = "Uma notícia com esse titulo ja existe";
        }

        return $return;
    }

    public function getOne($id, $noParent = false, $jsonFormat = true)
    {
    }

    public function getAll($noParent = false, $jsonFormat = true)
    {
        $return = array("error" => "", "isValid" => false);

        $builder = new DomBuilder("news");

        $dados = $this->_select(["*"])->_execute();

        if (count($dados) > 0) {

            foreach ($dados as $item) {
                $builder->generate($item);
            }

            $return["isValid"] = true;
            $return["data"] = ($jsonFormat) ? $builder->buildObj() : $builder->getStruct($noParent);
        } else {
           $return["error"] = "Usuarios não encontrado";
        }

        return $return;
    }

    public function getOneByTitle($title)
    {
        $return = array("error" => "", "isValid" => false);

        $builder = new DomBuilder("news");

        $dados = $this->_select(["*"])->_where("title_url", "=", $title)->_execute(self::_ONE);

        if (count($dados) > 0) {

            $builder->generate($dados);
            $return["isValid"] = true;
            $return["data"] = $builder->buildObj();
        } else {
            $return["error"] = "Noticia não encontrada";
        }

        return $return;
    }

    public function edit($data, $id)
    {
    }

    public function delete($id)
    {
    }


    public function exist($id)
    {
        return ($this->_select(["*"])->_where("id", "=", $id)->_rowCount()) > 0 ? true : false;
    }
}
