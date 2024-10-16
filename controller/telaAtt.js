import { atualizarCartao } from "../services/formacao/cartoes_S.js";

let telaAtt = document.getElementById('telaAtt')
let id;

export function escondeTelaAtt(){
    telaAtt.style.right = '-100vw'
}
export function mostraTelaAtt(i){
    id = i;
    telaAtt.style.right = '0vw'
}
export function recolheDadosAtt(id){
    let salario = document.getElementById('salario');
    let vaga = document.getElementById('vaga');
    let descricao = document.getElementById('descricao');

    atualizarCartao(id, salario.value, vaga.value, descricao.value);
    escondeTelaAtt();

    salario.value = '';
    vaga.value = '';
    descricao.value = '';
}