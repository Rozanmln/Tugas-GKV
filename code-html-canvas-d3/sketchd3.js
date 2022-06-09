const canvas = document.getElementById("canvas--sketch");
const context = canvas.getContext("2d");

const width = 1100;
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

context.fillText(10, 80, 830);
context.fillText(20, 80, 740);
context.fillText(30, 80, 640);
context.fillText(40, 80, 540);
context.fillText(50, 80, 440);
context.fillText(60, 80, 340);
context.fillText(70, 80, 240);
context.fillText(80, 80, 140);
context.fillText(90, 80, 40);

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
    context.rect(centerXNew + 70, centerYNew + 80, widthBar, -height);
    context.fill();

    context.beginPath();
    context.moveTo(130, height);
    context.lineTo(130, 0);
    context.stroke();

    context.beginPath();
    context.moveTo(130, 100);
    context.lineTo(width, 100);
    context.stroke();
  }
  context.restore();

  context.fillStyle = "white";
  context.beginPath();
  context.rect(0, 901, width, 100);
  context.fill();

  context.fillStyle = "black";
  context.fillText("2", 200, height - 60);
  context.fillText("3", 265, height - 60);
  context.fillText("4", 320, height - 60);
  context.fillText("5", 380, height - 60);
  context.fillText("6", 440, height - 60);
  context.fillText("7", 500, height - 60);
  context.fillText("8", 562, height - 60);
  context.fillText("9", 623, height - 60);
  context.fillText("10", 672, height - 60);
  context.fillText("11", 735, height - 60);
  context.fillText("12", 792, height - 60);
  context.fillText("13", 855, height - 60);
  context.fillText("14", 912, height - 60);
  context.fillText("15", 972, height - 60);

  context.fillText("Day", 510, height - 25);

  context.rotate((-90 * Math.PI) / 180);
  context.fillText("Helicopter Losses", -600, 46);
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

context_2.fillText(10, 80, 830);
context_2.fillText(20, 80, 740);
context_2.fillText(30, 80, 640);
context_2.fillText(40, 80, 540);
context_2.fillText(50, 80, 440);
context_2.fillText(60, 80, 340);
context_2.fillText(70, 80, 240);
context_2.fillText(80, 80, 140);
context_2.fillText(90, 80, 40);

d3.csv("data/russia_losses_equipment.csv", function (data) {
  data.map(function (d) {
    dataDay_2.push(d.day);
    dataLossesAircraft.push(+d.aircraft);
  });
  console.log("Day", dataDay_2);
  console.log("Aircraft", dataLossesAircraft);

  context_2.save();
  context_2.translate(0, height);
  context_2.scale(1, -1);

  for (var i = 0; i < 14; i++) {
    var centerXNew = dataDay_2[i] * 60;

    var centerYNew = dataLossesAircraft[i] * 10;

    context_2.fillStyle = "blue";

    context_2.beginPath();
    context_2.rect(centerXNew + 70, centerYNew + 80, widthBar, -height);
    context_2.fill();

    context_2.beginPath();
    context_2.moveTo(130, height);
    context_2.lineTo(130, 0);
    context_2.stroke();

    context_2.beginPath();
    context_2.moveTo(130, 100);
    context_2.lineTo(width, 100);
    context_2.stroke();
  }
  context_2.restore();

  context_2.fillStyle = "white";
  context_2.beginPath();
  context_2.rect(0, 901, width, 100);
  context_2.fill();

  context_2.fillStyle = "black";
  context_2.fillText("2", 200, height - 60);
  context_2.fillText("3", 265, height - 60);
  context_2.fillText("4", 320, height - 60);
  context_2.fillText("5", 380, height - 60);
  context_2.fillText("6", 440, height - 60);
  context_2.fillText("7", 500, height - 60);
  context_2.fillText("8", 562, height - 60);
  context_2.fillText("9", 623, height - 60);
  context_2.fillText("10", 672, height - 60);
  context_2.fillText("11", 735, height - 60);
  context_2.fillText("12", 792, height - 60);
  context_2.fillText("13", 855, height - 60);
  context_2.fillText("14", 912, height - 60);
  context_2.fillText("15", 972, height - 60);

  context_2.fillText("Day", 510, height - 25);

  context_2.rotate((-90 * Math.PI) / 180);
  context_2.fillText("Aircraft Losses", -600, 46);
});
