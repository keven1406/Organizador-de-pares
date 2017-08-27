//acao -> (InserirPessoa -> Sexo -> estadoCivil) -> ID
const listaDoCarrinho = []
//lista:: String -> string -> string -> Array
const lista = inserir => nome => sexo => estadoCivil => id => 
	listaDoCarrinho.push({'nome': nome, 'sexo': sexo, 'estadoCivil': estadoCivil, 'ID': id})
inserirPessoa = lista(listaDoCarrinho)
inserirPessoa('Jonas Melo')('Masculino')('Solteiro')(listaDoCarrinho.length)
inserirPessoa('Carlos Mirando')('Masculino')('Casado')(listaDoCarrinho.length)
inserirPessoa('Elisabeti Sheila')('Feminino')('Solteiro')(listaDoCarrinho.length)
console.log(listaDoCarrinho)
