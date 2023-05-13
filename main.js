var mouseevent="empty";
var lastx;
var lasty;
canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
var color="black";
var width=3;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseevent="mousedown";
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseevent="mouseleave";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseevent="mouseup";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;

    if(mouseevent=="mousedown"){
        
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(currentx,currenty,radius,0,2*Math.PI);
        
        ctx.stroke();
    }
    lastx=currentx;
    lasty=currenty;
}
function clearcanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}