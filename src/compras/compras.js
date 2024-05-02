const calcularTotal = (ferramentas, comprar) => {
    let nomesFerramentas = [];
    let precoTotal = 0;

    if (ferramentas.length === 0 || comprar.length === 0) {
        throw new Error("Ambas as listas precisam ter ao menos um item.");
    };

    for (let indexFerramentas = 0; indexFerramentas < ferramentas.length; indexFerramentas++) {
        for (let indexComprar = 0; indexComprar < comprar.length; indexComprar++) {

            if (ferramentas[indexFerramentas].nome === comprar[indexComprar]) {
                nomesFerramentas[nomesFerramentas.length] = ferramentas[indexFerramentas].nome;
                precoTotal += ferramentas[indexFerramentas].preco;
            };

        };
    };

    if (nomesFerramentas.length > 0) {
        return `O valor a pagar pelas ferramentas (${nomesFerramentas.join(', ')}) é R$ ${precoTotal.toFixed(2)}`;
    };
    throw new Error('Nenhuma ferramenta desejada encontrada.');
};

module.exports = {
    calcularTotal
};
