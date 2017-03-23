

var empData;

$.getJSON('data.json', function(Data){
       empData = Data;
       //alert(empData.property);
 });


/*
function preload(){
  empData = loadJSON("data.json");
}
*/


//different attempt to build a dynamic table
/*

function buildTable(selector) {

  //build table head


}



*/




///*

// Builds the HTML Table out of empData.
function buildTable(selector) { //the selector is empDataTable
  var columns = addAllColumnHeaders(empData.employee, selector);
  var tableBody = $('<tbody>');
  
  for (var i = 0; i < empData.employee.length; i++) {
    var row = $('<tr>');
    tableBody.append(row);
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



