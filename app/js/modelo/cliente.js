class Cliente extends PessoaFisica {
    constructor(nome, idade, dataNascimento, cpf, _contas) {
        super(nome, idade, dataNascimento, _contas, cpf);
        this.nome = nome;
        this.cpf = cpf;
    }
    getCpfCliente(cpf) {
        return this.cpf;
    }
    setNome(nome) {
        this.nome = nome;
    }
}
/*acrescentarConta(conta: Conta) {
    this.contas.push(conta);
}

consultarContas(numero: string): Conta {
    return this.contas.find(conta => conta.numero === numero);
}

removerContas(numero: string) {
    const contasARemover = this.consultarContas(numero);
    if (contasARemover) {
        const indiceARemover = this.contas.indexOf(contasARemover);
        if (indiceARemover > -1) {
            this.contas.splice(indiceARemover, 1);
        }
    }
}

saldoTotalContas(): number {
    let somador = 0;
    this.contas.map((it) => somador += it.getSaldo());
    return somador;
}

mediaSaldoContas() {
    return this.saldoTotalContas() / this.contas.length;
}*/ 
