let password = document.querySelector('.password');
let username = document.querySelector('.username');
let pass = '';
let user = '';
let submit = document.querySelector('.submit');

function passUpadate(obj){
    pass = obj.value;
}

function userUpadate(obj){
    user = obj.value;
}

function login(){
    if(pass == 'javad2545bagheri' && user == 'mjbagheri2545'){
        submit.href = './dashboard.html';
        password.value = '';
        username.value = '';
    }
}

