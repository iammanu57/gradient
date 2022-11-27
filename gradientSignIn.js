const email = document.querySelector('#email')
const password = document.querySelector('#password')
const form = document.querySelector('#form')

form.addEventListener('submit',signIn)

function signIn(e){
    e.preventDefault()

    emailAdd= email.value
    pass=password.value

    console.log(emailAdd,pass)

    if(emailAdd===''){
        setError(email)
    }else{
        setSuccess(email)
    }
    if(pass===''){
        setError(password)
    }else{
        setSuccess(password)
    }
}

function setError(input){
    const ind= input.parentElement
    ind.className = 'gap error'
}
function setSuccess(input){
    const ind= input.parentElement
    ind.className = 'gap success'
}