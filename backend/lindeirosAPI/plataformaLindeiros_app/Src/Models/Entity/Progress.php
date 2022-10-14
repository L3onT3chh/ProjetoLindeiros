<?php

namespace src\Models\Entity;

use core\Database;
use src\Config;
use PDO;
use DOMDocument;
use src\Models\Interfaces\EntityInterface;
use src\Models\Uuid;

class Progress extends Database
{
    public function get($id, $noParent = false, $jsonFormat = true)
    {
        $dom = new DOMDocument();

        $progress = $dom->createElement("progress");
        $progress = $dom->appendChild($progress);

        if (Uuid::is_valid($id)) {
            $sql = $this->conect->prepare("SELECT * FROM tb_progress WHERE id = :id");
            $sql->bindValue(":id", $id);
            $sql->execute();

            if ($sql->rowCount() > 0) {
                $progressData = $sql->fetch();

                $total = $dom->createElement("total", $progressData['total']);
                $total = $progress->appendChild($total);

                $progressId = $progressData['id'];

                $sql = $this->conect->prepare("SELECT tb_step_id FROM tb_progress_has_tb_step WHERE tb_progress_id = :id");
                $sql->bindValue(":id", $progressId);
                $sql->execute();

                if ($sql->rowCount() > 0) {
                    $allSteps = $sql->fetchAll();

                    foreach ($allSteps as $singleStep) {
                        $step = new Step();

                        $step = $step->get(false, $singleStep['tb_step_id'], false);
                        $step = $dom->importNode($step, true);
                        $step = $progress->appendChild($step);
                    }
                } else {
                    return "ProgressStep não encontrado";
                }

                $obj = json_encode(simplexml_load_string($dom->saveXML()));
                $obj = json_decode($obj, JSON_UNESCAPED_UNICODE);

                return ($jsonFormat) ? $obj : $progress;
            } else {
                return "Progress não encontrado";
            }
        } else {
            return "Somente ids no formato uuid-v4 são aceitos";
        }
    }
}
