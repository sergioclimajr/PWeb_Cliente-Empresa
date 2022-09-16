class Cliente extends PessoaFisica {
    constructor (protected nome: string, idade: number, dataNascimento: Date, readonly cpf: string, _contas: Array<Conta>) {
    super (nome, idade, dataNascimento, _contas, cpf);
}

getCpfCliente(cpf: string): string {
    return this.cpf;
}

setNome(nome: string): void {
    this.nome = nome;
}

readonly contas: Array<Conta>;

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