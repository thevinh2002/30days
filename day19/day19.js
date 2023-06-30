var color = document.querySelector('.tool #color');
var eraser = document.querySelector('.tool #eraser');
var decrease = document.querySelector('.tool #decrease');
var sizeEL = document.querySelector('.tool #size');
var increase = document.querySelector('.tool #increase');
var save = document.querySelector('.tool #save');
var clear = document.querySelector('.tool #clear');
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
console.log(clear)


var isDrawing =false;
var colorPaint = '#000000';
var size = 5
var maxsize = 30
sizeEL.innerText = size




var Post ={
    x:0,
    y:0
}

var Post2 ={
    x:0,
    y:0
}

document.addEventListener('mousedown',function(e){
    
    Post ={
    x:e.offsetX,
    y:e.offsetY
    }
    isDrawing=true
    
})

document.addEventListener('mousemove',function(e){
   if(isDrawing){
    Post2 ={
        x:e.offsetX,
        y:e.offsetY
        }
        //ve net
        ctx.beginPath();
        ctx.arc(Post.x,Post.y, size, 0, 2 * Math.PI);
        ctx.fillStyle = colorPaint;
        ctx.fill();


        //ve outline
        ctx.beginPath();
        ctx.moveTo(Post.x, Post.y);
        ctx.lineTo(Post2.x,Post2.y);
        ctx.strokeStyle = colorPaint
        ctx.lineWidth=size*2
        ctx.stroke();




        Post.x = Post2.x
        Post.y = Post2.y
   }
})

document.addEventListener('mouseup',function(e){
    isDrawing=false
})

color.addEventListener('change',function(e){
    colorPaint = e.target.value
})

eraser.addEventListener('click',function(e){
    // size = maxsize
    colorPaint ='#ffffff'
})

decrease.addEventListener('click',function(e){
    size -= 5
    size = size >5 ? size : 5
    sizeEL.innerText = size
})
increase.addEventListener('click',function(e){
    size += 5
    size = size < maxsize  ? size : maxsize
    sizeEL.innerText = size

})

clear.addEventListener('click',function(e){
    ctx.clearRect(0,0,canvas.width,canvas.height)
})

save.addEventListener('click',function(e){
    var output = canvas.toDataURL('img/png')
    save.setAttribute('href',output)
})