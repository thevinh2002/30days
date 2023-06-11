var btnsc= document.querySelector('.control .success');
var btnwarning= document.querySelector('.control .warning');
var btnerror= document.querySelector('.control .error');

btnsc.addEventListener('click', function(){
    createToasts('success');

})

btnwarning.addEventListener('click', function(){
    createToasts('warning');

})

btnerror.addEventListener('click', function(){
    createToasts('error');

})




function createToasts(status){
    let temp = `<i class='bx bxs-check-circle'></i>
    <span class="message">This is the success message</span>
    <span class="time"></span>`

    switch(status){
        case 'success': 
         temp = `<i class='bx bxs-check-circle'></i>
                    <span class="message">This is the success message</span>
                    <span class="time"></span>`
        break;
        case 'warning':
             temp =`
                    <i class='bx bxs-message-alt-error'></i>
                    <span class="message">This is the warning message</span>
                    <span class="time"></span>
            `
            break;
        case 'error':
           temp =`
                    <i class='bx bxs-message-alt-x' ></i>
                    <span class="message">This is the error message</span>
                    <span class="time"></span>
            `
            break;
    }

    var toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(status)
    toast.innerHTML=temp
    var toastlist = document.getElementById('toasts')
    toastlist.appendChild(toast)
    
    setTimeout (function (){
        toast.style.animation = 'slidehide 2s ease forwards'
    },4000)
    setTimeout (function (){
        toast.remove()
    },6000)
}