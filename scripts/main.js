

var myList;

$.getJSON('data.json', function(empData){
       myList = empData;
       //alert(myList.property);
 });


/*
function preload(){
  myList = loadJSON("data.json");
}
*/



//all of the below is a working table for the json data above

// Builds the HTML Table out of myList.
function buildHtmlTable(selector) {
  var columns = addAllColumnHeaders(myList.employee, selector);

  for (var i = 0; i < myList.employee.length; i++) {
    var row$ = $('<tr/>');
    for (var colIndex = 0; colIndex < columns.length; colIndex++) {
      var cellValue = myList.employee[i][columns[colIndex]];
      if (cellValue == null) cellValue = "";
      row$.append($('<td/>').html(cellValue));
    }
    $(selector).append(row$);
  }
}

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records.
function addAllColumnHeaders(myList, selector) {
  var columnSet = [];
  var headerTr$ = $('<tr/>');

  for (var i = 0; i < myList.length; i++) {
    var rowHash = myList[i];
    for (var key in rowHash) {
      if ($.inArray(key, columnSet) == -1) {
        columnSet.push(key);
        headerTr$.append($('<th/>').html(key));
      }
    }
  }
  $(selector).append(headerTr$);

  return columnSet;
}


