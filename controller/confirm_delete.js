import { excluirCartoes } from "./../services/formacao/cartoes_S.js";

let telaDelet = document.getElementById('confirm_delete');
let id;

export function escodeTelaDel() {
    telaDelet.style.left = '-100vw';
}
export function mostraTelaDel(i) {
    id = i;
    telaDelet.style.left = '0';
}

export function recolheDadosDel(){
    excluirCartoes(cartoes[i].id);
    escodeTelaDel();
}