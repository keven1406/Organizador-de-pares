//acao -> (InserirPessoa -> Sexo -> estadoCivil) -> ID
const listaDoCarrinho = []

//lista:: String -> string -> string -> Array
const lista = inserir => nome => sexo => estadoCivil => id => 
	listaDoCarrinho.push({'nome': nome, 'sexo': sexo, 'estadoCivil': estadoCivil, 'ID': id})
const inserirPessoa = lista(listaDoCarrinho)

//inserindo nomes, sexo, estado civil e ID
inserirPessoa('Jonas Melo')('Masculino')('Solteiro')(listaDoCarrinho.length)
inserirPessoa('Carlos Mirando')('Masculino')('Casado')(listaDoCarrinho.length)
inserirPessoa('Elisabeti Sheila')('Feminino')('Solteiro')(listaDoCarrinho.length)
inserirPessoa('Ana Maria')('Feminino')('Solteiro')(listaDoCarrinho.length)

//listaDeCombinação:: Pessoa -> listaDePessoasCombinaveis -> 

//listaDeCombinacao:: ID -> combinar -> array
//forma um novo array com todas as combinacoes possiveis retirando apenas o valor proprio
const filtrarId = listaDePessoas => idDaPessoaAtual => 
	listaDePessoas.filter(pessoa => { 
		return (pessoa.ID != idDaPessoaAtual ? true : false)
})

//formandoListaDeCombinacao:: id -> array -> item
const formandoListaDeCombinacao = id => filtrando => 
	({ID: id, combinacoesPossiveis: filtrando(id).map(item => [id, item.ID])})

//listasCombinadas:: array -> fn:: (idDaPessoaAtual, IdFiltrado) -> arrayComTodasAsCombinacoes
const listasCombinadas = listaDoCarrinho.map(pessoa =>
	 formandoListaDeCombinacao(pessoa.ID)(filtrarId(listaDoCarrinho)))
console.log(listasCombinadas)
console.log(listasCombinadas.map(array => array.combinacoesPossiveis.map(item => item)))
const array = listasCombinadas[0].combinacoesPossiveis[0]























//tentando juntar as listas
//lista:: acao -> acessarArray -> pegarPrimeiroArray -> calcularNovoArrayComNumeroDePEssoas -> ArmazenarNaListaOriginal
//listaOriginal:: acao -> pegarListaDeCombinacoes -> juntarUmaComOutra-> ListaCompleta
/*
const pegarPrimeiroArray = lista => 
	lista.map(pessoa => pessoa.combinacoesPossiveis.map(combinacao => combinacao[0])
const acessarArray = pegarPrimeiroArray(listaDoCarrinho)

*/

//pegar o maior valor do array -> somar com 1 -> criar um novo array
const verificarMaiorArray = (min,cur) => {
	if (min < cur) return cur
}
//pegarMaiorArray:: array -> maior array -> numero
const pegarMaiorArray = array => verificarMaior => array.reduce(verificarMaior)

novoNumero = pegarMaiorArray(array)(verificarMaiorArray)

//criarArray:: numero -> NumeroId -> array
const criarArray = numero => numeroId => 
		[numero + numeroId, numeroId]

//NovaLista:: ListaAntiga ->  array -> novoNumero -> novaLista
const novaListaArray = listaDoCarrinho => criarArray => 
		listaDoCarrinho.map(item => criarArray(item.ID))

const listaOrdenada = novaListaArray(listaDoCarrinho)(criarArray(novoNumero))
console.log(listaOrdenada)

const retirandoArrayRepetitivos = (anterior, atual) => {
	let resultado = []
	if (anterior[0] != atual[1])
		resultado.push(atual)
	return resultado
}

const listaFinal = listaOrdenada.reduce(retirandoArrayRepetitivos)
console.log(listaFinal)
