import { atualizarCartao } from "../services/formacao/cartoes_S.js";

let telaCad = document.getElementById('telaCadastro')

export function escondeTelaAtt(){
    telaCad.style.left = '-100vw'
}
export function mostraTelaAtt(){
    telaCad.style.left = '0vw'
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