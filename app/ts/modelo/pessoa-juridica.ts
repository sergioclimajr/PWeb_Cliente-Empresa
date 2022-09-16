class PessoaJuridica extends Pessoa {

    constructor(nome: string, idade: number, dataNascimento: Date, _contas: Array<Conta>, readonly cnpj: string) {
        super(nome + " - Jurídica", idade, dataNascimento, _contas)
        this.cnpj = cnpj;

    }

    getCnpj(): string {
        return this.cnpj;
    }
}