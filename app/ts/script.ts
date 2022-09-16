const repositorio_pessoas = new RepositorioPessoas();

const c1 = new Conta ('001', 1000);
const c2 = new Conta ('002', 2000);
const c3 = new Conta ('003', 3000);
const c4 = new Conta ('004', 5000);
const c5 = new Conta ('005', 4000);
const c6 = new Conta ('006', 3500);

const cliente1 = new Cliente ('Sergio', 35, new Date(17/7/1987), '015.324.651-88', [null]);
const cliente2 = new Cliente ('Julyana', 36, new Date(1/2/1986), '246.385.004-91', [null]);
const cliente3 = new Cliente ('Nicoly', 19, new Date (10/3/2003), '165.728.334-95', [null]);

const empresa1 = new Empresa ('Floricutura Master', 5, new Date(12/6/2015), '21.354.217/0001-65', [null]);
const empresa2 = new Empresa ('Up Consultorias', 6, new Date(23/10/2019), '00.360.305/0001-04', [null]);
const empresa3 = new Empresa ('Kumon', 40, new Date(3/5/1982), '00.283.184/0001-22', [null]);

cliente1.acrescentarConta(c1);
cliente2.acrescentarConta(c2);
cliente3.acrescentarConta(c3);
empresa1.acrescentarConta(c4);
empresa2.acrescentarConta(c5);
empresa3.acrescentarConta(c6);

repositorio_pessoas.adicionar(cliente1);
repositorio_pessoas.adicionar(cliente2);
repositorio_pessoas.adicionar(cliente3);
repositorio_pessoas.adicionar(empresa1);
repositorio_pessoas.adicionar(empresa2);
repositorio_pessoas.adicionar(empresa3);

repositorio_pessoas.remover('Julyana');
repositorio_pessoas.remover('Up Consultorias');

repositorio_pessoas.getPessoas();

repositorio_pessoas.pesquisar('Kumon');

cliente1.saldoTotalContas();
console.log(empresa3.mediaSaldoContas());



