var fs = require('fs');
// single dimen
var departments = []; 
var departmentId = []; 
// muti-dimensional arrays
var employeeName = [];
var employeeId = [];
var salary = [];


// WORKING WITH THE EMPLOYEE FILE


// process the file 'department.txt'
fs.readFile('departments.txt', 'utf8', function(err, data){
    if (err) throw err;
    // remove the uneeded string from the first line
    var deptDataClean = data.replace(/INSERT INTO `departments` VALUES/g, "");
    // convert cleaned data into a temporary array. Each line will be an array element.
    var deptDataArray = deptDataClean.split('\n');
    deptDataArray.shift();
    
    // grab the department id and the department name and push them into their respective single d arrays
    for(var i = 0; i < deptDataArray.length; i++){
        // var deptId = deptDataArray[i].slice(2, 6);
        // console.log(deptId);
        
        departmentId.push(deptDataArray[i].slice(2, 6));
        // pushing the characters that is sliced a portion into a new array
        departments.push(deptDataArray[i].slice(9, -3));
    }
    // create muti-dimensional arrays using the lenght of the number of department
    for(var j = 0; j < deptDataArray.length; j++){
      // populate multi-d arrays with sub arrays [] (no data)
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
        // going to line 0 in the postion of 28 to 32
        
          // console.log(employeeDataArray[i].slice(8, 12));   
            // d007
            // d004
            // d004
            // d003
            // d005
            // d008
            // d006
            // d006
            // d005
            // d003
            // d005
            // d007
            // d001
            // d004
            // d008
            // d004
            
          // console.log(departmentId.indexOf(employeeDataArray[i].slice(8, 12)));
            // 6
            // 3
            // 3
            // 2
            // 4
            // 7
            // 5
            // 5
            // 4
            // 2
            // 4
            // 6
            // 0
            // 3
            // 7
            // 3
          
          // console.log(employeeDataArray[i].slice(1, 6));
            // 6
            // 10002
            // 3
            // 10003
            // 3
            // 10004
            // 2
            // 10005
            // 4
            // 10006
            // 7
            // 10007
            // 5
            // 10009
            // 5
            // 10010
            // 4
            // 10012
            // 2
            // 10013
            // 4
            // 10014
            // 6
            // 10016
            // 0
            // 10017
            // 3
            // 10018
            // 7
            // 10019
            // 3
            // 10020
         
        employeeId[departmentId.indexOf(employeeDataArray[i].slice(8, 12))].push(employeeDataArray[i].slice(1, 6));
        //  indexof find the position in the departmentId of the 
        // employeeDataArray[i].slice(8, 12) = department number
        // which mean employeeId[4]
        }
    }
    console.log(employeeId);
    
//   [ [ '10017' ],
//   [],
//   [ '10005', '10013' ],
//   [ '10003', '10004', '10018', '10020' ],
//   [ '10006', '10012', '10014' ],
//   [ '10009', '10010' ],
//   [ '10002', '10016' ],
//   [ '10007', '10019' ],
//   [] ]
});
