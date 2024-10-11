import { criarCartoes } from "../view/js/cartao_V.js";

export async function pegarCartoes() {
   try {
      const response = await fetch('http://localhost:3000/salario')
      const data = await response.json()
      const cartoes = data.cartao;
      return cartoes;
   } catch (error) {
      console.error('Erro ao carregar os cartoes', error)
   }
}

export async function excluirCartoes(index) {
   try {
      const response = await fetch('http://localhost:3000/salario',{
         method: 'DELETE',
         headers: {
            'Contente-Type': 'application/json',
         },
         body: JSON.stringify({cartao: index}),
      });
      criarCartoes()
   }
   catch (error) {
      console.error('Erro ao excluir os cartoes', error)
   }
}

export async function cadastrarCartao(salario, vaga, descricao) {
   try {
      const response = await fetch('http://localhost:3000/salario',{
         method: 'POST',
         headers: {
            'Contente-Type': 'application/json',
         },
         body: JSON.stringify({
            salario: salario,
            vaga: vaga,
            descricao: descricao,
         }),
      });
      criarCartoes()
   }
   catch (error) {
      console.error('Erro ao excluir os cartoes', error)
   }
}