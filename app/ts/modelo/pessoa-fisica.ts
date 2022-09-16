class PessoaFisica extends Pessoa {

    constructor(nome: string, idade: number, dataNascimento: Date, _contas: Array<Conta>, readonly cpf: string) {
        super(nome + " - Física", idade, dataNascimento, new Array <Conta>);
        this.cpf = cpf;
               
    }

    
    
    getCpf(): string {
        return this.cpf;
    }

}