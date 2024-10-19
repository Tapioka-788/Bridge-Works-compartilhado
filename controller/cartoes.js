import { criarCartoes } from "../view/js/cartao_V.js";
import { escondeTelaCad } from "./telaCad.js";
import { recolheDados } from "./telaCad.js";

import { escondeTelaAtt } from "./telaAtt.js";
import { recolheDadosAtt } from "./telaAtt.js";

import { escodeTelaDel, recolheDadosDel} from './confirm_delete.js';

window.escodeTelaDel = escodeTelaDel;
window.recolheDadosDel = recolheDadosDel;

window.escondeTelaCad = escondeTelaCad;
window.recolheDados = recolheDados;

window.escondeTelaAtt = escondeTelaAtt;
window.recolheDadosAtt = recolheDadosAtt;

document.addEventListener("DOMContentLoaded", ()=>{
    criarCartoes();
})