// Create an array of each country's numbers
var us = Object.values(data.us);
var uk = Object.values(data.uk);
var canada = Object.values(data.canada);
// console.log(us)
// Create an array of music provider labels
// console.log(Object.entries(data.us))

var labels = Object.keys(data.us)

// Display the default plot US
function init() {
  var data = [{
     values: us,
     labels: labels,
    type: 'pie' }];
   Plotly.newPlot("pie", data);
 }

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);


// Function called by DOM changes
function getData() {
  // Assign the value of the dropdown menu option to a variable
  var dropdownMenu = d3.select("#selDataset");
  var dataset = dropdownMenu.property("value");

  // Initialize an empty array for the country's data
  var data = []

  if (dataset === 'dataset1') {
    data = us;
  }

  else if (dataset === 'dataset2') {
    data = uk;
  }

  else if (dataset === 'dataset3') {
    data = canada;
  }

  // updatePlotly(data)
  Plotly.restyle("pie","values", [data])


// Update the restyled plot's values
function updatePlotly(newdata){
  Plotly.restyle("pie","values", [newdata])
}

}
init()