import cardapio from '../cardapio.js'

function verificacaoDeEntrada(listaPedido) {
  if (listaPedido.length === 0) {
    return 3; // Código 3 representa "Não há itens no carrinho de compra!"
  }

  let quantidadeItens = 0;
  let itemInvalido = false;

  for (const pedido of listaPedido) {
    const partesDoPedido = pedido.split(",");
    const nomeItem = partesDoPedido[0].trim();
    const quantidade = parseInt(partesDoPedido[1]);

    if (quantidade === undefined || isNaN(quantidade) || quantidade <= 0) {
      return 1; // Código 1 representa "Quantidade inválida!"
    }

    if (!(nomeItem in cardapio)) {
      itemInvalido = true;
    } else {
      quantidadeItens += quantidade;
    }
  }

  if (itemInvalido) {
    return 2; // Código 2 representa "Item inválido!"
  }


}

export default verificacaoDeEntrada;
