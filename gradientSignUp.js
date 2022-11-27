const first = document.querySelector('#firstname');
const last = document.querySelector('#lastname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const form = document.querySelector('#form');

form.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    firstName= first.value;
    lastName= last.value
    emailAdd= email.value;
    pass= password.value;
    pass2= password2.value;
    // console.log(firstName,lastName,emailAdd,pass,pass2)
    inputCheck()
}
function inputCheck(){
    if(firstName===''){
        setError(first)
    }else{
        setSuccess(first)
    }
    if(lastName===''){
        setError(last)
    }else{
        setSuccess(last)
    }
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
    if(pass2===''){
        setError(password2)
    }else{
        setSuccess(password2)
    }
    if(pass!=pass2||pass===''||pass2===''){
        setError(password)
        setError(password2)
    }else{
        setSuccess(password)
        setSuccess(password2)
    }
}
function setError(input){
    const ind = input.parentElement;
    ind.className= 'gap error'
}
function setSuccess(input){
    const ind = input.parentElement;
    ind.className= 'gap success'
}