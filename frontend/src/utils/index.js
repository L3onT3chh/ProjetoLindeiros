/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
var state = true;

export function popLoginForm(elem){

    if (state === true) {
        var pos = { "left": elem.offsetLeft, "top": (elem.offsetTop + 50) }

        if ((btnPopLogin.offsetLeft + 300) > window.innerWidth) {
            var dif = (btnPopLogin.offsetLeft + 300) - btnPopLogin.offsetLeft;
            pos.left = btnPopLogin.offsetLeft - dif;
        }

        var container = `
            <div class="loginForm container" style="left:`+ pos.left + `;top:` + pos.top + `;">
                <form>
                    <label for="loginEmail">Email:</label>
                    <input type="text" placeholder="Seu email" name="loginEmail" id="loginEmail">
                    <label for="loginSenha">Senha:</label>
                    <input type="password" placeholder="Sua senha" name="loginSenha" id="loginSenha">
                    <p id="esqueceuSenha">Esqueceu sua senha?</p>
                    <button class="btn bgcolor-secondary">Entrar</button>
                </form>
            </div>
        `;
        state = false;
        document.getElementsByTagName('body')[0].innerHTML += container;
    }else{
        state = true;
        document.getElementsByClassName('loginForm')[0].remove();
    }
}

window.onscroll = ()=>{
    if(document.getElementsByClassName('loginForm')[0]){
        document.getElementsByClassName('loginForm')[0].remove();
    }
}