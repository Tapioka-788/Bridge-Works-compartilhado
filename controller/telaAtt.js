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
export function recolheDadosAtt(){
    let salario = document.getElementById('salario');
    let vaga = document.getElementById('vaga');
    let descricao = document.getElementById('descricao');
    let horario = document.getElementById('horario')

    if(salario.value === "", vaga.value === '', descricao === '', horario.value === ''){
        alert('Check se todos os campos estão preenchidos');
    } else {

    console.log(id, salario.value, vaga.value, descricao.value, horario.value);
    atualizarCartao(id, salario.value, vaga.value, descricao.value, horario.value);
    escondeTelaAtt();

    salario.value = '';
    vaga.value = '';
    descricao.value = '';
    horario.value = '';
}};