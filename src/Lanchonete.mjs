class Lanchonete {
    constructor() {
        this.cardapio = {
            'cafe': ['Café', 3.00],
            'chantily': ['Chantily (extra do Café)', 1.50],
            'suco': ['Suco Natural', 6.20],
            'sanduiche': ['Sanduíche', 6.50],
            'queijo': ['Queijo (extra do Sanduíche)', 2.00],
            'salgado': ['Salgado', 7.25],
            'combo1': ['1 Suco e 1 Sanduíche', 9.50],
            'combo2': ['1 Café e 1 Sanduíche', 7.50]
        };
        this.descontoDinheiro = 0.05;
        this.acrescimoCredito = 0.03;
    }

    calcularValorTotal(itens, formaPagamento) {
        let total = 0;

        for (const item of itens) {
            if (this.cardapio[item]) {
                total += this.cardapio[item][1];
            }
        }

        if (formaPagamento === 'dinheiro') {
            total -= total * this.descontoDinheiro;
        } else if (formaPagamento === 'credito') {
            total += total * this.acrescimoCredito;
        }

        return total.toFixed(2);
    }
}

export default Lanchonete;
