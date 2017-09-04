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
const filtrarId = pessoas => id => pessoas.filter(item => item.ID != id ? true : false)

const formandoListaDeCombinacao = id => filtrando => 
	({ID: id, combinacoesPossiveis: filtrando(id).map(item => [id, item.ID])})

const listasCombinadas = listaDoCarrinho.map(pessoa =>
	 formandoListaDeCombinacao(pessoa.ID)(filtrarId(listaDoCarrinho)))

console.log(listasCombinadas.map(array => array.combinacoesPossiveis.map(item => item)))
console.log(listasCombinadas[0].combinacoesPossiveis[0])

//console.log(listasCombinadas.reduce((min, cur) => 
//				min.combinacoesPossiveis.map(item => item.map

//listaDeSequencia:: listaDeCombinação -> primeiroNomeDeCadaLista -> ordemDeNomesPorCombinacões
//Ordem de combinacao:: valor par -> direita para esquerda(usando o reverse) -> valor impar -> esquerda pra direita

//pegarListaDeId:: listaId -> inverterLista -> lista invertida

console.log(listasCombinadas.length)

//nunca ter o um na mesma lista, até terminar as posiveis combinacoes



/*const elias => 1 item -> formar uma lista que ele não aparece
1 - 0
2 - 3
4 - 5
6 - 7
8 - 9
1 - 2
3 - 4
5 - 6
7 - 8
listascombinadas.map(item => item[0]combinacao.filter
4 -> 1 valor
4 -> 2 valor
*/


//tentando juntar as listas


const array = [0,1]
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

const elias = novaListaArray(listaDoCarrinho)(criarArray(novoNumero))
console.log(elias)
