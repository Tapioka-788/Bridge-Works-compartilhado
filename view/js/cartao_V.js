import { mostraTelaAtt } from "./../../controller/telaAtt.js";
import { mostraTelaCad } from "../../controller/telaCad.js";
import { mostraTelaDel } from "../../controller/confirm_delete.js";
import { excluirCartoes } from "../../services/formacao/cartoes_S.js";
import { pegarCartoes } from "../../services/formacao/cartoes_S.js";

export async function criarCartoes() {

    let secitionCartoes = document.getElementById('cartoes')
    secitionCartoes.innerHTML = ''

    const cartoes = await pegarCartoes()

    for (let i = 0; i < cartoes.length; i++) {
        let cartao = document.createElement('div');
        cartao.className = 'cartao_vaga';
        let textos = document.createElement('div')
        textos.className = 'textos'

        let cSalario = document.createElement('h1')
        cSalario.textContent = 'R$' + cartoes[i].salario
        cSalario.className = 'ct_font';
        cSalario.id = 'cSalario'

        let cVaga = document.createElement('h5')
        cVaga.textContent = cartoes[i].vaga
        cVaga.className = 'ct_font';
        cVaga.id = 'cVaga'

        let cDesc = document.createElement('p')
        cDesc.textContent = cartoes[i].descricao
        cDesc.className = 'ct_font'

        let cHora = document.createElement('h2')
        cHora.textContent = 'hora' + cartoes[i].horario
        cHora.className = 'ct_font'
        cHora.id = 'cHora'

        let rodape = document.createElement('div')
        rodape.className = 'rodape_card';

        let cNome = document.createElement('h3')
        cNome.textContent = cartoes[i].nome

        let btns = document.createElement('div')
        btns.className = 'btns'

        let button = document.createElement('button')
        button.id = 'lixeira'
        button.addEventListener('click', ()=>{
            excluirCartoes(cartoes[i].id);
        });

        let lixo = document.createElement('i')
        lixo.classList.add('fa-solid')
        lixo.classList.add('fa-trash')

        let atualizarbutton = document.createElement('button')
        atualizarbutton.id = 'lapis'
        atualizarbutton.addEventListener('click', () => {
            mostraTelaAtt(cartoes[i].id)
        })

        let caneta = document.createElement('i')
        caneta.classList.add('fa-solid')
        caneta.classList.add('fa-pen')

        textos.appendChild(cSalario)
        textos.appendChild(cVaga)
        textos.appendChild(cDesc)
        textos.appendChild(cHora)

        button.appendChild(lixo)

        atualizarbutton.appendChild(caneta)

        btns.appendChild(button)
        btns.appendChild(atualizarbutton)

        rodape.appendChild(cNome)

        cartao.appendChild(textos)
        cartao.appendChild(btns)
        cartao.appendChild(rodape)

        secitionCartoes.appendChild(cartao)
    }
    let cartaoAdd = document.createElement('button')
    cartaoAdd.id = 'cartao_add'
    cartaoAdd.textContent = '+'

    cartaoAdd.addEventListener('click', () => {
        mostraTelaCad();
    })

    secitionCartoes.appendChild(cartaoAdd)
}

