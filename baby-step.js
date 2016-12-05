var resultado = 0;
var limit = process.argv.length;
for(i = 2; i < limit; i++){
	resultado += Number(process.argv[i]);
}
console.log(resultado);