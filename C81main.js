canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
color="red";

ctx.beginPath();
//beginPath resets the current path for drawing anything,it tells the canvas to start drawing the shapes or objects.//
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,400, 45,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    circle(mouse_x,mouse_y);

}
function  circle(mouse_x,mouse_y) {
    ctx.beginPath();
//beginPath resets the current path for drawing anything,it tells the canvas to start drawing the shapes or objects.//
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y, 45,0,2*Math.PI);
ctx.stroke();

}

function clear_area() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}