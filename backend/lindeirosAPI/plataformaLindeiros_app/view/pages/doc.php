<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documentação - Api dos lindeiros</title>
</head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" rel="stylesheet">
<style>
    .btnCloseMenu,.routesList h1,.routesList h1 i{color:#1b4977}#btnRespMenu i,.btnCloseMenu,.routesList .item h2{font-size:1.1rem}*{margin:0;padding:0;box-sizing:border-box;font-family:Lato,sans-serif;color:#333}a{text-decoration:none}ul{list-style:none}body{display:flex}.navmenu{padding:30px;background-color:#f5f5f5;width:20vw;min-width:200px;height:100vh}.navmenu .title{text-transform:capitalize;color:#1b4977;letter-spacing:-1px;margin-bottom:30px}.navmenu .between,.routesList .item fieldset legend{margin-bottom:5px}.navmenu .between{font-size:1rem;font-weight:bolder}.navmenu .menuList{margin-bottom:15px;padding-left:10px}.navmenu .menuList a{display:block;margin-bottom:8px}.navmenu .menuList li{width:fit-content;cursor:pointer;padding-bottom:1.5px;border-bottom:1.5px solid #f5f5f5}.navmenu .menuList li.active,.navmenu .menuList li:hover{border-bottom:1.5px solid #333}.navmenu .menuList li:last-of-type,.navmenu .menuList:last-of-type{margin-bottom:0}.docBody{width:80vw;height:100vh;overflow-y:auto;padding:50px}.docBody header{display:flex;align-items:center;width:100%;padding:0 0 10px 10px;border-bottom:1px solid rgba(0,0,0,.1)}.docBody header i{width:40px}.docBody header input{width:calc(100% - 40px);border:none;outline:0}.docBody header input::placeholder{font-size:1.1rem}.routesList{margin-top:50px}.routesList h1{font-size:1.4rem;margin-bottom:15px}.routesList h1 i{margin-right:10px;font-size:1.2rem}.routesList p.mainDesc{max-width:80%;line-height:30px;margin-bottom:20px}.routesList .item{margin-bottom:80px}.routesList .item h2 span{text-transform:capitalize;margin-left:5px;border-radius:5px;padding:5px 10px;background-color:#f5f5f5;font-size:.9rem;color:#fff}.routesList .item h2 span.post{background-color:#fcaf17}.routesList .item h2 span.put{background-color:#178dc3}.routesList .item h2 span.get{background-color:#28e068}.routesList .item h2 span.delete{background-color:#ef6053}.item h2 span.func{background-color:#ba4cba}.routesList .item h3{font-weight:400;margin:10px 0 20px;background-color:#f5f5f5;padding:8px 12px}.routesList .item fieldset{margin-bottom:20px;border:none}.routesList .item fieldset:first-of-type p{margin-top:10px}.routesList .item fieldset ul{width:50%;background-color:#f5f5f5}.routesList .item fieldset ul li{padding:15px;border-bottom:1px solid rgba(0,0,0,.1)}.routesList .item fieldset ul li:last-of-type{border-bottom:none}.routesList .item fieldset ul li h4 span{font-size:.7rem;background-color:#c6c6c6;width:fit-content;padding:3px 8px;border-radius:5px}.routesList .item fieldset ul li h5{font-size:.8rem;font-weight:400;margin-bottom:10px}.routesList .item fieldset ul li h5.required{color:#dd1e2e}.routesList .item fieldset ul li h5.optional{color:#349cc9}#btnRespMenu{width:50px;height:50px;position:fixed;bottom:20px;right:40px;border-radius:50%;box-shadow:1px 1px 4px 1px rgba(0,0,0,.1);display:none;align-items:center;border:none;background-color:#1b4977;justify-content:center;cursor:pointer}#btnRespMenu i{color:#fff}.btnCloseMenu{display:none;position:absolute;right:20px;top:20px}@media screen and (max-width:900px){.btnCloseMenu{display:block}#btnRespMenu{display:flex}.navmenu{position:fixed;width:100%;height:100%;display:none;z-index:10}.docBody{width:100vw}}@media screen and (max-width:800px){.routesList .item fieldset ul{width:70%}}@media screen and (max-width:600px){.docBody{padding:30px}.routesList .item fieldset ul,.routesList p.mainDesc{max-width:100%;width:100%}}
    @media screen and (min-width:600px){.navmenu{display: block!important;}}
</style>

<body>

    <aside class="navmenu">
        <h1 class="title">API do programa de governança</h1>

        <h2 class="between">Entidades</h2>
        <ul class="menuList">
            <i class="btnCloseMenu fas fa-times"></i>
            <?php foreach ($controllersList as $controller) : ?>
                <a href="<?= $url ?>doc/<?= $controller ?>">
                    <li class="<?= ($controllerChoosen == $controller) ? "active" : "" ?>"><?= $controller ?></li>
                </a>
            <?php endforeach; ?>
        </ul>

        <h2 class="between">MySql</h2>
        <ul class="menuList">
            <a href="<?= $url ?>doc/queryBuilder">
                <li class="<?= ($controllerChoosen == "queryBuilder") ? "active" : "" ?>">Query Builder</li>
            </a>
        </ul>
    </aside>
    <main class="docBody">
        <header class="search">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Pesquisa" id="searchField">
        </header>
        <div class="routesList">
            <h1><i class="fas fa-angle-double-right"></i> <?= $controllerChoosen ?></h1>
            <p class="mainDesc"><?= $controllersContent["title"] ?></p>
            <?php if (count($controllersContent) > 0) : ?>
                <?php foreach ($controllersContent as $route) : ?>
                    <?php if (!empty($route["desc"])) : ?>
                        <section class="item">
                            <h2><?= $route["desc"]["title"] ?> <span class="<?= $route["desc"]["method"] ?>"><?= $route["desc"]["method"] ?></span></h2>
                            <h3><?= $route["path"] ?></h3>
                            <?php if (isset($route["desc"]["headers"]) && !empty($route["desc"]["headers"])) : ?>
                                <fieldset>
                                    <legend>Headers</legend>
                                    <ul>
                                        <?php foreach ($route["desc"]["headers"] as $head) : ?>
                                            <li>
                                                <h4><?= $head["title"] ?></h4>
                                                <p><?= $head["description"] ?></p>
                                            </li>
                                        <?php endforeach; ?>
                                    </ul>
                                </fieldset>
                            <?php endif; ?>
                            <?php if (isset($route["desc"]["body"]) && !empty($route["desc"]["body"])) : ?>
                                <fieldset>
                                    <legend>Body Params</legend>
                                    <ul>
                                        <?php foreach ($route["desc"]["body"] as $body) : ?>
                                            <li>
                                                <h4><?= $body["title"] ?> <span><?= $body["type"] ?></span></h4>
                                                <?= ($body["required"]) ? "<h5 class='required'>Required</h5>" : "<h5 class='optional'>Opcional</h5>" ?>
                                                <p><?= $body["description"] ?></p>
                                            </li>
                                        <?php endforeach; ?>
                                    </ul>
                                </fieldset>
                            <?php endif; ?>
                        </section>
                    <?php endif; ?>
                <?php endforeach; ?>
            <?php else : ?>
                <?php $this->renderPartials($outsideContent); ?>
            <?php endif; ?>
        </div>
        <button id="btnRespMenu"><i class="fas fa-bars"></i></button>
    </main>
</body>
<script>
    let search = document.getElementById("searchField");
    let btnMenu = document.getElementById("btnRespMenu");
    let btnClose = document.getElementsByClassName("btnCloseMenu")[0];
    let menuBar = document.getElementsByClassName("navmenu")[0];

    search.onfocus = () => {
        document.querySelector(".docBody .search").style.borderBottomColor = "rgba(27, 73, 119, 0.6)";
        document.querySelector(".docBody .search i").style.color = "rgb(27, 73, 119)";
    }

    search.onblur = () => {
        document.querySelector(".docBody .search").style.borderBottomColor = "rgba(0,0,0,0.1)";
        document.querySelector(".docBody .search i").style.color = "rgb(0,0,0)";
    }

    btnMenu.onclick = () => {
        menuBar.style.display = "block";
    }

    btnClose.onclick = () =>{
        menuBar.style.display = "none";
    }
</script>

</html>