import { mostraTelaAtt } from "./../../controller/telaAtt.js";
import { mostraTelaCad } from "../../controller/telaCad.js";
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

        let h1 = document.createElement('h1')
        h1.textContent = cartoes[i].salario
        h1.className = 'ct_font';

        let h5 = document.createElement('h5')
        h5.textContent = cartoes[i].vaga
        h5.className = 'ct_font';

        let p = document.createElement('p')
        p.textContent = cartoes[i].descricao
        p.className = 'ct_font'

        let h2 = document.createElement('h2')
        h2.textContent = cartoes[i].horario
        h2.className = 'ct_font'

        let rodape = document.createElement('div')
        rodape.className = 'rodape_card';

        let h3 = document.createElement('h3')
        h3.textContent = "Local da Empresa"

        let btns = document.createElement('div')
        btns.className = 'btns'

        let button = document.createElement('button')
   
        button.textContent = 'Excluir';
        button.addEventListener('click', ()=>{
            excluirCartoes(i)
        })

        let atualizarbutton = document.createElement('button')
 
        atualizarbutton.textContent = 'Atualizar';
        atualizarbutton.addEventListener('click', ()=>{
            mostraTelaAtt(i)
        })

        textos.appendChild(h1)
        textos.appendChild(h5)
        textos.appendChild(p)
        textos.appendChild(h2)

        btns.appendChild(button)
        btns.appendChild(atualizarbutton)

        rodape.appendChild(h3)

        cartao.appendChild(textos)
        cartao.appendChild(btns)
        cartao.appendChild(rodape)

        secitionCartoes.appendChild(cartao)
    }
    let cartaoAdd = document.createElement('button')
    cartaoAdd.className = 'cartao_add'
    cartaoAdd.style.width = '15vw'
    cartaoAdd.style.height = '27.5vh'
    cartaoAdd.style.borderRadius = '2vw'
    cartaoAdd.textContent = '+'
    cartaoAdd.style.fontSize = '10vw'
    cartaoAdd.addEventListener('click', ()=>{
        mostraTelaCad();
    })

    secitionCartoes.appendChild(cartaoAdd)
}

