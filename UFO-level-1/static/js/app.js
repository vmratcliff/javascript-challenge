// from data.js
var tabledata = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop Through `data` and console.log each ufo report object
tabledata.forEach(function(ufoSightings) {
    console.log(ufoSightings);
    var trow = tbody.append("tr"); //this is how you add table rows, we create a variable so we can call it again
        trow.append("td").text(ufoSightings.datetime); //this will append a single td tag within each row
        trow.append("td").text(ufoSightings.city);
        trow.append("td").text(ufoSightings.state);
        trow.append("td").text(ufoSightings.country); 
        trow.append("td").text(ufoSightings.shape); 
        trow.append("td").text(ufoSightings.durationMinutes);
        trow.append("td").text(ufoSightings.comments);  
      });


  // Select the button
var button = d3.select("#filter-btn");

// Select the form
// var form = d3.select("#form");

// Create event handlers 
// button.on("click", runEnter);
// form.on("submit",runEnter);

// Complete the event handler function for the form
button.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault()
    tbody.html("")
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime")
    console.log(inputElement)
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tabledata);

    // Use the form input to filter the data by ufo sighting date
    var filterSightings = tabledata.filter(sighting => sighting.datetime === inputValue);

    console.log(filterSightings);

    filterSightings.forEach(function(selections) {

        console.log(selections);
        

        // Append one table row `tr` for each UFO Sighting object
        var trow = tbody.append("tr");
        // Use `Object.entries` to console.log each UFO Sighting value
        Object.entries(selections).forEach(function([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each value
            var cell = trow.append("td");
            cell.text(value);
        });
    });
})