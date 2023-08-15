export default function split(pedido){
    const partesDoPedido = pedido.split(/[,\s]+/);
    return partesDoPedido
}