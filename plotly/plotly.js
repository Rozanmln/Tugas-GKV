TESTER = document.getElementById('plot');

var day = [1,2,3];
var aircraft = [10,20,30];

Plotly.d3.csv("russia_losses_equipment.csv", function(data){
    data.map(function(d){
        day.push(parseInt(d.day));
        aircraft.push(parseInt(+d.aircraft));
    })
    console.log("Day", day)
    console.log("Aircraft",aircraft)    
});

var data = [{
x: day,
y: aircraft }];
var layout = {font: {size: 18}};
var config = {responsive: true};
Plotly.newPlot(TESTER, data, layout, config);



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
