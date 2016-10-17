// Hints: 
// Use loops, map, or foreach statements whenever necessary.
//
// To do a standard for loop as you would in java use the syntax
// for (var i = 0; i < number; i++) {}
//
// Elements must be added to the DOM before you can do things like
// set CSS styles of assign events to them.
$(document).ready(function() {
    // These set some default values for
    // the height and width of the grid, available colors to draw with,
    // and the default selected color
    var gridHeight = 5;
    var gridWidth = 5;
    var colors = ["red", "blue", "green", "black", "white"];
    var selectedColor = "red";

    // Select the table which will hold out board by its id
    var grid = $("#board");

    // Make n table rows where n is the height of the grid
    for (var i = 0; i < gridHeight; i++) {
        var row = $("<tr>");
        //Append each row to the grid
        grid.append(row);

        // In each table row, make m table data elements, where
        // m is the width of the grid
        for (var j = 0; j < gridWidth; j++) {
            var cell = $("<td>");
            // Append each table data element to the current row
            row.append(cell);
            
            // Once the table data element has been appended to the row,
            // assign a click event that will change this element's
            // background color to the value of selectedColor
            cell.on("click", function() {
                $(this).css("background-color", selectedColor);
            })
        }
    }

    // Select the table which will hold our color palette by
    // its id
    var palette = $("#palette");

    // For each color in colors, make a table row with one table data
    // element in it. Set the table data's background color to its
    // corresponding color. The table data elements should have a
    // class of colorSwatch
    colors.forEach(function(c) {
        var row = $("<tr>");

        var cell = $('<td class="colorSwatch">');
        row.append(cell);
        palette.append(row);
        cell.css("background-color", c);

        // Assign a click event to the table data element so that when it is
        // clicked, selectedColor will be set to that element's corresponding
        // color.
        cell.on("click", function() {
            selectedColor = c;
        });
    })
});

// Bonus: Play around with the grid size and available colors to see if you can
//        make your website a little more fun
