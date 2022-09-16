class Empresa extends PessoaJuridica {
    constructor (protected nome: string, idade: number, dataNascimento: Date, readonly cnpj: string, _contas: Array<Conta>) {
    super (nome, idade, dataNascimento, _contas, cnpj);
}

getCnpjEmpresa(_cnpj: string): string {
    return this.cnpj;
}

consultarContasEmpresa(numero: string): Conta {
    return this.contas.find((conta: { numero: string; }) => conta.numero === numero);
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