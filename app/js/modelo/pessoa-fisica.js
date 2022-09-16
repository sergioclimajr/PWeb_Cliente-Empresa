class PessoaFisica extends Pessoa {
    constructor(nome, idade, dataNascimento, _contas, cpf) {
        super(nome + " - Física", idade, dataNascimento, new Array);
        this.cpf = cpf;
        this.cpf = cpf;
    }
    getCpf() {
        return this.cpf;
    }
}
