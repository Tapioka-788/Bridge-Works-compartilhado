let cartoes = [
    {
        salario: 'salario 10' ,
        img: 'https://th.bing.com/th/id/OIP.fYaVUjXw0ZyL1mvl_YGt1AAAAA?rs=1&pid=ImgDetMain'},
    {
        salario: 'salario 11' ,
        img: 'https://th.bing.com/th/id/R.87bd5ebddfd7189998cac4ba10e8d34d?rik=b%2bGTd1gMRENgJg&pid=ImgRaw&r=0'},
    {
        salario: 'salario 12' ,
        img: 'https://th.bing.com/th/id/OIP.Tnk7lPzUorCvQdoeL-GdNQHaHa?rs=1&pid=ImgDetMain'},
    {
        salario: 'salario 13' ,
        img: 'https://th.bing.com/th/id/R.3bcbd5e6a963d5314480808893bf720a?rik=8%2bTqlf5KoN4uiA&pid=ImgRaw&r=0'},
    {
        salario: 'salario 14' ,
        img: 'https://th.bing.com/th/id/R.f11a53f54219a3f47c49275ef194c512?rik=lZ5pbqFYMxvmuQ&pid=ImgRaw&r=0'},
    {
        salario: 'salario 15' ,
        img: 'https://th.bing.com/th/id/R.c9a263e0a838a0f180796869d3469cc1?rik=g%2fbJMc8MGshY4g&pid=ImgRaw&r=0'}
]

export function criarCartoes() {

    //cartao em forma de variavel

    let secitionCartoes = document.getElementById('cartoes')

    for (let i = 0; i < cartoes.length; i++) {
        let cartao = document.createElement('div');
        cartao.className = 'cartao_vaga';

     cartao.style.backgroundImage =`url(${cartoes[i].img})`
 
        // let imagem = document.createElement('img')
        // imagem.className = 'fusca'
        // imagem.src = img[i]

        let h1 = document.createElement('h1')
        h1.textContent = cartoes[i].salario
        h1.className = 'ct_font';
        let h5 = document.createElement('h5')
        h5.textContent = 'Vaga'
        h5.className = 'ct_font';
        let p = document.createElement('p')
        p.textContent = 'Descrição...'
        let h2 = document.createElement('h2')
        h2.textContent = "88:88"

        let h3 = document.createElement('h3')
        h3.className = 'rodape_card';
        h3.textContent = "Local da Empresa"


        cartao.appendChild(h1)
        cartao.appendChild(h5)
        // cartao.appendChild(imagem)
        cartao.appendChild(p)
        cartao.appendChild(h2)
        cartao.appendChild(h3)
        

        secitionCartoes.appendChild(cartao)
    }

}