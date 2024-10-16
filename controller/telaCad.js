import { cadastrarCartao } from "../services/formacao/cartoes_S.js"

let telaCad = document.getElementById('telaCadastro')

export function escondeTelaCad() {
    telaCad.style.left = '-100vw'
}

export function mostraTelaCad() {
    telaCad.style.left = '0vw'
}

export function recolheDados() {
    let salario = document.getElementById('salario');
    let vaga = document.getElementById('vaga');
    let descricao = document.getElementById('descricao');

    if(salario.value === ""){
        alert('nome em branco');
    } else {


        cadastrarCartao(salario.value, vaga.value, descricao.value);
        escondeTelaCad();

        salario.value = '';
        vaga.value = '';
        descricao.value = '';
    }
}