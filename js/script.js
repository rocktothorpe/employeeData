

var empData;//holds the json data
var ESC_KEY = 27;
var testSorted = [false, false, false, false]; //initialize an array to say that table columns have not been sorted

//stores json data in empData
$.getJSON('data.json', function(Data) {
    empData = Data;

});



// Builds the HTML Table out of empData.
function buildTable(selector) { //the selector is empDataTable
    var columns = addAllColumnHeaders(empData.employee, selector);

    //var columns = ["First Name", "Last Name", "Position", "Salary"];
    var tableBody = $('<tbody>');

    for (var i = 0; i < empData.employee.length; i++) {
        var pos = empData.employee[i].Position;
        var row = $('<tr id= "' + i + '"  onclick="content(this)">');

        tableBody.append(row);
        //tableBody.append(row);
        for (var j = 0; j < 4; j++) {
            var cellValue = empData.employee[i][columns[j]]; //gives cell value column data for the row
            row.append($('<td>').html(cellValue)); //adds table data to the row
        } //finished adding columns to the row

        tableBody.append(row); //adds row to the body

    }
    $(selector).append(tableBody);//add body to table
}


function addAllColumnHeaders(empData, selector) {
    var columnSet = [];
    var rowHead$ = $('<tr>');
    var header$ = $('<thead>');
    var count = 0;
    var colNum = 4;

    for (var i = 0; i < colNum; i++) {
        var rowHash = empData[i];
        for (var key in rowHash) {

            if ($.inArray(key, columnSet) == -1) {
                columnSet.push(key);
                //add id and onclick function to column headers
                rowHead$.append($('<th id ="' + count + '" onclick="sortTableColumns(this)">').html(key + " " +'\u21C5'));
                count++;
            }
            if (count == 4) //break out of loop when 4 columns are made
                break;
        }
        header$.append(rowHead$)
    }
    $(selector).append(header$);

    return columnSet;
}

//displays detailed data of the clicked item
function content(elem) {
    showDetails();
    var destination = document.getElementById("popUpData"); //where the data should go
    var id = elem.id;
    var idNum = Number(id); //changes id from string to number for array access
    var name = empData.employee[idNum]["First Name"] + " " + empData.employee[idNum]["Last Name"];

    //set content for the container
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

//show employee details when clicked
function showDetails() {
    $("#dataContainer").removeClass('hidden'); //shows the data
    $("#space").removeClass('hidden');
}
//hide employee detail container
function hideDetails() { //hides employee detail pop-up
    $("#dataContainer").addClass('hidden');
    $("#space").addClass('hidden');
}

function addEscape() //use escape key to exit employee detail pop-up
{
    'use strict';
    document.body, addEventListener('keyup', function(event) {
        event.preventDefault();

        if (event.keyCode === ESC_KEY) {
            hideDetails();

        }
    });
}

//make search bar
function search() {
    // Declare variables 
    var input, filter, table, tr, td1, td2, td3, td4, found;
    var tary = [4];

    input = document.getElementById("searchBar");
    filter = input.value.toUpperCase();
    table = document.getElementById("empDataTable");
    tr = table.getElementsByTagName("tr");
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 1; i < tr.length; i++) {
        found = false;
        for (j = 0; j < 4; j++) {
            tary[j] = tr[i].getElementsByTagName("td")[j];
            if (tary[j]) {
                if (tary[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                    found = true;
                    break;
                }
            }
        }
        if (found) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}

//drop down menu filter
function showPos(elem) {

    var id = elem.id,
        tr, table, text;
    table = document.getElementById("empDataTable");
    tr = table.getElementsByTagName("tr");

    text = document.getElementById("filter");
    text.innerText = id; //get the dropdown to say id name instead of filter

    var currentPosition;

    for (i = 1; i < tr.length; i++) {
        currentPosition = tr[i].getElementsByTagName("td")[2].innerHTML;
        if (currentPosition == id) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
    hideDetails(); //hide data in pop up container

}

//shows all the table entries when "All" is selected
function showAll(elem) {
    text = document.getElementById("filter");
    text.innerText = "All";
    table = document.getElementById("empDataTable");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = "";
    }
    hideDetails(); //hide data in pop up container, looks cleaner that way
}

//sort table by column headers in asc/desc order
function sortTableColumns(elem) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("empDataTable");
    var id = elem.id;
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/

    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.getElementsByTagName("tr");

        for (i = 1; i < (rows.length - 1); i++) {

            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[id];
            y = rows[i + 1].getElementsByTagName("td")[id];

            if (id == 3) { //convert salaries to a number instead of comparing as a string
                x = x.innerText;
                x = Number(x.replace(/[^0-9\.]+/g, ""));
                y = y.innerText;
                y = Number(y.replace(/[^0-9\.]+/g, ""));
                if (!(testSorted[id])) //if not yet sorted, sort least-greated order
                {
                    if (x < y) //compare numeric values of salary
                    {
                        shouldSwitch = true;
                        break;
                    }
                }
                if (testSorted[id]) {
                    if (x > y) //compare numeric values of salary
                    {
                        shouldSwitch = true;
                        break
                    }
                }
            } else {
                if (!(testSorted[id])) {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }

                if (testSorted[id]) {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
        }
        if (shouldSwitch) {

            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
    //lastly, set testSorted to opposite truth value
    testSorted[id] = !(testSorted[id]);
}



