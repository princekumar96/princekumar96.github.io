var my_canvas = document.getElementById('abc');
var context = my_canvas.getContext("2d");

// FACE

context.fillStyle="yellow";
context.beginPath();
context.arc(95,95,40,0,2*Math.PI);
context.closePath();
context.fill();
context.lineWidth=2;
context.stroke();
context.fillStyle= "black";

//LEFT EYE

context.beginPath();
context.arc(75,75,5,0,2*Math.PI);
context.closePath();
context.fill();

// Right EYE

context.beginPath();
context.arc(114,75,5,0,2*Math.PI);
context.closePath();
context.fill();

// Mouth

context.beginPath();
context.arc(95,90,26,Math.PI,2*Math.PI,true);
context.closePath();
context.fill();

// Smile
context.font="30px Garamond";
context.fillText("Keep Smiling !!" ,15,175);

