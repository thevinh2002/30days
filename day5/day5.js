var btnSearch = document.querySelector('.search__btn')


btnSearch.addEventListener('click', function(){
    this.parentElement.classList.toggle('open')
    this.previousElementSibling.focus()
    
})


