import { pegarCartoes } from "../services/formacao/cartoes_S.js";
import { criarCartoes } from "../view/js/cartao_V.js";

document.addEventListener("DOMContentLoaded", ()=>{
    criarCartoes();
    pegarCartoes();
})