var btnOpen = document.querySelector(".btn__open");
var modal = document.querySelector(".modal");
var iconClose = document.querySelector(".modal__close");
var btnClose = document.querySelector(".modal__footer button");


function toggleModal(e) {
    modal.classList.toggle('hide');
}

btnOpen.addEventListener("click",toggleModal)
iconClose.addEventListener("click",toggleModal)
btnClose.addEventListener("click",toggleModal)
modal.addEventListener("click",function(e){
    if(e.target == e.currentTarget){
        toggleModal()
    }
})