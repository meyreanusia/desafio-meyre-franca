import { listaPedido } from "../realizarPedido.js";
import cardapio from "../cardapio.js";

export default function conferirItemExtra(pedido) {

  const itensExtras = ["chantily", "queijo"];
  const partesPedido = pedido.split(/[, ]+/);

  const itemPedido = partesPedido[0];


  if (itensExtras.includes(itemPedido)) {
    const extra = cardapio[itemPedido];


    if (itemPedido === "chantily") {
      const principalCafe = listaPedido.some((pedido) => pedido.split(", ")[0] === "cafe");
      
      if (extra && extra.principal && principalCafe) {
        listaPedido.push(pedido);
        return true;
      } else {
        return false;
      }
    } else if (itemPedido === "queijo") {
      const principalSanduiche = listaPedido.some(
        (pedido) => pedido.split(", ")[0] === "sanduiche"
      );
      if (extra && extra.principal && principalSanduiche) {
        listaPedido.push(pedido);
        return true;
      } else {
        return false;
      }
    }
  } 
  
  else {
    listaPedido.push(pedido);
    return true;
  }
}