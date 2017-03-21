

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




// Builds the HTML Table out of myList.
function buildTable(selector) {
  var columns = addAllColumnHeaders(myList.employee, selector);

  for (var i = 0; i < myList.employee.length; i++) {
    var row = $('<tr/>');
    for (var j = 0; j < 4; j++) {
      var cellValue = myList.employee[i][columns[j]];
      //if (cellValue == null) cellValue = "";
      row.append($('<td/>').html(cellValue));
    }
    $(selector).append(row);
  }
}

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records.


function addAllColumnHeaders(myList, selector) {
  var columnSet = [];
  var headerTr$ = $('<tr/>');
  var count = 0;

  for (var i = 0; i < myList.length && (count != 4) ; i++) {
    var rowHash = myList[i];
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


