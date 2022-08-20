canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = [];

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 2;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.arc(200, 225, 40, 0, 2 * Math.PI);
ctx.stroke();
color++;

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 2;
ctx.arc(240, 250, 40, 0, 2 * Math.PI);
ctx.stroke();
color++;

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.arc(280, 225, 40, 0, 2 * Math.PI);
ctx.stroke();
color++;

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 2;
ctx.arc(320, 250, 40, 0, 2 * Math.PI);
ctx.stroke();
color++;

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.arc(360, 225, 40, 0, 2 * Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", mouseDown);

function mouseDown(e) {
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    console.log("X é igual a " + mouseX + ",e Y é igual a " + mouseY);
    circle(mouseX, mouseY);
}

function circle(mouseX, mouseY) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouseX, mouseY, 40, 0, 2 * Math.PI);
    ctx.stroke();
}
