TESTER = document.getElementById('plot');

var day = [2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12 , 13, 14, 15];
var Field_Artillery = [49,49,50,74,77,85,90,105,105,109,117,120,120,123];

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
y: Field_Artillery }];
var layout = {font: {size: 18}};
var config = {responsive: true};
Plotly.newPlot(TESTER, data, layout, config);



TESTER2 = document.getElementById('bar');

var day_2 = [];
var tank = [];

var data = [{
    x: [2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12 , 13, 14, 15],
    y: [80, 145, 150, 150, 198, 211, 217, 251, 269, 285, 290, 303, 317, 335],
    type: 'bar'
    }];
    var layout = {font: {size: 18}};
    var config = {responsive: true};
    Plotly.newPlot(TESTER2, data, layout, config);
