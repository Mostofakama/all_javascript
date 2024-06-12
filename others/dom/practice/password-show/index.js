
document.querySelector("#show").addEventListener("click",function(){
    var passwordId = document.querySelector("#password")
    var btnClick = document.querySelector("#show")
    console.log(btnClick)
    if(passwordId.type === "password"){
            passwordId.type = "text"
            btnClick.innerHTML = "Hide"
    }else{
                passwordId.type = "password"
                btnClick.innerHTML = "Show"
    }
})
   




var click = document.querySelector("#clickShow")
var  lol= document.querySelector(".lol")
console.log(click);
click.addEventListener("click",function(){
    setTimeout(function(){
        document.querySelector(".lol").style.display  = "flex"
    },300)
    
})