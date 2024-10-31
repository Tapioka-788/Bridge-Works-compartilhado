import { criarCartoes } from "./../../view/js/cartao_V.js";

export async function pegarCartoes() {
   try {
      const response = await fetch('https://backend-tele-curso-real.vercel.app/salario')
      if (response.status === 200) {
         const data = await response.json()
         const cartoes = data.cartoes;

         return cartoes;
      } else {
         alert('Sevice offline...');
         const cartoes = [];
         return cartoes;
      }
   }
   catch (e) {
      alert(e)
   }
}

export async function excluirCartoes(id) {
   try {
      const response = await fetch('https://backend-tele-curso-real.vercel.app/salario', {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ id }),
      });
      criarCartoes()
   }
   catch (error) {
      console.error('Erro ao excluir os cartoes', error)
   }
}

export async function cadastrarCartao(salario, vaga, descricao, horario,nome) {
   try {
      const response = await fetch('https://backend-tele-curso-real.vercel.app/salario', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            salario: salario,
            vaga: vaga,
            descricao: descricao,
            horario: horario,
            nome: nome,
         }),
      });
      criarCartoes()
   }
   catch (e) {
      console.log(e)
   }
}

export async function atualizarCartao(id, salario, vaga, descricao, horario,nome) {
   try {
      const response = await fetch('https://backend-tele-curso-real.vercel.app/salario', {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            salario: salario,
            vaga: vaga,
            descricao: descricao,
            horario: horario,
            nome: nome,
            id: id,
         }),
      })
      criarCartoes();
   } catch (error) {
      console.error('Erro ao atualizar os cartoes', error)
   }
}

//aaaaaaa