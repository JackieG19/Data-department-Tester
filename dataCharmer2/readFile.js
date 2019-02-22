var fs = require('fs');

// step1: create all single d and multi d array As empty arrays (initially)
    // push single string data/element into a array as a single array
    // push array data into an array to form multi d arrays

// single dimen
var departments = []; 
var departmentId = []; 

// muti-dimensional arrays
var employeeName = [];
var employeeId = [];
var salary = [];

// process the file 'department.txt'
fs.readFile('departments.txt', 'utf8', function(err, data){
    if (err) throw err;
    // console.log(data);
    //console.log('dirty');
    
    // remove the uneeded string from the first line
    var deptDataClean = data.replace(/INSERT INTO `departments` VALUES/g, "");
    // console.log('cleaned');
    // console.log(deptDataClean);
    
    // convert cleaned data into a temporary array. Each line will be an array element.
    var deptDataArray = deptDataClean.split('\n');
    deptDataArray.shift();
    //console.log(deptDataArray);
    
    // grab the department id and the department name and push them into their respective single d arrays
    for(var i = 0; i < deptDataArray.length; i++){
        // var deptId = deptDataArray[i].slice(2, 6);
        // console.log(deptId);
        
        departmentId.push(deptDataArray[i].slice(2, 6));
        departments.push(deptDataArray[i].slice(9, -3));
    }
    // console.log(departmentId);
    // console.log(departments);
    
    // create muti-dimensional arrays using the lenght of the number of department
    for(var j = 0; j < deptDataArray.length; j++){
      employeeId.push([]);
      employeeName.push([]);
      //console.log(employeeId);
    }
});

// process the file 'employeeId.txt'
fs.readFile('employeeId.txt', 'utf8', function(err, data){
    if (err) throw err;
    
    var employeeDataClean = data.replace(/INSERT INTO `dept_emp` VALUES/g, "");
    
    var employeeDataArray = employeeDataClean.split('\n');
    for(var i = 0; i < employeeDataArray.length; i++){
        if(employeeDataArray[i].slice(28, 32) == '9999'){
        //  console.log(employeeDataArray[i].slice(8, 12));   
        //  console.log(departmentId.indexOf(employeeDataArray[i].slice(8, 12)));
        //  console.log(employeeDataArray[i].slice(1, 6));
         
         employeeId[departmentId.indexOf(employeeDataArray[i].slice(8, 12))].push(employeeDataArray[i].slice(1, 6));
        }
    }
    console.log(employeeId);
})
