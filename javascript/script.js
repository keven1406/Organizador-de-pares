var names = [], genero = "", estadoCivil = "";
//Adiciona no array nomes um objeto contendo suas propriedades.
function addName() {
	estadoCivil = formulario.estadoCivil.value;
	genero = document.formulario.genero.value;
	names.push({nome: document.getElementById("nome").value,
				sexo: genero,
				casado: estadoCivil});
	names.forEach(function (lista) {
		document.getElementById("tabela").innerHTML += "<tr><td>"+lista.nome+"</td><td>"+lista.sexo+"</td></tr>";
	});
	
}
//Apaga o ultimo número inserido.
function rmName() {
	names.pop();
}