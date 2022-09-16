class Pessoa {
    constructor(nome, idade, dataNascimento, _contas) {
        this.nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
        this._contas = new Array;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    get idade() {
        return this._idade;
    }
    set idade(idade) {
        this._idade = idade;
    }
    getdataNascimento() {
        return this._dataNascimento;
    }
    set dataNascimento(novaData) {
        this._dataNascimento = novaData;
    }
    consultarContas(numero) {
        return this._contas.find(conta => conta.numero === numero);
    }
    acrescentarConta(conta) {
        this._contas.push(conta);
    }
    removerContas(numero) {
        const contasARemover = this.consultarContas(numero);
        if (contasARemover) {
            const indiceARemover = this._contas.indexOf(contasARemover);
            if (indiceARemover > -1) {
                this._contas.splice(indiceARemover, 1);
            }
        }
    }
    saldoTotalContas() {
        let somador = 0;
        this._contas.map((it) => somador += it.getSaldo());
        return somador;
    }
    mediaSaldoContas() {
        return this.saldoTotalContas() / this._contas.length;
    }
}
