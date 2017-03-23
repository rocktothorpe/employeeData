

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




// Builds the HTML Table out of empData.
function buildTable(selector) { //the selector is empDataTable
  var columns = addAllColumnHeaders(empData.employee, selector);

  for (var i = 0; i < empData.employee.length; i++) {
    var row = $('<tr/>');
    for (var j = 0; j < 4; j++) {
      var cellValue = empData.employee[i][columns[j]];
      row.append($('<td/>').html(cellValue));
    }
    $(selector).append(row);
  }
   
}

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records.


function addAllColumnHeaders(empData, selector) {
  var columnSet = [];
  var headerTr$ = $('<tr/>');
  var count = 0;
  var colNum = 4;

  for (var i = 0; i < colNum ; i++) {
    var rowHash = empData[i];
    for (var key in rowHash) {
      if ($.inArray(key, columnSet) == -1) {
        columnSet.push(key);
        headerTr$.append($('<th/>').html(key));
        count++;
      }
      if (count == 4)
        break;
    }
    
  }
  $(selector).append(headerTr$);

  return columnSet;
}



