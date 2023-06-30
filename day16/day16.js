var home = document.getElementById('home')
var animation = document.querySelectorAll('.show-animation')
console.log(animation)


function toggleAnimationElementWindow(element) {
    var rect = element.getClientRects()[0]
    var hightscreen = window.innerHeight


        // check phan tu co ben trong man hinh k 
    if(!(rect.bottom < 0 || rect.top >hightscreen)){
        element.classList.add('start')
    }else{
        element.classList.remove('start')

    }
}

function checkAnimation(){
    animation.forEach(el=>{
        toggleAnimationElementWindow(el)
    })

}

window.onscroll = checkAnimation