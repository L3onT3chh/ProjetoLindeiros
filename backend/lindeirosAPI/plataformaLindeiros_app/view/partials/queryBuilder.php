<p>Pagina destinada a intrução de como foi modelado o queryBuilder utilizado para as consultas com bancos de dados.
    Importante ressaltar que o querybuilder utiliza como nome da tabela o que foi definido como nome da classe. Então as tabelas do banco de dados devem seguir o padrão: tb_nomedaentidade
</p>
<br><br>
<section class="item">
    <h2>_select <span class="func">Função</span></h2>
    <h3>Função para selecionar dados do banco</h3>
    <fieldset>
        <legend>Parâmetros</legend>
        <ul>
            <li>
                <h4>fieldsOrigin <span>string Array</span></h4>
                <h5 class="required">Required</h5>
                <p>Campos que deseja selecionar no banco. Passar [*] para selecionar todos os campos</p>
            </li>
            <li>
                <h4>fieldsJoin <span>string Array</span></h4>
                <h5 class="optional">Opicional</h5>
                <p>Parâmetros para utilizar joins com outras tabelas. Sintaxe: ["campoIdAtualEstrangeiro"=>"Tipo de join|tabelaEstrangeira.id|campoEstrangeiroDesejado as alias"]</p>
            </li>
        </ul>
    </fieldset>
    <fieldset>
        <legend>Retorno</legend>
        <ul>
            <li>
                <h4>Objeto</h4>
                <p>A função _select retorna uma instancia da proria classe.</p>
            </li>
        </ul>
    </fieldset>
</section>
<section class="item">
    <h2>_insert <span class="func">Função</span></h2>
    <h3>Função para inserir dados do banco</h3>
    <fieldset>
        <legend>Parâmetros</legend>
        <ul>
            <li>
                <h4>fields <span>string Array</span></h4>
                <h5 class="required">Required</h5>
                <p>Campos que deseja inserir no banco. Sintaxe: ["nomeCampo"=>"valor"]</p>
            </li>
        </ul>
    </fieldset>
    <fieldset>
        <legend>Retorno</legend>
        <ul>
            <li>
                <h4>Objeto</h4>
                <p>A função _insert retorna uma instancia da proria classe.</p>
            </li>
        </ul>
    </fieldset>
</section>
<section class="item">
    <h2>_update <span class="func">Função</span></h2>
    <h3>Função para inserir dados do banco</h3>
    <fieldset>
        <legend>Parâmetros</legend>
        <ul>
            <li>
                <h4>fields <span>string Array</span></h4>
                <h5 class="required">Required</h5>
                <p>Campos que deseja atualizar no banco. Sintaxe: ["nomeCampo"=>"valor"]</p>
            </li>
        </ul>
    </fieldset>
    <fieldset>
        <legend>Retorno</legend>
        <ul>
            <li>
                <h4>Objeto</h4>
                <p>A função _update retorna uma instancia da proria classe.</p>
            </li>
        </ul>
    </fieldset>
</section>
<section class="item">
    <h2>_delete <span class="func">Função</span></h2>
    <h3>Função para deletar dados do banco</h3>
    <fieldset>
        <legend>Retorno</legend>
        <ul>
            <li>
                <h4>Objeto</h4>
                <p>A função _delete retorna uma instancia da proria classe.</p>
            </li>
        </ul>
    </fieldset>
</section>
<section class="item">
    <h2>_where <span class="func">Função</span></h2>
    <h3>Função para impor condições as funções DML</h3>
    <fieldset>
        <legend>Parâmetros</legend>
        <ul>
            <li>
                <h4>1º field <span>string</span></h4>
                <h5 class="required">Required</h5>
                <p>Campos que será realizado a condição.</p>
            </li>
            <li>
                <h4>2º cond <span>string</span></h4>
                <h5 class="required">Required</h5>
                <p>Sinal condicional (=, !=, >, >=, <, <=).</p>
            </li>
            <li>
                <h4>3º value <span>string</span></h4>
                <h5 class="required">Required</h5>
                <p>Valor da condição.</p>
            </li>
        </ul>
    </fieldset>
    <fieldset>
        <legend>Retorno</legend>
        <ul>
            <li>
                <h4>Objeto</h4>
                <p>A função _update retorna uma instancia da proria classe.</p>
            </li>
        </ul>
    </fieldset>
</section>
<section class="item">
    <h2>_between <span class="func">Função</span></h2>
    <h3>Função para selecionar dados</h3>
    <fieldset>
        <legend>Parâmetros</legend>
        <ul>
            <li>
                <h4>1º field <span>string</span></h4>
                <h5 class="required">Required</h5>
                <p>Campos que será realizado a condição.</p>
            </li>
            <li>
                <h4>2º cond <span>string</span></h4>
                <h5 class="required">Required</h5>
                <p>Sinal condicional (=, !=, >, >=, <, <=).</p>
            </li>
            <li>
                <h4>3º value <span>string</span></h4>
                <h5 class="required">Required</h5>
                <p>Valor da condição.</p>
            </li>
        </ul>
    </fieldset>
    <fieldset>
        <legend>Retorno</legend>
        <ul>
            <li>
                <h4>Objeto</h4>
                <p>A função _update retorna uma instancia da proria classe.</p>
            </li>
        </ul>
    </fieldset>
</section>
<section class="item">
    <h2>_limit <span class="func">Função</span></h2>
    <h3>Função para limitar a quantidade de consultas realizadas</h3>
    <fieldset>
        <legend>Parâmetros</legend>
        <ul>
            <li>
                <h4>1º qtd <span>int</span></h4>
                <h5 class="required">Required</h5>
                <p>Quantidade de valores desejados.</p>
            </li>
            <li>
                <h4>2º offset <span>int</span></h4>
                <h5 class="required">Required</h5>
                <p>Nº que define a partir de qual valor será realizado a consulta.</p>
            </li>
        </ul>
    </fieldset>
    <fieldset>
        <legend>Retorno</legend>
        <ul>
            <li>
                <h4>Objeto</h4>
                <p>A função _limit retorna uma instancia da proria classe.</p>
            </li>
        </ul>
    </fieldset>
</section>
<section class="item">
    <h2>_orderby <span class="func">Função</span></h2>
    <h3>Função para ordenar as consultas</h3>
    <fieldset>
        <legend>Parâmetros</legend>
        <ul>
            <li>
                <h4>1º qtd <span>string</span></h4>
                <h5 class="required">Required</h5>
                <p>Campo que será utilizado como referência.</p>
            </li>
            <li>
                <h4>2º type <span>string</span></h4>
                <h5 class="required">Required</h5>
                <p>Definição do tipo de ordenação. ASC ou DESC</p>
            </li>
        </ul>
    </fieldset>
    <fieldset>
        <legend>Retorno</legend>
        <ul>
            <li>
                <h4>Objeto</h4>
                <p>A função _limit retorna uma instancia da proria classe.</p>
            </li>
        </ul>
    </fieldset>
</section>
<section class="item">
    <h2>_execute <span class="func">Função</span></h2>
    <h3>Função que executara os comandos SQL</h3>
    <fieldset>
        <legend>Parâmetros</legend>
        <ul>
            <li>
                <h4>1º mode <span>int</span></h4>
                <h5 class="optional">Opicional</h5>
                <p>Para comandos do tipo _select esse parâmetro define se o resultado sera um ou multiplos valores. utilizar a costante _ONE para retornar um valor e _ALL para multiplos valores</p>
            </li>
        </ul>
    </fieldset>
    <fieldset>
        <legend>Retorno</legend>
        <ul>
            <li>
                <h4>Array</h4>
                <p>Para comandos do tipo _select a função _execute retorna um array com os valores desejados.</p>
            </li>
        </ul>
    </fieldset>
</section>
<section class="item">
    <h2>_cond <span class="func">Função</span></h2>
    <h3>Função que seta valores AND, OR quando ha multiplas condições no where</h3>
    <fieldset>
        <legend>Parâmetros</legend>
        <ul>
            <li>
                <h4>1º value <span>string</span></h4>
                <h5 class="required">Required</h5>
                <p>Esse parametro recebe valores da condição, podendo ser: AND, OR</p>
            </li>
        </ul>
    </fieldset>
    <fieldset>
        <legend>Retorno</legend>
        <ul>
            <li>
                <h4>Objeto</h4>
                <p>A função _cond retorna uma instancia da proria classe.</p>
            </li>
        </ul>
    </fieldset>
</section>