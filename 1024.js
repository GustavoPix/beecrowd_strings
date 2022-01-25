var input = require('fs').readFileSync('input', 'utf8');
var lines = input.split('\n');

var textos = [];
for (var i = 1; i < lines.length; i++) {
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

function criptografar(str) {
	var aux = cripto_pass1(str);
}

for (var i = 0; i < 4; i++) {
	textos[i] = criptografar(textos[i]);
	console.log(textos[i]);
}
