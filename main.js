
var header = document.querySelector('.header');
var logo = document.querySelector('.logo');
var navbar = document.querySelector('.navbar');

window.onscroll = function () {
    var distanceScrolled = document.documentElement.scrollTop;
    if (distanceScrolled > 100) {
        header.style.background = "#fff";
        logo.innerHTML = `<span style="color: rgb(239, 119, 54); font-weight:500;"><i class="fas fa-cog"></i> COG.</span>`;
        navbar.innerHTML = ` <ul><li><a style="color: rgb(239, 119, 54); font-weight:500; " href="index.html">home</a></li>  
            <li><a style="color: rgb(239, 119, 54); font-weight:500;" href="#middle-h">services</a></li> 
            <li><a style="color: rgb(239, 119, 54); font-weight:500;" href="#team">team</a></li> 
            <li><a style="color: rgb(239, 119, 54); font-weight:500;" href="aboutUs.html">about</a></li>
            </ul>`;
        document.getElementById('bars').innerHTML = `<div id="bar123" class="fas fa-bars" onclick="menu_drop()" style="color:#ef7736;" ></div> `;
    }
    else {
        header.style.background = "none";
        logo.innerHTML = `<i class="fas fa-cog"></i> COG.`;
        navbar.innerHTML = ` <ul> <li><a href="index.html">home</a></li> <li><a href="#middle-h">services</a></li><li><a href="#team">team</a></li> <li><a href="aboutUs.html">about</a></li></ul>`
        document.getElementById('bars').innerHTML = ` <div id="bar123" onclick="menu_drop()" class="fas fa-bars"></div>`;
    }
}

function menu_drop(){
    document.getElementById('bar123').classList.toggle('fa-times');
    document.getElementById('naver').classList.toggle('nav-toggle');
}

