import { pegarCartoes } from "../../services/formacao/cartoes_S.js";
let secitionCartoes = document.getElementById('cartoes')

export async function criarCartoes() {

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
        p.textContent = 'Descrição...'
        let h2 = document.createElement('h2')
        h2.textContent = "88:88"

        let h3 = document.createElement('h3')
        h3.className = 'rodape_card';
        h3.textContent = "Local da Empresa"

        cartao.appendChild(h1)
        cartao.appendChild(h5)
        cartao.appendChild(p)
        cartao.appendChild(h2)
        cartao.appendChild(h3)

        secitionCartoes.appendChild(cartao)
    }
 
}

