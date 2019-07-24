//multi dimensional arrays vs standard arrays

//standard

var depts = ["Marketing","Engineering","Human Resources"];
var employees = ["Arnell Milhouse","Titus Buchanan","Matt Joseph","Crystal Duong"];

//Multi-dimensional Arrays

var deptsArray = ["Marketing","Engineering","Human Resources"]; //single Dimensioal
var employeesArray = [["Titus","Crystal"],["Matt", "Cliff", "Jason"], ["Arnell"]];

 for(var i = 0; i < deptsArray.length; i++){
            console.log(deptsArray[i]);

    for (var j = 0; j < employeesArray[i].length; j++) {

        console.log(employeesArray[i][j]);
    }
 }

