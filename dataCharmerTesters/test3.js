var fs = require('fs');
// single dimen
var departments = []; 
var departmentId = []; 
// muti-dimensional arrays
var employeeName = [];
var employeeId = [];
var salary = [];

// WORKING WITH THE SALARY FILE

// process the file 'department.txt'
fs.readFile('departments.txt', 'utf8', function(err, data){
    if (err) throw err;
    var deptDataClean = data.replace(/INSERT INTO `departments` VALUES/g, "");
    var deptDataArray = deptDataClean.split('\n');
    deptDataArray.shift();

    for(var i = 0; i < deptDataArray.length; i++){
        departmentId.push(deptDataArray[i].slice(2, 6));
        departments.push(deptDataArray[i].slice(9, -3));
    }
    for(var j = 0; j < deptDataArray.length; j++){
      employeeId.push([]);
      employeeName.push([]);
    }
});

// process the file 'employeeId.txt'
fs.readFile('employeeId.txt', 'utf8', function(err, data){
    if (err) throw err;
    
    var employeeDataClean = data.replace(/INSERT INTO `dept_emp` VALUES/g, "");
    
    var employeeDataArray = employeeDataClean.split('\n');
    for(var i = 0; i < employeeDataArray.length; i++){
        if(employeeDataArray[i].slice(28, 32) == '9999'){
        employeeId[departmentId.indexOf(employeeDataArray[i].slice(8, 12))].push(employeeDataArray[i].slice(1, 6));
        }
    }
});

fs.readFile('salary.txt', 'utf8', function(err, data){
    if (err) throw err;
    var salaryDataClean = data.replace(/INSERT INTO `dept_emp` VALUES/g, "");
    var salaryDataArray = salaryDataClean.split('\n');
    
    for(var i = 0; i < salaryDataArray.length; i++){
        // moving tnto the salaryDataArray, moving to postions 27-31 compare it if it equal to 9999
        if(salaryDataArray[i].slice(27, 31) == '9999'){
              console.log("Salary empId: ", salaryDataArray[i].slice(1, 6));
                // Salary empId:  10001
                // Salary empId:  10002
                // Salary empId:  10003
                // Salary empId:  10004
                // Salary empId:  10005
                // Salary empId:  10006
                // Salary empId:  10007
                
                // Salary empId:  10009
                // Salary empId:  10010
                
                // Salary empId:  10012
                // Salary empId:  10013
                // Salary empId:  10014
                
                // Salary empId:  10016
                // Salary empId:  10017
                // Salary empId:  10018
                // Salary empId:  10019
                // Salary empId:  10020
            
            // loops thru the 20 employees id in the employeeId array
            for(var j = 0; j < employeeId.length; j++){
                
                for(var k = 0; k < employeeId[j].length; k++){
                    //console.log(employeeId[j][k]);
                    if(salaryDataArray[i].slice(1, 6) == employeeId[j][k]){
                        console.log("match!!!");
                    }
                }
            }
            console.log(salaryDataArray[i].slice(1, 6)); 
                // Salary empId:  10001
                // 10001
                
                // Salary empId:  10002
                // match!!!
                // 10002
                
                // Salary empId:  10003
                // match!!!
                // 10003
                
                // Salary empId:  10004
                // match!!!
                // 10004
                
                // Salary empId:  10005
                // match!!!
                // 10005
                
                // Salary empId:  10006
                // match!!!
                // 10006
                
                // Salary empId:  10007
                // match!!!
                // 10007
                
                // Salary empId:  10009
                // match!!!
                // 10009
                
                // Salary empId:  10010
                // match!!!
                // 10010
                
                // Salary empId:  10012
                // match!!!
                // 10012
                
                // Salary empId:  10013
                // match!!!
                // 10013
                
                // Salary empId:  10014
                // match!!!
                // 10014
                
                // Salary empId:  10016
                // match!!!
                // 10016
                
                // Salary empId:  10017
                // match!!!
                // 10017
                
                // Salary empId:  10018
                // match!!!
                // 10018
                
                // Salary empId:  10019
                // match!!!
                // 10019
                
                // Salary empId:  10020
                // match!!!
                // 10020
        }
    }
})
