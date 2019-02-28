var fs = require('fs');

// single dimen
var departments = []; 
var departmentId = []; 

// muti-dimensional arrays
var employeeName = [];
var employeeId = [];
var salary = [];


 // WORKING WITH THE DEPARTMENT FILE


// process the file 'department.txt'
fs.readFile('departments.txt', 'utf8', function(err, data){
    if (err) throw err;
     // console.log(data);
        // INSERT INTO `departments` VALUES 
        // ('d001','Marketing'),
        // ('d002','Finance'),
        // ('d003','Human Resources'),
        // ('d004','Production'),
        // ('d005','Development'),
        // ('d006','Quality Management'),
        // ('d007','Sales'),
        // ('d008','Research'),
        // ('d009','Customer Service');

// The replace() method searches a string for a specified value, or a regular 
// expression, and returns a new string where the specified values are replaced.
    
    // remove the uneeded string from the first line
    var deptDataClean = data.replace(/INSERT INTO `departments` VALUES/g, "");
     console.log(deptDataClean);
        // ('d001','Marketing'),
        // ('d002','Finance'),
        // ('d003','Human Resources'),
        // ('d004','Production'),
        // ('d005','Development'),
        // ('d006','Quality Management'),
        // ('d007','Sales'),
        // ('d008','Research'),
        // ('d009','Customer Service');
    
    // convert cleaned data into a temporary array. Each line will be an array element.
    var deptDataArray = deptDataClean.split('\n');
    
    // split() method is used to split a string into an array of substrings, and returns the new array.
    
    deptDataArray.shift();
    // The shift() method removes the first item of an array
    
    // console.log(deptDataArray);
//     [ '(\'d001\',\'Marketing\'),',
//   '(\'d002\',\'Finance\'),',
//   '(\'d003\',\'Human Resources\'),',
//   '(\'d004\',\'Production\'),',
//   '(\'d005\',\'Development\'),',
//   '(\'d006\',\'Quality Management\'),',
//   '(\'d007\',\'Sales\'),',
//   '(\'d008\',\'Research\'),',
//   '(\'d009\',\'Customer Service\');' ]
    
    // grab the department id and the department name and push them into their respective single d arrays
    for(var i = 0; i < deptDataArray.length; i++){
        
        // pushing the characters that is sliced a portion into a new array
        departmentId.push(deptDataArray[i].slice(2, 6));
        departments.push(deptDataArray[i].slice(9, -3));
        
        // The splice() method adds/removes items to/from an array, and returns the removed item(s).
    }
    
    // console.log(departmentId);
//     [ 'd001',
//      'd002',
//      'd003',
//      'd004',
//      'd005',
//      'd006',
//      'd007',
//      'd008',
//      'd009' ]

    // console.log(departments);
//   [ 'Marketing',
//   'Finance',
//   'Human Resources',
//   'Production',
//   'Development',
//   'Quality Management',
//   'Sales',
//   'Research',
//   'Customer Service' ]
    
    // create muti-dimensional arrays using the lenght of the number of department
    for(var j = 0; j < deptDataArray.length; j++){
      
      // populate multi-d arrays with sub arrays [] (no data)
      employeeId.push([]);
      employeeName.push([]);
      
      // The push() method adds new items to the end of an array, and returns the new length.
      
     
    // console.log(employeeId);
//  [ [] ] a muti-dimensional arrays grouping 9 sub array
//  [ [], [] ]
//  [ [], [], [] ]
//  [ [], [], [], [] ]
//  [ [], [], [], [], [] ]
//  [ [], [], [], [], [], [] ]
//  [ [], [], [], [], [], [], [] ]
//  [ [], [], [], [], [], [], [], [] ]
//  [ [], [], [], [], [], [], [], [], [] ]
    }
});
