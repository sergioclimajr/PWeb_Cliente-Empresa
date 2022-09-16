class PessoaController {
    private repositorioPessoas: RepositorioPessoas;

    constructor() {
        this.repositorioPessoas = new RepositorioPessoas
    }

    adicionarPessoaFisica(pessoa: PessoaFisica) {
        this.repositorioPessoas.adicionar(pessoa);
    }

    adicionarPessoaJuridica(pessoa: PessoaJuridica) {
        this.repositorioPessoas.adicionar(pessoa);
    }
}
/*
    listar() {
        this.repositorioPessoas.getPessoas().forEach((pessoa: any) => this.inserirPessoaNoHTML(pessoa));
    }

    inserir(evento: Event) {
        evento.preventDefault();
        const elementoNome = <HTMLInputElement>document.querySelector('#nome');
        const elementoIdade = <HTMLInputElement>document.querySelector('#idade');
        const elementoDataNascimento = <HTMLInputElement>document.querySelector('#dataNascimento');
        const elementoCPF = <HTMLInputElement>document.querySelector('#cpf');

        const pessoa = new PessoaFisica(elementoNome.value, Number(elementoIdade.value), new Date (elementoDataNascimento.value), elementoCPF.value);
        this.repositorioPessoas.adicionar(pessoa);
        this.inserirPessoaNoHTML(pessoa);
    }

//

    inserirPessoaNoHTML(pessoa: PessoaFisica) {
        const elementoP = document.createElement('p');
        elementoP.textContent = 'Nome ' + pessoa.getNome + ', Idade: ' + pessoa.idade + ', Data de Nascimento: ' + pessoa.dataNascimento; + ', CPF: ' + pessoa.cpf;
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';

        /*botaoApagar.addEventListener('click', (event) => {this.repositorioPessoas.remover(pessoa.cpf); 
            (<Element>event.target).parentElement.remove();});*/
/*
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }

    

}*/