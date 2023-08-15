import cardapio from "./cardapio.js";

export default class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens, validacao1, validacao2) {
    
    let valor = 0;
    
    if (validacao1 == 1 || validacao1 == 2 || validacao1 == 3) {
      if (validacao1 == 1) {
        return "Quantidade inválida!";
      }
      else if(validacao1 == 2){
        return "Item inválido!";
      }
       else{
          return "Não há itens no carrinho de compra!"
       }
    }

    if (validacao2 == false) {
      return "Item extra não pode ser pedido sem o principal";
    }
     if (itens.length == 0) {
      return "Não há itens no carrinho de compra!";
    }
   
    if (!metodoDePagamento) {
      return "Forma de pagamento inválida!";
    }

   else {
      itens.forEach((pedido) => {
        const partesDoPedido = pedido.split(",");
        const nomeItem = partesDoPedido[0].trim();
        const quantidade = parseInt(partesDoPedido[1]) || 0;

        if (nomeItem in cardapio) {
          valor += cardapio[nomeItem].valor * quantidade;
        }
      });

      switch (metodoDePagamento) {
        case "debito":
          break;

        case "dinheiro":
          const descontoDinheiro = valor * 0.05;
          valor -= descontoDinheiro;
          break;

        case "credito":
          const acrescimoCredito = valor * 0.03;
          valor += acrescimoCredito;
          break;

        default:
          return "Forma de pagamento inválida!";
          break;
      }

      valor = `R$ ${valor.toFixed(2)}`.replace(".", ",");
    }

    return valor;
  }
}
