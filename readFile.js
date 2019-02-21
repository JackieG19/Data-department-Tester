var departments = ["Marketing", "Finance", "Human Resources", "Production", "Development", "Quality Management", "Sales", "Research", "Customer Service"] 
var departmentId = ["d001", "d002", "d003", "d004", "d005", "d006", "d007", "d008", "d009"];
var empolyeeId = [[10017], [], [10005, 10013], [10003, 10004, 10010, 10018, 10020], [10001, 10006, 10008, 10012, 10014, 10018], [10009, 10010], [10002, 10016], [10007, 10015, 10019], [10011]];
var employeeName = [['Cristinel Bouloucos'], [], ['Kyoichi Maliniak', 'Eberhardt Terkki'], ['Parto Bamford', 'Chirstian Koblick', 'Duangkaew Piveteau', 'Kazuhide Peha', 'Mayuko Warwick'], ['Georgi Facello', 'Anneke Preusig', 'Saniya Kalloufi', 'Patricio Bridgland', 'Berni Genin', 'Kazuhide Peha'], ['Sumant Peac ', 'Duangkaew Piveteau'], ['Bezalel Simmel', 'Kazuhito Cappelletti'], ['Tzvetan Zielinski', 'Guoxiang Nooteboom', 'Lillian Haddadi'], ['Mary Sluis']];
var salary = [[99651], [0], [94692, 68901], [43311, 74057, 80324, 84672, 47017], [88958, 59755, 0, 54423, 60598, 84672], [94409, 80324], [72527, 77935], [88070, 0, 50032], [0]];


for(var i = 0; i < departmentId.length; i++){
    console.log(`Department ${departmentId[i]} - ${departments[i]}`);
    var total = 0;
    
    for(var j = 0; j < empolyeeId[i].length; j++){
        console.log(` ${j+1}. Employee ID: ${empolyeeId[i][j]}, Name: ${employeeName[i][j]}, Salary: ${salary[i][j]}`);
    }
    total += salary[i][j];
}

