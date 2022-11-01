<?php

namespace src\Models\Entity;

use core\Model;
use src\Models\Interfaces\EntityInterface;
use src\Models\Uuid;
use src\Models\Utils\DomBuilder;


class City extends Model implements EntityInterface
{
    public function add($data)
    {
    }
    public function getAll($noParent = false, $jsonFormat = true)
    {
        $builder = new DomBuilder("cities");

        $dados = $this->_select(["*"])->_execute();

        if (count($dados) > 0) {
            foreach ($dados as $item) {
                $builder->generate($item);
            }

            return ($jsonFormat) ? $builder->buildObj() : $builder->getStruct($noParent);
        } else {
            return "Cidades não encontrada";
        }
    }

    public function getOne($id, $noParent = false, $jsonFormat = true)
    {
        $builder = new DomBuilder("cities");

        if (Uuid::is_valid($id)) {
            $dados = $this->_select(["*"])->_where("id", "=", $id)->_execute(self::_ONE);

            if (count($dados) > 0) {
                $builder->generate($dados);
                return ($jsonFormat) ? $builder->buildObj() : $builder->getStruct($noParent);
            } else {
                return "Cidade não encontrada";
            }
        } else {
            return "Somente ids no formato uuid-v4 são aceitos";
        }
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
