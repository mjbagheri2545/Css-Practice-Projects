// sidebarmenu
let angle = document.querySelector('.fa-angle-down');
let additionalsDetails = document.querySelector('.additionals-details');
let sidebarMenuLinks = document.querySelectorAll('.sidebar-menu a');
let sidebarMenuLinksSpan = document.querySelectorAll('.sidebar-menu a span');
let sidebarMenuLists = document.querySelectorAll('.sidebar-menu ul li');

function toggleAngle(){
    if(angle.classList.contains('fa-angle-down')){
        angle.classList.replace('fa-angle-down','fa-angle-up');
        additionalsDetails.style.display = 'block';
    }else{
        angle.classList.replace('fa-angle-up','fa-angle-down');
        additionalsDetails.style.display = 'none';
    }
}

function toggleLink(el){
    sidebarMenuLinks.forEach((link)=>{
        link.classList.remove('active');
        link.parentNode.classList.remove('active');
    })
    el.classList.add('active');
    el.parentNode.classList.add('active');
}

function toggleMenu(el){
    el.classList.toggle('active');
    document.querySelector('.dashboard-page').classList.toggle('active');
    document.querySelector('.dashboard-page').classList.toggle('openMenu');
    if(el.classList.contains('active')){
        displayNone(document.querySelector('.user-profile .left'));
        sidebarMenuLinksSpan.forEach((span)=>{
            displayNone(span);
        })
        sidebarMenuLists.forEach((list)=>{
            manageJustifyContent(list,'center');
        })
        sidebarMenuLinks.forEach((link)=>{
            manageJustifyContent(link,'center');
            managePadding(link,0);
        })
        manageJustifyContent(document.querySelector('.user-profile'),'center');
        if(angle.classList.contains('fa-angle-up')){
            toggleAngle();
        }
    }else{
        displayBlock(document.querySelector('.user-profile .left'));
        sidebarMenuLinksSpan.forEach((span)=>{
            displayBlock(span);
        })
        sidebarMenuLists.forEach((list)=>{
            manageJustifyContent(list,'flex-start')
        })
        sidebarMenuLinks.forEach((link)=>{
            manageJustifyContent(link,'flex-start')
            managePadding(link,40);
        })
        manageJustifyContent(document.querySelector('.user-profile'),'space-between');
    }
}

function displayNone(el){
    el.style.display = 'none';
}
function displayBlock(el){
    el.style.display = 'block';
}

function manageJustifyContent(el,name){
    el.style.justifyContent = name;
}
function managePadding(el,number){
    el.style.paddingRight = `${number}px`;
}

window.addEventListener('resize',()=>{
    window.location.reload();
})


let ctx = document.getElementById("myChart").getContext("2d");
    let myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
          labels: ["هندزفری", "هدفون", "کیف هندزفری", "محافظ", "شارژر "],
          datasets: [
            {
              label: "Earnings",
              data: [10, 12, 8, 18, 6],
              backgroundColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
            responsive : true,
        },
});