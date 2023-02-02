const burg = document.querySelector(".burger_bt");
const nav = document.querySelector(".burger ul")
burg.addEventListener("click",function(){ 
    if(nav.style.height == "150px"){
        nav.style.height="0px"; 
    }
    else{
        nav.style.height="150px"; 
    }
})