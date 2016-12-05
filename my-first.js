var fs = require('fs');
var archivo = fs.readFileSync(process.argv[2]);
var contar = archivo.toString().split('\n').length -1;

console.log(contar);



