function formaDePagamento() {
  let metodoDePagamento = "debito";

  if (
    metodoDePagamento !== "dinheiro" &&
    metodoDePagamento !== "debito" &&
    metodoDePagamento !== "credito"
  ) {
    return false;
  } else {
    return metodoDePagamento;
  }
}

export default formaDePagamento;
