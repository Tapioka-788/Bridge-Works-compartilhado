import { cadastrarCartao } from "../services/formacao/cartoes_S.js"

let telaCad = document.getElementById('telaCadastro')

export function escondeTelaCad(){
    telaCad.style.left = '-100vw'
}

export function mostraTelaCad(){
    telaCad.style.left = '0vw'
}

export function recolheDados(){
    let salario = document.getElementById('salario');
    let vaga = document.getElementById('vaga');
    let descricao = document.getElementById('descricao');

<<<<<<< HEAD
    cadastrarCartao(salario.value, vaga.value, descricao.value);
    escondeTelaCad();
=======
    cadastrarCartao(salario.value, vaga.value, descricao.value)
    escondeTelaCad()
>>>>>>> abffe76a7fe119f2a4515feda924cca707586521

    salario.value = '';
    vaga.value = '';
    descricao.value = '';
}