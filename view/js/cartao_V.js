import { mostraTelaCad } from "../../controller/telaCad.js";
import { excluirCartoes, pegarCartoes } from "../../services/formacao/cartoes_S.js";
import { pegarCartoes } from "../../services/formacao/cartoes_S.js"

export async function criarCartoes() {
    let secitionCartoes = document.getElementById('cartoes')
    secitionCartoes.innerHTML = ''

    const cartoes = await pegarCartoes()
    
    for (let i = 0; i < cartoes.length; i++) {
        let cartao = document.createElement('div');
        cartao.className = 'cartao_vaga';

        cartao.style.backgroundColor = 'red'

        let h1 = document.createElement('h1')
        h1.textContent = cartoes[i].salario
        h1.className = 'ct_font';
        let h5 = document.createElement('h5')
        h5.textContent = cartoes[i].vaga
        h5.className = 'ct_font';
        let p = document.createElement('p')
        p.textContent = cartoes[i].descricao//adiciona um caroes[i].descricao e add no back end tbm
        let h2 = document.createElement('h2')
        h2.textContent = "88:88"

        let h3 = document.createElement('h3')
        h3.className = 'rodape_card';
        h3.textContent = "Local da Empresa"

        let button = document.createElement('button')
        button.className = 'button_excluir'
        button.textContent = 'Excluir';
        button.addEventListener('click', ()=>{
            excluirCartoes(i)
        })

        cartao.appendChild(h1)
        cartao.appendChild(h5)
        cartao.appendChild(p)
        cartao.appendChild(h2)
        cartao.appendChild(button)
        cartao.appendChild(h3)

        secitionCartoes.appendChild(cartao)
    }
    let cartaoAdd = document.createElement('button')
    cartaoAdd.className = 'cartao_add'
    cartaoAdd.textContent = '+'
    cartaoAdd.addEventListener('click', ()=>{
        mostraTelaCad();
    })
    secitionCartoes.appendChild(cartaoAdd)
}

