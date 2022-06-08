const canvas = document.getElementById("canvas--sketch");
const context = canvas.getContext("2d");

const width = 1000;
const height = 1000;
const widthBar = 40;

var dataLossesHelicopter = [];
var dataDay = [];

context.fillStyle = "white";
context.beginPath();
context.rect(0, 0, width, height);
context.fill();

context.fillStyle = "black";

context.font = "30px poppins";

context.fillText(10, 20, 860);
context.fillText(20, 20, 770);
context.fillText(30, 20, 670);
context.fillText(40, 20, 570);
context.fillText(50, 20, 470);
context.fillText(60, 20, 370);
context.fillText(70, 20, 270);
context.fillText(80, 20, 170);
context.fillText(90, 20, 70);

d3.csv("data/russia_losses_equipment.csv", function (data) {
  //   console.log(data);
  data.map(function (d) {
    dataLossesHelicopter.push(d.helicopter);
    dataDay.push(d.day);
  });


  context.save();
  context.translate(0, height);
  context.scale(1, -1);

  for (var i = 0; i < 14; i++) {
    var centerXNew = dataDay[i] * 60;

    var centerYNew = dataLossesHelicopter[i] * 10;

    context.fillStyle = "blue";

    context.beginPath();
    context.rect(centerXNew, centerYNew + 50, widthBar, -height);
    context.fill();

    context.beginPath();
    context.moveTo(70, height);
    context.lineTo(70, 0);
    context.stroke();

    context.beginPath();
    context.moveTo(70, 50);
    context.lineTo(width, 50);
    context.stroke();
  }
  context.restore();

  context.fillStyle = "white";
  context.beginPath();
  context.rect(0, 951, width, 50);
  context.fill();

  context.fillStyle = "black";
  context.fillText("2", 130, height - 10);
  context.fillText("3", 195, height - 10);
  context.fillText("4", 250, height - 10);
  context.fillText("5", 310, height - 10);
  context.fillText("6", 370, height - 10);
  context.fillText("7", 430, height - 10);
  context.fillText("8", 492, height - 10);
  context.fillText("9", 553, height - 10);
  context.fillText("10", 602, height - 10);
  context.fillText("11", 665, height - 10);
  context.fillText("12", 722, height - 10);
  context.fillText("13", 785, height - 10);
  context.fillText("14", 842, height - 10);
  context.fillText("15", 902, height - 10);
});

//======================================= chart 2

const canvas2 = document.getElementById("chart2");
const context_2 = canvas2.getContext("2d");

var dataLossesAircraft = [];
var dataDay_2 = [];

context_2.fillStyle = "white";
context_2.beginPath();
context_2.rect(0, 0, width, height);
context_2.fill();

context_2.fillStyle = "black";

context_2.font = "30px poppins";

context_2.fillText(10, 20, 860);
context_2.fillText(20, 20, 770);
context_2.fillText(30, 20, 670);
context_2.fillText(40, 20, 570);
context_2.fillText(50, 20, 470);
context_2.fillText(60, 20, 370);
context_2.fillText(70, 20, 270);
context_2.fillText(80, 20, 170);
context_2.fillText(90, 20, 70);

d3.csv("data/russia_losses_equipment.csv", function(data){
    data.map(function(d){
        dataDay_2.push(d.day);
        dataLossesAircraft.push(+d.aircraft);
    })
    console.log("Day", dataDay_2)
    console.log("Aircraft",dataLossesAircraft)

    context_2.save();
    context_2.translate(0, height);
    context_2.scale(1, -1);

    for (var i = 0; i < 14; i++) {
        var centerXNew = dataDay_2[i] * 60;
    
        var centerYNew = dataLossesAircraft[i] * 10;
    
        context_2.fillStyle = "blue";
    
        context_2.beginPath();
        context_2.rect(centerXNew, centerYNew + 50, widthBar, -height);
        context_2.fill();
    
        context_2.beginPath();
        context_2.moveTo(70, height);
        context_2.lineTo(70, 0);
        context_2.stroke();
    
        context_2.beginPath();
        context_2.moveTo(70, 50);
        context_2.lineTo(width, 50);
        context_2.stroke();
      }
      context_2.restore();
    
      context_2.fillStyle = "white";
      context_2.beginPath();
      context_2.rect(0, 951, width, 50);
      context_2.fill();
    
      context_2.fillStyle = "black";
      context_2.fillText("2", 130, height - 10);
      context_2.fillText("3", 195, height - 10);
      context_2.fillText("4", 250, height - 10);
      context_2.fillText("5", 310, height - 10);
      context_2.fillText("6", 370, height - 10);
      context_2.fillText("7", 430, height - 10);
      context_2.fillText("8", 492, height - 10);
      context_2.fillText("9", 553, height - 10);
      context_2.fillText("10", 602, height - 10);
      context_2.fillText("11", 665, height - 10);
      context_2.fillText("12", 722, height - 10);
      context_2.fillText("13", 785, height - 10);
      context_2.fillText("14", 842, height - 10);
      context_2.fillText("15", 902, height - 10);

});
