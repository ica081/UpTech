let products = [];

async function carregarProdutos() {
  try {
    const response = await fetch('produtos.json');
    if (!response.ok) throw new Error('Erro ao carregar produtos.json');
    const data = await response.json();
    products = data.produtos;

    if (typeof renderizarVitrine === 'function') {
      renderizarVitrine(products);
    }
    if (typeof renderizarProduto === 'function') {
      renderizarProduto();
    }
  } catch (error) {
    console.error('Falha ao carregar produtos:', error);
  }
}

document.addEventListener('DOMContentLoaded', carregarProdutos);