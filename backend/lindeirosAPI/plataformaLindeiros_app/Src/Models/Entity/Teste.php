<?php

namespace src\Models\Entity;

use core\Model;
use src\Models\Interfaces\EntityInterface;
use src\Models\utils\DomBuilder;
use src\Models\Uuid;

class Teste extends Model
{

    public function get($all = true, $id = 0, $jsonFormat = true)
    {
        echo password_hash("123456789", PASSWORD_DEFAULT);
    }
}
