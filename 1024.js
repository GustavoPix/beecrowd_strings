var input = require('fs').readFileSync('input', 'utf8');
var lines = input.split('\n');

var textos = [];
var qty = parseInt(lines[0]);
for (var i = 1; i < lines.length - 1; i++) {
	textos.push(lines[i]);
}

function cripto_pass1(str) {
	var aux = [];
	for (var i = 0; i < str.length; i++) {
		if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90)
			aux.push(String.fromCharCode(str[i].charCodeAt() + 3));
		else if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122)
			aux.push(String.fromCharCode(str[i].charCodeAt() + 3));
		else
			aux.push(str[i]);
	}
	return aux.join('');
}
function cripto_pass2(str) {
	var aux = [];
	for (var i = str.length - 1; i >= 0; i--)
		aux.push(str[i]);
	return aux.join('');
}

function cripto_pass3(str) {
	var aux = [];
	for (var i = 0; i < str.length; i++) {
		if (i < Math.floor(str.length / 2))
			aux.push(str[i]);
		else
			aux.push(String.fromCharCode(str[i].charCodeAt() - 1));
	}
	return aux.join('');
}

function criptografar(str) {
	var aux = cripto_pass1(str);
	aux = cripto_pass2(aux);
	return cripto_pass3(aux);
}

for (var i = 0; i < qty; i++) {
	textos[i] = criptografar(textos[i]);
	console.log(textos[i]);
}
