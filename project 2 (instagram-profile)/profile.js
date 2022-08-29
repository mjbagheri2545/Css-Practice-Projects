let postSpans = document.querySelectorAll('.posts .head span');
let searchInput = document.querySelector('header nav .search input');
let closeMark = document.querySelector('.fa-circle-xmark');
let searchIcon = document.querySelector('.fa-magnifying-glass');
let profileImg = document.querySelector('.profile-img');
let userDetailsHead = document.querySelector('.user-details .head');
let userDetailsUp = document.querySelector('.user-details .up');
let details = document.querySelector('.user-details .details');
let followers = document.querySelector('.followers');
let posts = document.querySelector('.posts');
let highlightHeader = document.querySelectorAll('.user-details .down a h4');
let allowRunSetInterval = true;

function activatePostSpan(obj){
    postSpans.forEach((span)=>{
        span.classList.remove('active');
    })
    obj.classList.add('active');
}

function inputValueManager(obj){
    if(obj.value){
        closeMark.classList.add('active');
        searchIcon.classList.add('active');
        searchInput.classList.add('active');
    }else{
        closeMark.classList.remove('active');
        searchIcon.classList.remove('active');
        searchInput.classList.remove('active');
    }
}

function inputValueRemover(){
    searchInput.value = '';
    inputValueManager(searchInput);
}

function angleDownActiveToggle(obj){
    obj.classList.toggle('active');
    if(obj.classList.contains('active')){
        document.querySelector('header nav .left .menu').style.display = 'flex';
    }else{
        document.querySelector('header nav .left .menu').style.display = 'none';
    }
}

function highlightHeaderlengthManager(){
    highlightHeader.forEach((header)=>{
        if(header.innerText.length >= 8){
            header.innerText = header.innerText.slice(0,7) + ' ...'
        }
    })
}

setInterval(()=>{
    if(window.innerWidth <= 735 && allowRunSetInterval == true){
        userDetailsHead.prepend(profileImg);
        posts.prepend(followers);
        let hr = document.createElement('hr');
        posts.insertBefore(hr,posts.children[1]);
        allowRunSetInterval = false;
    }else if(window.innerWidth > 735 && allowRunSetInterval == false){
        document.querySelector('.main-container').classList.remove('active')
        userDetailsUp.prepend(profileImg);
        details.insertBefore(followers,details.children[1]);
        posts.children[0].remove();
        allowRunSetInterval = true;
    }
});

highlightHeaderlengthManager();