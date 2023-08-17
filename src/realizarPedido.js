import formaDePagamento from "./formaDePagamento.js";
import CaixaDaLanchonete from "./caixa-da-lanchonete.js";
import conferirItemExtra from "./validacoes/conferirItemExtra.js";
import verificacaoDeEntrada from "./validacoes/verificacaoDeEntrada.js";



let listaPedido = ["pizza , 1"];

function realizarPedido() {
  
  // validaçoes das entradas
  const validacao1 = verificacaoDeEntrada(listaPedido);
  const validacao2 = conferirItemExtra(listaPedido);


  // caixa
  const pagamento = formaDePagamento();
  const caixa = new CaixaDaLanchonete();
  const resultado = caixa.calcularValorDaCompra(pagamento, listaPedido, validacao1, validacao2);

  console.log(resultado);
}


realizarPedido();

export { realizarPedido, listaPedido };
