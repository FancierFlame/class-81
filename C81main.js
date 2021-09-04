var canvas=document.getElementById("canvas_html");
var ctx = canvas.getContext("2d");

var color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200 , 200 , 40 ,20 , 180);
ctx.stroke();

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e){
    color = document.getElementById("input_color").value;
    var mousex = e.clientX - canvas.offsetLeft;
    var mousey = e.clientY - canvas.offsetTop;

    circle(mousex , mousey);
}

function circle(mousex , mousey){
    ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mousex , mousey , 40 , 0 , 2*Math.PI);
ctx.stroke();
}

function clear_area(){
    ctx.clearRect(0 , 0 , canvas.width , canvas.height);
}




