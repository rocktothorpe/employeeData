
//This code produces a good table!!

/*

var myList = 
   [
    {
      "firstName": "Stephen",
      "lastName": "Doyle",
      "position": "Partner",
      "salary": 205000,
      "email": "sdoyle@law.com",
      "phone": "310.332.4523",
      "office": "Los Angeles"
    },
    {
      "firstName": "Stanley",
      "lastName": "Finlay",
      "position": "Lawyer",
      "salary": 160000,
      "email": "sfinlay@law.com",
      "phone": "312.299.8493",
      "office": "Chicago"
    },
    {
  
      "firstName": "Lisa",
      "lastName": "Geist",
      "position": "Partner",
      "salary": 210000,
      "email": "lgeist@law.com",
      "phone": "203.439.2341",
      "office": "New York"
    },
    {
  
      "firstName": "Jessica",
      "lastName": "Austin",
      "position": "Of Counsel",
      "salary": 250000,
      "email": "jaustin@law.com",
      "phone": "203.439.2392",
      "office": "New York"
    },

    {
  
      "firstName": "Katherine",
      "lastName": "Ford",
      "position": "Lawyer",
      "salary": 180000,
      "email": "kford@law.com",
      "phone": "310.349.2392",
      "office": "Los Angeles"
    },

    {
    
      "firstName": "Nataliya",
      "lastName": "Gonzales",
      "position": "Partner",
      "salary": 227000,
      "email": "ngonzales@law.com",
      "phone": "206.439.9489",
      "office": "Washington"
    },

    {
  
      "firstName": "Richard",
      "lastName": "Mullen",
      "position": "Foreign Associate",
      "salary": 90000,
      "email": "rmullen@law.com",
      "phone": "+44.20.4820.3840",
      "office": "Miami"
    },

    {
  
      "firstName": "James",
      "lastName": "Rhoades",
      "position": "Lawyer",
      "salary": 145000,
      "email": "jaustin@law.com",
      "phone": "203.439.2392",
      "office": "New York"
    },

    {
  
      "firstName": "Steve",
      "lastName": "White",
      "position": "Associate",
      "salary": 55000,
      "email": "swhite@law.com",
      "phone": "813.184.5439",
      "office": "Tampa Bay"
    }
  ]






/*
function preload(){
  myList = loadJSON("data.json");
}
*/




/*
// Builds the HTML Table out of myList.
function buildHtmlTable(selector) {
  var columns = addAllColumnHeaders(myList, selector);

  for (var i = 0; i < myList.length; i++) {
    var row$ = $('<tr/>');
    for (var colIndex = 0; colIndex < columns.length; colIndex++) {
      var cellValue = myList[i][columns[colIndex]];
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
*/









var myList = {"employee":
   [
    {
      "firstName": "Stephen",
      "lastName": "Doyle",
      "position": "Partner",
      "salary": 205000,
      "email": "sdoyle@law.com",
      "phone": "310.332.4523",
      "office": "Los Angeles"
    },
    {
      "firstName": "Stanley",
      "lastName": "Finlay",
      "position": "Lawyer",
      "salary": 160000,
      "email": "sfinlay@law.com",
      "phone": "312.299.8493",
      "office": "Chicago"
    },
    {
  
      "firstName": "Lisa",
      "lastName": "Geist",
      "position": "Partner",
      "salary": 210000,
      "email": "lgeist@law.com",
      "phone": "203.439.2341",
      "office": "New York"
    },
    {
  
      "firstName": "Jessica",
      "lastName": "Austin",
      "position": "Of Counsel",
      "salary": 250000,
      "email": "jaustin@law.com",
      "phone": "203.439.2392",
      "office": "New York"
    },

    {
  
      "firstName": "Katherine",
      "lastName": "Ford",
      "position": "Lawyer",
      "salary": 180000,
      "email": "kford@law.com",
      "phone": "310.349.2392",
      "office": "Los Angeles"
    },

    {
    
      "firstName": "Nataliya",
      "lastName": "Gonzales",
      "position": "Partner",
      "salary": 227000,
      "email": "ngonzales@law.com",
      "phone": "206.439.9489",
      "office": "Washington"
    },

    {
  
      "firstName": "Richard",
      "lastName": "Mullen",
      "position": "Foreign Associate",
      "salary": 90000,
      "email": "rmullen@law.com",
      "phone": "+44.20.4820.3840",
      "office": "Miami"
    },

    {
  
      "firstName": "James",
      "lastName": "Rhoades",
      "position": "Lawyer",
      "salary": 145000,
      "email": "jaustin@law.com",
      "phone": "203.439.2392",
      "office": "New York"
    },

    {
  
      "firstName": "Steve",
      "lastName": "White",
      "position": "Associate",
      "salary": 55000,
      "email": "swhite@law.com",
      "phone": "813.184.5439",
      "office": "Tampa Bay"
    }
  ]
}






/*
function preload(){
  myList = loadJSON("data.json");
}
*/





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


