<?php

namespace src\Models\Entity;

use core\Database;
use src\Config;
use PDO;
use DOMDocument;
use src\Models\Interfaces\EntityInterface;
use src\Models\Uuid;

class Step extends Database{
    public function get($all = false, $id = 0, $jsonFormat = true)
    {
        $dom = new DOMDocument();

        $step = $dom->createElement("step");
        $step = $dom->appendChild($step);
        
        if (Uuid::is_valid($id)) {
            $sql = $this->conect->prepare("SELECT * FROM tb_step WHERE id = :id");
            $sql->bindValue(":id", $id);
            $sql->execute();

            if ($sql->rowCount() > 0) {
                $result = $sql->fetch(PDO::FETCH_ASSOC);
                $authorId = $result['tb_author_id'];
                $timeFinishId = $result['tb_timeFinish_id'];

                $author = new Author();
                $authorName = $author->get(false, $authorId);

                $modify = $dom->createElement("modify", $result['ModifyTitle']);
                $modify = $step->appendChild($modify);

                $authorField = $dom->createElement("author", $authorName['author']['name']);
                $authorField = $step->appendChild($authorField);

                $timeFinish = new TimeFinish();
                $timeFinish = $timeFinish->get(false, $timeFinishId, false);                
                $timeFinish = $dom->importNode($timeFinish, true);
                $timeFinish = $step->appendChild($timeFinish);

                $date = $dom->createElement("date", $result['date']);
                $date = $step->appendChild($date);
                
                $obj = json_encode(simplexml_load_string($dom->saveXML()));
                $obj = json_decode($obj, JSON_UNESCAPED_UNICODE);

                return ($jsonFormat) ? $obj : $step;
            } else {
                return "Time não encontrado";
            }
        } else {
            return "Somente ids no formato uuid-v4 são aceitos";
        }
    }
}