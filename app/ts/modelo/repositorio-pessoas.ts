class RepositorioPessoas {

    private readonly repositorio_pessoas: Array<Pessoa>;

    constructor() {
        this.repositorio_pessoas = new Array<Pessoa>(); 
    }

    pesquisar(nome: string) {
        return this.repositorio_pessoas.find(pessoa => pessoa.getNome() === nome);
    }

    getPessoas() {
        return this.repositorio_pessoas;
    }     

    adicionar(pessoa: Pessoa) {
        this.repositorio_pessoas.push(pessoa);
    }

    remover(nome: string) {
        this.repositorio_pessoas.splice(this.repositorio_pessoas.findIndex(pessoa => pessoa.getNome() === nome));
    }

}

    

