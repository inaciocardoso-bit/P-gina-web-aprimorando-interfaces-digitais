const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;
    botao.addEventListener("click" botaoClicado);
    function botaoClicado() {
            let texto = botao.querySelector("span");
            if (curtiu === false){
                texto.textContent++;
                curtiu = true;
            } else{
                texto,textContent--;
                curtiu = false;
            }
        }
    });

const btnTemaVarang = document.querySelector(".btm-tema-varang");

btnTemaVarang.addEventListener("click", mudaTema);

function mudaTema() {
    const corpoPagina = document.body;
    if (corpoPagina .classlist .contains("tema varang")) {
        corpoPagina .classlist .remove("tema varang");
    } else {
        corpo.classlist.add("tema varang");
    }
}
