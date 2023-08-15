import formaDePagamento from "./formaDePagamento.js";
import CaixaDaLanchonete from "./caixa-da-lanchonete.js";
import conferirItemExtra from "./validacoes/conferirItemExtra.js";
import verificacaoDeEntrada from "./validacoes/verificacaoDeEntrada.js";

let pedido;
let listaPedido = ['cafe,1'];

realizarPedido();

function realizarPedido() {
  pedido =  'queijo,1'

  // validaçoes das entradas
  const validacao1 = verificacaoDeEntrada(pedido, listaPedido);
  const validacao2 = conferirItemExtra(pedido);

  // caixa
  const pagamento = formaDePagamento();
  const caixa = new CaixaDaLanchonete();
  const resultado = caixa.calcularValorDaCompra(pagamento, listaPedido, validacao1, validacao2);

  console.log(resultado);
}

export { realizarPedido, pedido, listaPedido };
