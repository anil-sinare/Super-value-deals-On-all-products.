const bar= document.querySelector("#bar");
const nav = document.querySelector(".navbar ul");
const cross = document.querySelector(".cross");
if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add('active');
    })

}
if(cross){
    cross.addEventListener("click",()=>{
        nav.classList.remove('active');
    })

}

//shop
let mainimg = document.querySelector("#mainimg");
let smallimg = document.querySelectorAll(".smallimgg");

smallimg[0].onclick = function (){
    mainimg.src = smallimg[0].src;  
}
smallimg[1].onclick = function(){
    mainimg.src = smallimg[1].src;  
}
smallimg[2].onclick = function (){
    mainimg.src = smallimg[2].src;  
}
smallimg[3].onclick = function(){
    mainimg.src = smallimg[3].src;  
}