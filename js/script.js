

var empData;
var ESC_KEY = 27;

//stores json data into empData
$.getJSON('data.json', function(Data){
       empData = Data;
       
 });



// Builds the HTML Table out of empData.
function buildTable(selector) { //the selector is empDataTable
  var columns = addAllColumnHeaders(empData.employee, selector);

  //var columns = ["First Name", "Last Name", "Position", "Salary"];
  var tableBody = $('<tbody>');
  
  for (var i = 0; i < empData.employee.length; i++) {
    //var row = $('<tr class = "row' + i + '">');//gives each row a unique class name
    var row = $('<tr id= "' + i + '"  data-target="#popUpData"  onclick="content(this)" >');//data-toggle="collapse"

    tableBody.append(row);
    //tableBody.append(row);
    for (var j = 0; j < 4; j++) {
      var cellValue = empData.employee[i][columns[j]]; //gives cell value column data for the row
      row.append($('<td>').html(cellValue));//adds table data to the row
    }//finished adding columns to the row
    
    tableBody.append(row);//adds row to the body

  }
   $(selector).append(tableBody);


}



// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records.



function addAllColumnHeaders(empData, selector) {
  var columnSet = [];
  var rowHead$ = $('<tr>');
  var header$ = $('<thead>');
  var count = 0;
  var colNum = 4;

  for (var i = 0; i < colNum ; i++) {
    var rowHash = empData[i];
    for (var key in rowHash) {
      if ($.inArray(key, columnSet) == -1) {
        columnSet.push(key);
        rowHead$.append($('<th>').html(key));
        count++;
      }
      if (count == 4)
        break;
    }
    header$.append(rowHead$)
  }
  $(selector).append(header$);

  return columnSet;
}






function content(elem) 
{
    showDetails();
    var destination = document.getElementById("popUpData"); //where the data should go
    var id = elem.id; 
    var idNum = Number(id);//changes id from string to number for array access
    var name = empData.employee[idNum]["First Name"] + " " + empData.employee[idNum]["Last Name"];
   
    var p1 = document.getElementById("name");
    p1.innerHTML = 'Name: ' + empData.employee[idNum]["First Name"] + " " + empData.employee[idNum]["Last Name"];
    var p2 = document.getElementById("pos");
    p2.innerHTML = 'Position: ' + empData.employee[idNum].Position;
    var p3 = document.getElementById("phone");
    p3.innerHTML = 'Phone: ' + empData.employee[idNum].Phone;
    var p4 = document.getElementById("email");
    p4.innerHTML = 'Email: ' + empData.employee[idNum].Email;
    var p5 = document.getElementById("office");
    p5.innerHTML = 'Office: ' + empData.employee[idNum].Office;
    addEscape(); //pressing the escape key hides the data
      
}

function showDetails(){
  $("#dataContainer").removeClass('hidden');//shows the data
$("#space").removeClass('hidden');
}
function hideDetails() {
  $("#dataContainer").addClass('hidden');
  $("#space").addClass('hidden');
}

function addEscape() 
{
  'use strict';
  document.body,addEventListener('keyup', function (event) 
  {
  event.preventDefault();
  //console.log(event.KeyCode);
  if (event.keyCode === ESC_KEY) 
    {
      hideDetails();

    }
  }); 
}

