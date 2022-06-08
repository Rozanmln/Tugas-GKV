TESTER = document.getElementById('plot');

var day = [];
var aircraft = [];


var data = [{
x: [2, 3, 4, 5, 6, 7],
y: [10, 27, 27, 29, 29, 30] }];
var layout = {font: {size: 18}};
var config = {responsive: true};
Plotly.newPlot(TESTER, data, layout, config);

d3.csv("russia_losses_equipment.csv", function(data){
    data.map(function(d){
        day.push(d.day);
        aircraft.push(+d.aircraft);
    })
    console.log("Day", day)
    console.log("Aircraft",aircraft)    
});

TESTER2 = document.getElementById('bar');

var day_2 = [];
var tank = [];

var data = [{
    x: [2, 3, 4, 5, 6, 7],
    y: [80, 145, 150, 150, 198, 211],
    type: 'bar'
    }];
    var layout = {font: {size: 18}};
    var config = {responsive: true};
    Plotly.newPlot(TESTER2, data, layout, config);
