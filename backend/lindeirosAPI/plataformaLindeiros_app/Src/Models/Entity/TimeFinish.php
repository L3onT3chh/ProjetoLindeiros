<?php

namespace src\Models\Entity;

use core\Database;
use src\Config;
use PDO;
use DOMDocument;
use src\Models\Interfaces\EntityInterface;
use src\Models\Uuid;

class TimeFinish extends Database implements EntityInterface
{
    public function add($data)
    {
        $return = array("error" => "", "isValid" => false);

        if (empty($data["period"])) {
            $return['error'] = "Por favor informe o nome do autor";
            return $return;
        }

        if (empty($data["phone"])) {
            $return['error'] = "Por favor informe o telefone do autor";
            return $return;
        }

        if (empty($data["time"])) {
            $return['error'] = "Por favor informe o time do autor";
            return $return;
        }

        if (empty($data["password"])) {
            $return['error'] = "Por favor informe a senha do autor";
            return $return;
        }

        $sql = $this->conect->prepare("SELECT * FROM tb_timeFinish WHERE time = :nick");
        $sql->bindValue(":nick", $data["time"]);
        $sql->execute();

        if ($sql->rowCount() == 0) {
            $id = Uuid::v4();

            $sql = $this->conect->prepare("INSERT INTO tb_timeFinish VALUES(:id, :period, :phone, :nick, :password)");
            $sql->bindValue(":id", $id);
            $sql->bindValue(":period", $data["period"]);
            $sql->bindValue(":phone", $data["phone"]);
            $sql->bindValue(":nick", $data["time"]);
            $sql->bindValue(":password", $data["password"]);
            $sql->execute();

            $return["isValid"] = true;
        } else {
            $return['error'] = "Esse time ja existe";
        }

        return $return;
    }

    public function get($all = false, $id = 0, $jsonFormat = true)
    {
        $dom = new DOMDocument();

        $timeFinish = $dom->createElement("timeFinish");
        $timeFinish = $dom->appendChild($timeFinish);
        
        if (Uuid::is_valid($id)) {
            $sql = $this->conect->prepare("SELECT * FROM tb_timeFinish WHERE id = :id");
            $sql->bindValue(":id", $id);
            $sql->execute();

            if ($sql->rowCount() > 0) {
                $result = $sql->fetch(PDO::FETCH_ASSOC);

                $period = $dom->createElement("period", $result['period']);
                $period = $timeFinish->appendChild($period);

                $time = $dom->createElement("time", $result['time']);
                $time = $timeFinish->appendChild($time);

                $obj = json_encode(simplexml_load_string($dom->saveXML()));
                $obj = json_decode($obj, JSON_UNESCAPED_UNICODE);

                return ($jsonFormat) ? $obj : $timeFinish;
            } else {
                return "Time não encontrado";
            }
        } else {
            return "Somente ids no formato uuid-v4 são aceitos";
        }
    }

    public function edit($data, $id)
    {
        $return = array("error" => "", "isValid" => false);

        if (Uuid::is_valid($id)) {
            $buildQuery = array();

            if (!empty($data["period"])) {
                $buildQuery["period"] = "period = :period";
            }

            if (!empty($data["phone"])) {
                $buildQuery["phone"] = "phone = :phone";
            }

            if (!empty($data["time"])) {
                $buildQuery["time"] = "time = :time";
            }

            if (count($buildQuery) > 0) {
                if ($this->exist($id)) {
                    $sql = $this->conect->prepare("UPDATE tb_timeFinish SET " . implode(",", $buildQuery) . " WHERE id = :id");

                    $sql->bindValue(":id", $id);
                    foreach ($buildQuery as $key => $query) {
                        $sql->bindValue(":$key", $data[$key]);
                    }

                    $sql->execute();
                    $return["isValid"] = true;
                } else {
                    $return['error'] = "Não existe um usuario com esse id";
                }
            } else {
                $return['error'] = "Informe pelo menos um desses parametros (period, phone, time)";
            }
        } else {
            $return['error'] = "Somente ids no formato uuid-v4 são aceitos";
        }

        return $return;
    }

    public function delete($id)
    {
        $return = array("error" => "", "isValid" => false);

        if (Uuid::is_valid($id)) {
            $sql = $this->conect->prepare("DELETE FROM tb_timeFinish WHERE id = :id");
            $sql->bindValue(":id", $id);
            $sql->execute();
            $return["isValid"] = true;
        } else {
            $return['error'] = "Somente ids no formato uuid-v4 são aceitos";
        }

        return $return;
    }

    public function exist($id)
    {
        $sql = $this->conect->prepare("SELECT * FROM tb_timeFinish WHERE id = :id");
        $sql->bindValue(":id", $id);
        $sql->execute();

        if ($sql->rowCount() > 0) {
            return true;
        }

        return false;
    }
}
