const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const button = document.querySelector('.button');
const container = document.querySelector('.container');
const like = document.querySelector('.fi');
var value = 1;

button.innerHTML = "&#8594;";

button.addEventListener('click', function () {
    value += 1;
    if (value == 4) {
        value = 1;
        button.innerHTML = "&#8594;";
        c1.className = "card active";
        c2.className = "card";
        c3.className = "card";


    } else if (value == 2) {
        c2.className = "card active";
        c1.className = "card";
        c3.className = "card";
        button.innerHTML = "&#8594;";
    } else if (value == 3) {
        c3.className = "card active";
        c1.className = "card";
        c2.className = "card";
        button.innerHTML = '&#8634;';
    }
});

like.addEventListener('click', function(){
    if(like.value == "off"){
        like.style.background = "rgba(255, 0, 0, 0.7)";   
        like.value = "on";
    }else{
        like.style.background = "transparent";
        like.value = "off";
    }
});
