import Lanchonete from './Lanchonete.mjs';
class CaixaDaLanchonete {
    constructor() {
        this.lanchonete = new Lanchonete();
        this.itensCompra = [];
    }

    adicionarItemAoCarrinho(item) {
        this.itensCompra.push(item);
    }

    removerItemDoCarrinho(item) {
        const index = this.itensCompra.indexOf(item);
        if (index !== -1) {
            this.itensCompra.splice(index, 1);
        }
    }


    calcularValorDaCompra() {
        if (this.itensCompra.length === 0) {
            return 'Não há itens no carrinho de compra!';
        }

        let total = 0;
        let temItemPrincipal = false;

        for (const item of this.itensCompra) {
            if (this.lanchonete.cardapio[item]) {
                total += this.lanchonete.cardapio[item][1];
                if (!item.startsWith('extra')) {
                    temItemPrincipal = true;
                }
            } else {
                return 'Item inválido!';
            }
        }

        if (!temItemPrincipal) {
            return 'Item extra não pode ser pedido sem o principal.';
        }

        if (this.formaPagamento !== 'dinheiro' && this.formaPagamento !== 'credito' && this.formaPagamento !== 'debito') {
            return 'Forma de pagamento inválida!';
        }

        if (this.formaPagamento === 'dinheiro') {
            total -= total * this.lanchonete.descontoDinheiro;
        } else if (this.formaPagamento === 'credito') {
            total += total * this.lanchonete.acrescimoCredito;
        }
        else{
            total
        }

        return `Valor total da compra: R$ ${total.toFixed(2)}`;
    }
}

const caixa = new CaixaDaLanchonete();
caixa.adicionarItemAoCarrinho('suco')
caixa.adicionarItemAoCarrinho('combo1')
caixa.adicionarItemAoCarrinho('cafe');
caixa.adicionarItemAoCarrinho('chantily');
caixa.formaPagamento = 'credito';

const valorFinalDaCompra = caixa.calcularValorDaCompra();
console.log(valorFinalDaCompra);

export { CaixaDaLanchonete };


