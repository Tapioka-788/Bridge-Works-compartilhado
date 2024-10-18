import { cadastrarCartao } from "../services/formacao/cartoes_S.js"

let telaCad = document.getElementById('telaCadastro')

export function escondeTelaCad() {
    telaCad.style.left = '-100vw'
}

export function mostraTelaCad() {
    telaCad.style.left = '0vw'
}

export function recolheDados() {
    let salario = document.getElementById('salarioCad');
    let vaga = document.getElementById('vagaCad');
    let descricao = document.getElementById('descricaoCad');
    let horario = document.getElementById('horarioCad');
    let nome = document.getElementById('NomeCad');

    if(salario.value === "", vaga.value === '', descricao === '', horario.value === '', nome.value ===''){
        alert('Check se todos os campos estão preenchidos');
    } else {


        cadastrarCartao(salario.value, vaga.value, descricao.value, horario.value, nome.value,);
        escondeTelaCad();

        salario.value = '';
        vaga.value = '';
        descricao.value = '';
        horario.value = '';
        nome.value = '';
    }
}