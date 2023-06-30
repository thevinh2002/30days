var process = document.querySelector('.process');
var range = document.querySelector('.range');
var value = document.querySelector('.process span');
var body = document.querySelector('body');
var text = document.querySelector('body h1');
console.log(text)


function updateRange(percent){
    process.style.width = `${percent}%`
    value.innerHTML = `${percent}%`
    body.style.backgroundColor = `rgba(0, 0, 0, ${percent / 100})`
    if(percent >= 90){
        text.style.color = `rgba(255, 255,255,${percent / 100})`
    }else if(percent <= 10){
        text.style.color = `#000`
    }
    else{
        text.style.color = `rgba(0, 0,0,${percent / 100})`
    }
   
}

range.addEventListener('mousemove', function(e){
    var processWidth = e.pageX - this.offsetLeft
    var percent =   Math.round( processWidth / this.offsetWidth *100)
    updateRange(percent)
})
updateRange(30)

var idrange = document.getElementById('range')

idrange.addEventListener('change', function(e){
    console.log(this.value)
})