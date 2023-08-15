const cardapio = {
    cafe: {
        valor: 3.00,
        descricao: "Café",        
    },
    chantily: {
        valor: 1.50,
        descricao: "Chantily(extra do Café)",
        principal: "cafe"
        
    },
    suco: {
        valor: 6.20,
        descricao: "Suco Natural"
    },
    sanduiche: {
        valor: 6.50,
        descricao: "Sanduíche"
    },
    queijo: {
        valor: 2.00,
        descricao: "Queijo(extra do Sanduíche)",
        principal: "sanduiche"

    },
    salgado:{
        valor: 7.25,
        descricao: "Salgado"
    },
    combo1: {
        valor: 9.50,
        descricao: "1 Suco e 1 sanduíche"
    },
    combo2: {
        valor: 7.50,
        descricao: "1 Café e 1 sanduíche"
    }

}

export default cardapio;