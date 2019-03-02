var fs = require('fs');
// single dimen
var departments = []; 
var departmentId = []; 
// muti-dimensional arrays
var employeeName = [];
var employeeId = [];
var salary = [];

// WORKING WITH THE EMPLOYEES TEXT FILE

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
             // console.log("Current Salary of EmployeeId:");

            // loops thru the 20 employees id in the employeeId array
            for(var j = 0; j < employeeId.length; j++){
                for (var k = 0; k < employeeId[j].length; k++) {
                    if (employeeId[j][k] == salaryDataArray[i].slice(1, 6)) {
                        salary[j].push(salaryDataArray[i].slice(7, 12));
                    }
                }
            }
            // console.log(salaryDataArray[i].slice(1, 6)); 
        }
    }
});

fs.readFile('employees.txt', 'utf8', function(err, data) {
    if (err) throw err;

    var nameSplit, nameSplitId, joinedNames;
    var nameDataClean = data.replace(/INSERT INTO `employees` VALUES /g, "");
    var nameDataArray = nameDataClean.split('\n');

    for (var i = 0; i < nameDataArray.length; i++) {

        nameSplit = nameDataArray[i].split(',');
        nameSplitId = nameSplit[0].replace(/\(/g, "");

          // console.log(nameSplit);
         
            // [ '(10001',
            //   '\'1953-09-02\'',
            //   '\'Georgi\'',
            //   '\'Facello\'',
            //   '\'M\'',
            //   '\'1986-06-26\')',
            //   '' ]
            
            // [ '(10002',
            //   '\'1964-06-02\'',
            //   '\'Bezalel\'',
            //   '\'Simmel\'',
            //   '\'F\'',
            //   '\'1985-11-21\')',
            //   '' ]
            
            // [ '(10003',
            //   '\'1959-12-03\'',
            //   '\'Parto\'',
            //   '\'Bamford\'',
            //   '\'M\'',
            //   '\'1986-08-28\')',
            //   '' ]
            
            // [ '(10004',
            //   '\'1954-05-01\'',
            //   '\'Chirstian\'',
            //   '\'Koblick\'',
            //   '\'M\'',
            //   '\'1986-12-01\')',
            //   '' ]
            
            // [ '(10005',
            //   '\'1955-01-21\'',
            //   '\'Kyoichi\'',
            //   '\'Maliniak\'',
            //   '\'M\'',
            //   '\'1989-09-12\')',
            //   '' ]
            
            // [ '(10006',
            //   '\'1953-04-20\'',
            //   '\'Anneke\'',
            //   '\'Preusig\'',
            //   '\'F\'',
            //   '\'1989-06-02\')',
            //   '' ]
            
            // [ '(10007',
            //   '\'1957-05-23\'',
            //   '\'Tzvetan\'',
            //   '\'Zielinski\'',
            //   '\'F\'',
            //   '\'1989-02-10\')',
            //   '' ]
            
            // [ '(10008',
            //   '\'1958-02-19\'',
            //   '\'Saniya\'',
            //   '\'Kalloufi\'',
            //   '\'M\'',
            //   '\'1994-09-15\')',
            //   '' ]
            
            // [ '(10009',
            //   '\'1952-04-19\'',
            //   '\'Sumant\'',
            //   '\'Peac\'',
            //   '\'F\'',
            //   '\'1985-02-18\')',
            //   '' ]
            
            // [ '(10010',
            //   '\'1963-06-01\'',
            //   '\'Duangkaew\'',
            //   '\'Piveteau\'',
            //   '\'F\'',
            //   '\'1989-08-24\')',
            //   '' ]
            
            // [ '(10011',
            //   '\'1953-11-07\'',
            //   '\'Mary\'',
            //   '\'Sluis\'',
            //   '\'F\'',
            //   '\'1990-01-22\')',
            //   '' ]
            
            // [ '(10012',
            //   '\'1960-10-04\'',
            //   '\'Patricio\'',
            //   '\'Bridgland\'',
            //   '\'M\'',
            //   '\'1992-12-18\')',
            //   '' ]
            
            // [ '(10013',
            //   '\'1963-06-07\'',
            //   '\'Eberhardt\'',
            //   '\'Terkki\'',
            //   '\'M\'',
            //   '\'1985-10-20\')',
            //   '' ]
            
            // [ '(10014',
            //   '\'1956-02-12\'',
            //   '\'Berni\'',
            //   '\'Genin\'',
            //   '\'M\'',
            //   '\'1987-03-11\')',
            //   '' ]
            
            // [ '(10015',
            //   '\'1959-08-19\'',
            //   '\'Guoxiang\'',
            //   '\'Nooteboom\'',
            //   '\'M\'',
            //   '\'1987-07-02\')',
            //   '' ]
            
            // [ '(10016',
            //   '\'1961-05-02\'',
            //   '\'Kazuhito\'',
            //   '\'Cappelletti\'',
            //   '\'M\'',
            //   '\'1995-01-27\')',
            //   '' ]
            
            // [ '(10017',
            //   '\'1958-07-06\'',
            //   '\'Cristinel\'',
            //   '\'Bouloucos\'',
            //   '\'F\'',
            //   '\'1993-08-03\')',
            //   '' ]
            
            // [ '(10018',
            //   '\'1954-06-19\'',
            //   '\'Kazuhide\'',
            //   '\'Peha\'',
            //   '\'F\'',
            //   '\'1987-04-03\')',
            //   '' ]
            
            // [ '(10019',
            //   '\'1953-01-23\'',
            //   '\'Lillian\'',
            //   '\'Haddadi\'',
            //   '\'M\'',
            //   '\'1999-04-30\')',
            //   '' ]
            
            // [ '(10020',
            //   '\'1952-12-24\'',
            //   '\'Mayuko\'',
            //   '\'Warwick\'',
            //   '\'M\'',
            //   '\'1991-01-26\')',
            //   '' ]
            
            // [ '' ]

         // console.log(nameSplitId);
            // 10001
            // 10002
            // 10003
            // 10004
            // 10005
            // 10006
            // 10007
            // 10008
            // 10009
            // 10010
            // 10011
            // 10012
            // 10013
            // 10014
            // 10015
            // 10016
            // 10017
            // 10018
            // 10019
            // 10020

         // console.log(nameSplit[2]);
            // 'Georgi'
            // 'Bezalel'
            // 'Parto'
            // 'Chirstian'
            // 'Kyoichi'
            // 'Anneke'
            // 'Tzvetan'
            // 'Saniya'
            // 'Sumant'
            // 'Duangkaew'
            // 'Mary'
            // 'Patricio'
            // 'Eberhardt'
            // 'Berni'
            // 'Guoxiang'
            // 'Kazuhito'
            // 'Cristinel'
            // 'Kazuhide'
            // 'Lillian'
            // 'Mayuko'

            for (var j = 0; j < employeeId.length; j++) {

                for (var k = 0; k < employeeId[j].length; k++) {

                    if (employeeId[j][k] == nameSplitId) {
                        //["a", "b", "c", "d"].slice(1,3).join("-") //b-c 
                        // employeeName[j].push(nameSplit.slice(2,4).join(" ")
                        
                        // console.log(nameSplit[2].replace(/'/g, ""), nameSplit[3].replace(/'/g, ""));
                            // Bezalel Simmel
                            // Parto Bamford
                            // Chirstian Koblick
                            // Kyoichi Maliniak
                            // Anneke Preusig
                            // Tzvetan Zielinski
                            // Sumant Peac
                            // Duangkaew Piveteau
                            // Patricio Bridgland
                            // Eberhardt Terkki
                            // Berni Genin
                            // Kazuhito Cappelletti
                            // Cristinel Bouloucos
                            // Kazuhide Peha
                            // Lillian Haddadi
                            // Mayuko Warwick
                            
                        joinedNames = nameSplit[2].replace(/'/g, "") + " " + nameSplit[3].replace(/'/g, "");
                        employeeName[j].push(joinedNames);
                    }
                }
            }
    }
     // console.log(employeeName);
        //  [ [ 'Cristinel Bouloucos'],
        //   [],
        //   [ 'Kyoichi Maliniak', 'Eberhardt Terkki'],
        //   [ 'Parto Bamford', 'Chirstian Koblick', 'Kazuhide Peha','Mayuko Warwick'],
        //   [ 'Anneke Preusig', 'Patricio Bridgland', 'Berni Genin'],
        //   [ 'Sumant Peac', 'Duangkaew Piveteau'],
        //   [ 'Bezalel Simmel', 'Kazuhito Cappelletti'],
        //   [ 'Tzvetan Zielinski', 'Lillian Haddadi'],
        //   [] ] 
  
     console.log(employeeName[0][0]); // = Cristinel Bouloucos
});
