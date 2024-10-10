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