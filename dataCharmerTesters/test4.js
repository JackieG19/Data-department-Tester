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
      salary.push([]); // this connect with line 59
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
             // console.log("Salary empId: ", salaryDataArray[i].slice(1, 6));
             console.log("Current Salary, EmployeeId:");

            // loops thru the 20 employees id in the employeeId array
            for(var j = 0; j < employeeId.length; j++){
                for (var k = 0; k < employeeId[j].length; k++) {
                    if (employeeId[j][k] == salaryDataArray[i].slice(1, 6)) {
                        salary[j].push(salaryDataArray[i].slice(7, 12));
                    }
                }
            }
            console.log(salaryDataArray[i].slice(1, 6)); 
        }
    }
});
