import cardapio from "../cardapio.js";
import split from "./split.js";


export default function verificacaoDeEntrada(pedido) {
  if (pedido.trim() !== "") {
    
    const partesDoPedido = split(pedido)
    let quantidadePedido = parseInt(partesDoPedido[1]);

    if(!(partesDoPedido.length > 1)){
      return 2
    }
    if(!(partesDoPedido[0] in cardapio)){
        return 2
    }
    if ( quantidadePedido === 0 || quantidadePedido === "" || partesDoPedido.length === 1 || isNaN(quantidadePedido) ) {
      return 1;
    }
    
    else if (!(partesDoPedido[0] in cardapio) || partesDoPedido[0] == "" || partesDoPedido[0] >= 0) {
      return 2 
    } 
    else{
      return false
    }
  }
  else{
    return 3;
  }
 
}
