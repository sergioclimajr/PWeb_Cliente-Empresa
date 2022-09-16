class Empresa extends PessoaJuridica {
    constructor(nome, idade, dataNascimento, cnpj, _contas) {
        super(nome, idade, dataNascimento, _contas, cnpj);
        this.nome = nome;
        this.cnpj = cnpj;
    }
    getCnpjEmpresa(_cnpj) {
        return this.cnpj;
    }
    consultarContasEmpresa(numero) {
        return this.contas.find((conta) => conta.numero === numero);
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
    const contasARemover = this.consultarContasEmpresa(numero);
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
}



}*/ 
