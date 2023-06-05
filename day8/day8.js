var username = document.querySelector('#user')
var email = document.querySelector('#email')
var password = document.querySelector('#pass')
var confirmpass = document.querySelector('#confirm')
var form = document.querySelector('form')


function showError(input,message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.add('error')
    small.innerText =message
}

function showSucces(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('error')
    small.innerText =''
}

showError(username,'lỗi')
showSucces(username)


function checkEmptyError(listinput){
    let isEmptyError = false
    listinput.forEach(input => {
        input.value = input.value.trim();
        if(!input.value){
            showError(input,`is required`)
        }
        else {
            showSucces(input)
        }
    });
    
    return isEmptyError
}

function checkEmail(input){
        const regexEmail =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
        let isEmailError = !regexEmail.test(input.value)

        input.value = input.value.trim()
        if(regexEmail.test(input.value)){
            showSucces(input)
        }else{
            showError(input,'email is valid')
        }
        return isEmailError
}

function CheckLengthError(input,min,max){
    input.value = input.value.trim()
    
    if(input.value.length < min){
        showError(input,`length must be at least ${min} characters`)
        return true
    }
    if(input.value.length > max){
        showError(input,`length less than ${max} characters`)
        return true
    }
    showSucces(input)
    return false
}

function checkConfirmPass(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,'Passwords do not match')
    }
}


form.addEventListener('submit', e => {
    e.preventDefault();
    let isEmptyError = checkEmptyError([username,email,password,confirmpass])
    let isUsernameError = CheckLengthError(username,4,15)
    let isUserpasswordError = CheckLengthError(password,4,15)
    let isEmailError = checkEmail(email)
    let ischeckConfirmPass = checkConfirmPass(password,confirmpass)
})
