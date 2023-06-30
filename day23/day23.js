var imglist = document.querySelectorAll('.zoomer img')
var result = document.querySelector('.result')
var scope = 4
var curent = 0 

imglist.forEach( function(img) {
    img.addEventListener('mousemove',function(e) {
        result.classList.remove('hide')
        let x = (e.offsetX / this.offsetWidth) * 100
        let y = (e.offsetY / this.offsetHeight) * 100
        result.style.top = `${e.clientY}px`
        result.style.left = `${e.clientX}px`
    
    
        result.style.backgroundSize=`1000px 1000px`
    
        result.style.backgroundPosition=`${x}% ${y}%`

        var source = e.target.getAttribute('src')
        result.style.backgroundImage = `url(${source})`
    })

    img.addEventListener('mouseleave',function(e) {
        result.classList.add('hide')
    })
});





