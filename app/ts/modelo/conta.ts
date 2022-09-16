class Conta {

    public nome: string;
    private readonly _numero: string;

    constructor(numero: string, private saldo=0) {
        this._numero = numero;
    }

    get numero(): string {
        return this._numero;
    }

    getSaldo() {
        return this.saldo;
    }

    debitar(valor: number){
        if (this.saldo >= valor){
            this.saldo -= valor;
        }
    }

    creditar(valor: number){
        this.saldo += valor;
    }

    transferir(destino: Conta, valor: number){
        this.debitar(valor);
        destino.creditar(valor);
    }

}