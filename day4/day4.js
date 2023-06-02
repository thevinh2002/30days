var open = document.querySelectorAll(".image img")
var close = document.querySelector(".close")
var gallary = document.querySelector(".gallary")
var gallaryImg = document.querySelector(".gallary__inner img")
var prev= document.querySelector(".control-prev")
var next= document.querySelector(".control-next")


var currenIndex = 0

function showgallary() {
    if(currenIndex==0){
        prev.classList.add("hide")
    }else{
        prev.classList.remove("hide")
    }

    if(currenIndex == open.length-1){
        next.classList.add("hide")
    }else{
        next.classList.remove("hide")
    }

    gallaryImg.src = open[currenIndex].src
    gallary.classList.add("show")
}

open.forEach((item,index)=>{
    item.addEventListener("click",function(){
        currenIndex = index
        showgallary()
    })
})
// --close--
close.addEventListener("click", function(){
    gallary.classList.remove('show')
})
document.addEventListener("keydown", function(e){
    if(e.keyCode == 27){
    gallary.classList.remove('show')
    }
})
// control
prev.addEventListener("click", function(){
    if(currenIndex > 0){
        currenIndex --
        showgallary()
    }
})
next.addEventListener("click", function(){
    if(currenIndex < open.length){
        currenIndex ++
        showgallary()
    }
})