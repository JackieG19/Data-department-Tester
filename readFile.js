var departments =["Marketing", "Finance", "Human Resources", "Production", "Development", "Quality Management", "Sales", "Research", "Customer Service"] 

var fs = require('fs');

fs.readFile('department.txt', 'utf8', function(err, data){
    if(err) throw err;
    
    var array = data.split('\n');
    for(var i = 0; i < array.length; i++){
        //console.log(array[i]); 
    }
    
});



fs.readFile('employNum.txt', 'utf8', function(err, data){
    if(err) throw err;
    
    var array = data.split('\n');
    for(var i = 0; i < array.length; i++){
        //console.log(array[i]); 
    }
    
});

fs.readFile('salaries.txt', 'utf8', function(err, data){
    if(err) throw err;
    
    var array = data.split('\n');
    for(var i = 0; i < array.length; i++){
        //console.log(array[i]); 
    }
    
});
