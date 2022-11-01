<?php

namespace core;

class Description
{

    public static function userCreate()
    {
        return [
            "title" => "Cadastrar usuarios",
            "method" => "post",
            "headers" => [
                [
                    "title" => "token",
                    "description" => "Token jwt que será utilizado para validar as requisições referentes ao administrador"
                ]
            ],
            "body" => [
                [
                    "title" => "name",
                    "required" => true,
                    "type" => "string",
                    "description" => "Nome do usuario que será cadastrado"
                ],
                [
                    "title" => "phone",
                    "required" => true,
                    "type" => "int",
                    "description" => "Telefone do usuario que será cadastrado"
                ],
                [
                    "title" => "phone_ddd",
                    "required" => true,
                    "type" => "int",
                    "description" => "DDD do usuario que será cadastrado"
                ],
                [
                    "title" => "born_date",
                    "required" => true,
                    "type" => "date",
                    "description" => "DDD do usuario que será cadastrado"
                ],
                [
                    "title" => "cpf",
                    "required" => true,
                    "type" => "int",
                    "description" => "CPF do usuario que será cadastrado"
                ],
                [
                    "title" => "address",
                    "required" => true,
                    "type" => "string",
                    "description" => "Endereço e Nº do usuario que será cadastrado"
                ],
                [
                    "title" => "email",
                    "required" => true,
                    "type" => "string",
                    "description" => "E-mail de acesso do usuario que será cadastrado"
                ],
                [
                    "title" => "city",
                    "required" => true,
                    "type" => "string",
                    "description" => "ID da cidade referente ao usuario que será cadastrado"
                ],
                [
                    "title" => "user_type",
                    "required" => true,
                    "type" => "string",
                    "description" => "ID da permissão do usuario que será cadastrado"
                ],
            ]
        ];
    }

    public static function userLogin()
    {
        return [
            "title" => "Autenticação do usuario",
            "method" => "post",
            "body" => [
                [
                    "title" => "email",
                    "required" => true,
                    "type" => "string",
                    "description" => "E-mail de login do usuario"
                ],
                [
                    "title" => "password",
                    "required" => true,
                    "type" => "string",
                    "description" => "Senha de login do usuario"
                ]
            ]
        ];
    }

    public static function userList()
    {
        return [
            "title" => "Listagem de usuarios",
            "method" => "get",
            "headers" => [
                [
                    "title" => "token",
                    "description" => "Token jwt que será utilizado para validar as requisições referentes ao administrador"
                ]
            ]
        ];
    }

    public static function userSingle()
    {
        return [
            "title" => "Pegar um usuario",
            "method" => "get",
            "headers" => [
                [
                    "title" => "token",
                    "description" => "Token jwt que será utilizado para validar as requisições referentes ao administrador"
                ]
            ]
        ];
    }

    public static function userEdit()
    {
        return [
            "title" => "Editar um usuario",
            "method" => "put",
            "headers" => [
                [
                    "title" => "token",
                    "description" => "Token jwt que será utilizado para validar as requisições referentes ao administrador"
                ]
            ],
            "body" => [
                [
                    "title" => "name",
                    "required" => false,
                    "type" => "string",
                    "description" => "Nome do usuario que será cadastrado"
                ],
                [
                    "title" => "phone",
                    "required" => false,
                    "type" => "int",
                    "description" => "Telefone do usuario que será cadastrado"
                ],
                [
                    "title" => "phone_ddd",
                    "required" => false,
                    "type" => "int",
                    "description" => "DDD do usuario que será cadastrado"
                ],
                [
                    "title" => "born_date",
                    "required" => false,
                    "type" => "date",
                    "description" => "DDD do usuario que será cadastrado"
                ],
                [
                    "title" => "cpf",
                    "required" => false,
                    "type" => "int",
                    "description" => "CPF do usuario que será cadastrado"
                ],
                [
                    "title" => "address",
                    "required" => false,
                    "type" => "string",
                    "description" => "Endereço e Nº do usuario que será cadastrado"
                ],
                [
                    "title" => "email",
                    "required" => false,
                    "type" => "string",
                    "description" => "E-mail de acesso do usuario que será cadastrado"
                ],
                [
                    "title" => "city",
                    "required" => false,
                    "type" => "string",
                    "description" => "ID da cidade referente ao usuario que será cadastrado"
                ],
                [
                    "title" => "user_type",
                    "required" => false,
                    "type" => "string",
                    "description" => "ID da permissão do usuario que será cadastrado"
                ],
            ]
        ];
    }

    public static function userDelete()
    {
        return [
            "title" => "Deletar um usuario",
            "method" => "delete",
            "headers" => [
                [
                    "title" => "token",
                    "description" => "Token jwt que será utilizado para validar as requisições referentes ao administrador"
                ]
            ],
            "body" => [
                [
                    "title" => "id",
                    "required" => true,
                    "type" => "string",
                    "description" => "ID do usuario que será deletado"
                ]
            ]

        ];
    }

    public static function docCreate()
    {
        return [
            "title" => "Criar um documento",
            "method" => "post",
            "headers" => [
                [
                    "title" => "token",
                    "description" => "Token jwt que será utilizado para validar as requisições referentes ao administrador"
                ]
            ],
            "body" => [
                [
                    "title" => "extension",
                    "required" => true,
                    "type" => "string",
                    "description" => "Extensão do documento (pdf, doc)"
                ],
                [
                    "title" => "path",
                    "required" => true,
                    "type" => "string",
                    "description" => "Caminho onde será feito o upload"
                ],
                [
                    "title" => "demands_id",
                    "required" => true,
                    "type" => "string",
                    "description" => "ID da demanda relacionada"
                ]
            ]

        ];
    }

    public static function docList()
    {
        return [
            "title" => "Pegar um documento",
            "method" => "get",
        ];
    }

    public static function userTypeList()
    {
        return [
            "title" => "Lista de permissões de usuario",
            "method" => "get",
            "headers" => [
                [
                    "title" => "token",
                    "description" => "Token jwt que será utilizado para validar as requisições referentes ao administrador"
                ]
            ]
        ];
    }

    public static function demandaSingle()
    {
        return [
            "title" => "Pegar uma demanda",
            "method" => "get"
        ];
    }
    
    public static function demandaAll()
    {
        return [
            "title" => "Pegar todas as demandas",
            "method" => "get"
        ];
    } 

    public static function demandaEdit()
    {
        return [
            "title" => "Editar uma demanda",
            "method" => "put",
            "headers" => [
                [
                    "title" => "token",
                    "description" => "Token jwt que será utilizado para validar as requisições referentes ao administrador"
                ]
            ],
            "body" => [
                [
                    "title" => "name",
                    "required" => false,
                    "type" => "string",
                    "description" => "Nome da demanda que será editado"
                ],
                [
                    "title" => "description",
                    "required" => false,
                    "type" => "string",
                    "description" => "Descrição da demanda que será editado"
                ],
                [
                    "title" => "priority",
                    "required" => false,
                    "type" => "string",
                    "description" => "Prioridade da demanda que será editado"
                ],
                [
                    "title" => "generalText",
                    "required" => false,
                    "type" => "string",
                    "description" => "Texto geral da demanda que será editado"
                ],
                [
                    "title" => "specificText",
                    "required" => false,
                    "type" => "json",
                    "description" => "Conjunto de textos especificos da demanda que será editado. Esse campo precisa seguir o padrão: texto1@texto2@texto3..."
                ],
                [
                    "title" => "axes_id",
                    "required" => false,
                    "type" => "string (uuid)",
                    "description" => "ID do eixo da demanda que será editado"
                ],
                [
                    "title" => "city_id",
                    "required" => false,
                    "type" => "string (uuid)",
                    "description" => "ID da cidade da demanda que será editado"
                ]
            ]
        ];
    }

    public static function demandaCreate()
    {
        return [
            "title" => "Criar uma demanda",
            "method" => "post",
            "headers" => [
                [
                    "title" => "token",
                    "description" => "Token jwt que será utilizado para validar as requisições referentes ao administrador"
                ]
            ],
            "body" => [
                [
                    "title" => "name",
                    "required" => true,
                    "type" => "string",
                    "description" => "Nome da demanda que será adicionado"
                ],
                [
                    "title" => "description",
                    "required" => true,
                    "type" => "string",
                    "description" => "Descrição da demanda que será adicionado"
                ],
                [
                    "title" => "priority",
                    "required" => true,
                    "type" => "string",
                    "description" => "Prioridade da demanda que será adicionado"
                ],
                [
                    "title" => "generalText",
                    "required" => true,
                    "type" => "string",
                    "description" => "Texto geral da demanda que será adicionado"
                ],
                [
                    "title" => "specificText",
                    "required" => true,
                    "type" => "json",
                    "description" => "Conjunto de textos especificos da demanda que será adicionado. Esse campo precisa seguir o padrão: texto1@texto2@texto3..."
                ],
                [
                    "title" => "axes_id",
                    "required" => true,
                    "type" => "string (uuid)",
                    "description" => "ID do eixo da demanda que será adicionado"
                ],
                [
                    "title" => "city_id",
                    "required" => true,
                    "type" => "string (uuid)",
                    "description" => "ID da cidade da demanda que será adicionado"
                ]
            ]
        ];
    }

    public static function demandaDelete(){
        return [
            "title" => "Deletar uma demanda",
            "method" => "delete",
            "headers" => [
                [
                    "title" => "token",
                    "description" => "Token jwt que será utilizado para validar as requisições referentes ao administrador"
                ]
            ],
            "body" => [
                [
                    "title" => "id",
                    "required" => true,
                    "type" => "string (uuid)",
                    "description" => "ID da demanda que será deletada"
                ]
            ]

        ];
    }

    public static function proposalCreate()
    {
        return [
            "title" => "Cadastrar proposta",
            "method" => "post",
            "headers" => [
                [
                    "title" => "token",
                    "description" => "Token jwt que será utilizado para validar as requisições referentes ao administrador"
                ]
            ],
            "body" => [
                [
                    "title" => "time",
                    "required" => true,
                    "type" => "array",
                    "description" => "Nome dos envolvidos com a proposta"
                ],
                [
                    "title" => "description",
                    "required" => true,
                    "type" => "string",
                    "description" => "Descrição basica da proposta"
                ],
                [
                    "title" => "value",
                    "required" => true,
                    "type" => "string",
                    "description" => "Orçamento referente a proposta"
                ],
                [
                    "title" => "deadline",
                    "required" => true,
                    "type" => "date",
                    "description" => "Prazo limite da proposta"
                ],
                [
                    "title" => "priority",
                    "required" => true,
                    "type" => "string",
                    "description" => "Prioridade a ser cumprida"
                ],
                [
                    "title" => "demands_id",
                    "required" => true,
                    "type" => "string",
                    "description" => "ID da demanda relacionada a proposta"
                ]
            ]
        ];
    }
    
    public static function proposalList()
    {
        return [
            "title" => "Pegar uma proposta",
            "method" => "get"
        ];
    }

    public static function proposalEdit(){
        return [
            "title" => "Editar proposta",
            "method" => "put",
            "headers" => [
                [
                    "title" => "token",
                    "description" => "Token jwt que será utilizado para validar as requisições referentes ao administrador"
                ]
            ],
            "body" => [
                [
                    "title" => "description",
                    "required" => false,
                    "type" => "string",
                    "description" => "Descrição basica da proposta"
                ],
                [
                    "title" => "value",
                    "required" => false,
                    "type" => "string",
                    "description" => "Orçamento referente a proposta"
                ],
                [
                    "title" => "deadline",
                    "required" => false,
                    "type" => "date",
                    "description" => "Prazo limite da proposta"
                ],
                [
                    "title" => "priority",
                    "required" => false,
                    "type" => "string",
                    "description" => "Prioridade a ser cumprida"
                ]
            ]
        ];
    }

    public static function proposalDelete(){
        return [
            "title" => "Deletar uma proposta",
            "method" => "delete",
            "headers" => [
                [
                    "title" => "token",
                    "description" => "Token jwt que será utilizado para validar as requisições referentes ao administrador"
                ]
            ],
            "body" => [
                [
                    "title" => "id",
                    "required" => true,
                    "type" => "string (uuid)",
                    "description" => "ID da proposta que será deletada"
                ]
            ]

        ];
    }

    public static function newsCreate()
    {
        return [
            "title" => "Cadastrar notícia",
            "method" => "post",
            "headers" => [
                [
                    "title" => "token",
                    "description" => "Token jwt que será utilizado para validar as requisições referentes ao administrador"
                ]
            ],
            "body" => [
                [
                    "title" => "title",
                    "required" => true,
                    "type" => "array",
                    "description" => "Titulo da notícia"
                ],
                [
                    "title" => "body",
                    "required" => true,
                    "type" => "text",
                    "description" => "Texto que estará presente no corpo da notícia"
                ],
                [
                    "title" => "city_id",
                    "required" => true,
                    "type" => "string",
                    "description" => "ID da cidade relacionado a notícia"
                ],
                [
                    "title" => "axes_id",
                    "required" => true,
                    "type" => "string",
                    "description" => "ID do eixo relacionado a notícia"
                ]
            ]
        ];
    }

    public static function newsSingle()
    {
        return [
            "title" => "Pegar uma noticia pelo titulo",
            "method" => "get"
        ];
    }

    public static function newsList()
    {
        return [
            "title" => "Pegar lista de noticias",
            "method" => "get"
        ];
    }

    public static function cityList()
    {
        return [
            "title" => "Pega lista dos municipios lindeiros",
            "method" => "get"
        ];
    }

    public static function AxesList()
    {
        return [
            "title" => "Pega lista dos eixos",
            "method" => "get"
        ];
    }

    public static function StatisticsDemandByMonth()
    {
        return [
            "title" => "Pega quantidade de demandas por mês",
            "method" => "get"
        ];
    }

    public static function StatisticsDemandByAxes()
    {
        return [
            "title" => "Pega quantidade de demandas por eixo",
            "method" => "get"
        ];
    }

    public static function StatisticsDemandByCity()
    {
        return [
            "title" => "Pega quantidade de demandas por cidade",
            "method" => "get"
        ];
    }

    public static function StatisticsProposalQtd()
    {
        return [
            "title" => "Pega quantidade de proposta cadastrada no sistema",
            "method" => "get"
        ];
    }
    
}
