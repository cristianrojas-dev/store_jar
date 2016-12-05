var fs = require('fs');
var path = require('path');
var ext ='.'+ process.argv[3];

fs.readdir(process.argv[2], function(err,list){
	if(err){
		console.log(err);
	}
	for(i = 0; i < list.length; i++){
		if(path.extname(list[i]) === ext){
			console.log(list[i]);
		}		
	}
});

/******  solucion oficial ******

   var fs = require('fs')  
     var path = require('path')  
       
     var folder = process.argv[2]  
     var ext = '.' + process.argv[3]  
       
     fs.readdir(folder, function (err, files) {  
       if (err) return console.error(err)  
       files.forEach(function (file) {  
         if (path.extname(file) === ext) {  
           console.log(file)  
         }  
       })  
     })  
*/
