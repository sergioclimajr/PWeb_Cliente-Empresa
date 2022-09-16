class RepositorioPessoas {
    constructor() {
        this.repositorio_pessoas = new Array();
    }
    pesquisar(nome) {
        return this.repositorio_pessoas.find(pessoa => pessoa.getNome() === nome);
    }
    getPessoas() {
        return this.repositorio_pessoas;
    }
    adicionar(pessoa) {
        this.repositorio_pessoas.push(pessoa);
    }
    remover(nome) {
        this.repositorio_pessoas.splice(this.repositorio_pessoas.findIndex(pessoa => pessoa.getNome() === nome));
    }
}
