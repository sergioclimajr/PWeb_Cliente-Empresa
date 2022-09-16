class Pessoa {
    protected nome: string;
    private _idade: number;
    private _dataNascimento: Date;
    private _contas: Array<Conta>;

    constructor(nome: string, idade: number, dataNascimento: Date, _contas: Array<Conta>) {
        this.nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
        this._contas = new Array<Conta>;

    }

    
    getNome(): string {
        return this.nome;
    }

    setNome(nome: string) {
        this.nome = nome;
    }
    
    get idade(): number {
        return this._idade;
    }

    set idade(idade: number) {
        this._idade = idade;
    }

    getdataNascimento(): Date {
        return this._dataNascimento;
    }

    set dataNascimento(novaData: Date) {
        this._dataNascimento = novaData;
    }

    consultarContas(numero: string): Conta {
        return this._contas.find(conta => conta.numero === numero);
    }

    acrescentarConta(conta: Conta) {
        this._contas.push(conta);
    }
    
    removerContas(numero: string) {
        const contasARemover = this.consultarContas(numero);
        if (contasARemover) {
            const indiceARemover = this._contas.indexOf(contasARemover);
            if (indiceARemover > -1) {
                this._contas.splice(indiceARemover, 1);
            }
        }
    }
    
    saldoTotalContas(): number {
        let somador = 0;
        this._contas.map((it) => somador += it.getSaldo());
        return somador;
    }
    
    mediaSaldoContas() {
        return this.saldoTotalContas() / this._contas.length;
    }

}