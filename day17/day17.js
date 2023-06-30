var listcounter = document.querySelectorAll('.counter')




function counter(el){
        var numberEL = el.querySelector('.number')
        var to = parseInt(numberEL.innerText)
        var count = 0
        var time = 100
        var step = to/time
      let counting =  setInterval(() => {
           if(count < to){
            count += step
            numberEL.innerText =Math.round(count)
           }else{
            clearInterval(counting)
            numberEL.innerText = to
           }
        }, 1);
}

listcounter.forEach(element => {
    counter(element)
});