//cartao em forma de variavel

let cartao = document.getElementById('cartao_vaga')

let vSalario = document.getElementById('ct_Vsalario')
let vVaga = document.getElementById('ct_Vvaga')
let vDescricao = document.getElementById('ct_Vdescricao')
let vHorario = document.getElementById('ct_Vhorario')

let rodape = document.getElementById('rodape_card')

let vLocalNome = document.getElementById('ct_VlocalnomeE')

//textos

let salario = document.createTextNode('Salario')
let vaga = document.createTextNode('Vaga')
let descricao = document.createTextNode('Descricao')
let horario = document.createTextNode('Horario')

let lNome = document.createTextNode('Local/ Nome da empresa')

//filhos do cartao

vSalario.appendChild(salario)
vVaga.appendChild(vaga)
vDescricao.appendChild(descricao)
vHorario.appendChild(horario)
vLocalNome.appendChild(lNome)

rodape.appendChild(vLocalNome)

cartao.appendChild(vSalario)
cartao.appendChild(vVaga)
cartao.appendChild(vDescricao)
cartao.appendChild(vHorario)
cartao.appendChild(rodape)

//cartao

cartao.style.width = '25vw'
cartao.style.height = '30vh'
cartao.style.borderRadius = '2vw'
cartao.style.border = 'solid 0.2vw #011126'
cartao.style.position = 'absolute'
cartao.style.left = '5vw'
cartao.style.top = '20vh'
cartao.style.backgroundColor = '#ffffff'

//rodape

rodape.style.width = '25vw'
rodape.style.height = '7.5vh'
rodape.style.borderRadius = '0 0 1.5vw 1.5vw'
rodape.style.position = 'absolute'
rodape.style.zIndex ='10'
rodape.style.bottom = '0vh'
rodape.style.backgroundColor = '#011126'

//posicoes no cartao

vSalario.style.position = 'absolute'
vSalario.style.left = '17.5vw'
vSalario.style.top = '1.75vh'
vSalario.style.fontSize = '2.5vw'

vVaga.style.position = 'absolute'
vVaga.style.left = '1vw'
vVaga.style.top = '14vh'
vVaga.style.fontSize = '2.5vw'

vDescricao.style.position = 'absolute'
vDescricao.style.left = '2vw'
vDescricao.style.top = '20vh'

vHorario.style.position = 'absolute'
vHorario.style.left = '20vw'
vHorario.style.top = '20vh'

//posicoes no rodape

vLocalNome.style.color = '#ffffff'
vLocalNome.style.position = 'absolute'
vLocalNome.style.left = '2vw'
vLocalNome.style.top = '1vh'