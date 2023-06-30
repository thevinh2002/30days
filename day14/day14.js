var img = document.querySelector('.img-feature')
var btnprev = document.querySelector('.prev')
var btnnext = document.querySelector('.next')
var listimg = document.querySelectorAll('.listimgs img')



console.log(parent)



var currentIndex = 0

function updateimg(index){
    //remove active
    let parent = document.querySelectorAll('.listimgs div')
    parent.forEach( item=>{
        item.classList.remove('active')

    })

    currentIndex = index
    img.src = listimg[index].getAttribute('src')
    listimg[index].parentElement.classList.add('active')
}

listimg.forEach((imgElement,index) => {
    imgElement.addEventListener('click', (e) =>{
        img.style.opacity = '0'
       setTimeout(() =>{
       updateimg(index)
        img.style.opacity = '1'
       },400)
    })
})

btnprev.addEventListener('click', (e) =>{
    if(currentIndex ==0){
        currentIndex = listimg.length - 1
    }else{
        currentIndex--
    }

    updateimg(currentIndex)
    img.style.animation = ''
    setTimeout(() =>{
    img.style.animation = 'showleft 1.5s ease forwards'
    })
})

btnnext.addEventListener('click', (e) =>{
    if(currentIndex == listimg.length - 1){
        currentIndex = 0
    }else{
        currentIndex++
    }
    updateimg(currentIndex)
    img.style.animation = ''
    setTimeout(() =>{
    img.style.animation = 'showright 1.5s ease forwards'
    })
})