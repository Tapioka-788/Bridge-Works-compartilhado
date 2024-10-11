import { criarCartoes } from "../view/js/cartao_V.js";
import { escondeTelaCad } from "./telaCad.js";
import { recolheDados } from "./telaCad.js";

window.escondeTelaCad = escondeTelaCad()
window.recolheDados = recolheDados()

document.addEventListener("DOMContentLoaded", ()=>{
    criarCartoes();
})