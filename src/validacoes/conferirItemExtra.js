

function conferirItemExtra(listaPedido) {
  const itensPrincipais = ["cafe", "sanduiche"];
  const itensExtras = [];

  for (const pedido of listaPedido) {

    const partesDoPedido = pedido.split(",");
    const nomeItem = partesDoPedido[0].trim();

    if (nomeItem === ("chantily") || nomeItem === ("queijo")) {
     itensExtras.push(pedido);
    }
  }

  for (const extra of itensExtras) {
    if (
      (extra === "chantily" && listaPedido.includes("cafe")) ||
      (extra === "queijo" && listaPedido.includes("sanduiche"))
    ) {
      return true;
    }
  }

  return false;
}


export default conferirItemExtra;
