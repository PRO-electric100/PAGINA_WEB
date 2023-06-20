let list = document.querySelectorAll(".navigation li");

function activeLink(){
    list.forEach((item)=> {
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach(item => item.addEventListener("mouseover",activeLink));

//menu

let toogle = document.querySelector(".toogle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toogle.onclick = function (){
    navigation.classList.toggle("active");
  main.classList.toggle("active");
}