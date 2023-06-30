var boxs = document.querySelectorAll('.box')
var targetList = document.querySelectorAll('.target')

var current = 0

targetList.forEach(target =>{
    target.addEventListener('dragstart', function(e){
        this.classList.add('start')
        currenttarget = this
    })
    
    target.addEventListener('dragend', function(e){
        this.classList.remove('start')
    })
    
})

//dragover
    boxs.forEach(el => {
       el.addEventListener('dragover',function(e){
            e.preventDefault();
            this.appendChild(currenttarget)
       }) 
       el.addEventListener('drop',function(e){
        this.appendChild(currenttarget)
   }) 
    })

//drop