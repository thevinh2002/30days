var ekey = document.querySelector('.card.key p:last-child');
var elocation = document.querySelector('.card.location p:last-child');
var ewhich = document.querySelector('.card.which p:last-child')
var ecode = document.querySelector('.card.code p:last-child')
var arlet = document.querySelector('.arlet')
var box = document.querySelector('.box')
var result = document.querySelector('.result')
console.log(elocation)

document.addEventListener('keydown', e =>{

    let keyname = e.keyCode === 32 ? 'Space' : e.key

	document.querySelector('.result').innerText = e.which



    ekey.innerText = keyname
    elocation.innerText = e.location
    ewhich.innerText = e.which
    ecode.innerText = e.code
    result.innerText=e.which
    arlet.classList.add('hide')
    box.classList.remove('hide')
})
