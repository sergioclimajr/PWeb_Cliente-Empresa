class PessoaJuridica extends Pessoa {
    constructor(nome, idade, dataNascimento, _contas, cnpj) {
        super(nome + " - Jurídica", idade, dataNascimento, _contas);
        this.cnpj = cnpj;
        this.cnpj = cnpj;
    }
    getCnpj() {
        return this.cnpj;
    }
}
