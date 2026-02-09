// function handleClick() {
//   document.getElementById("para1").innerHTML = "para 1 is p tag";
// }

let handleClick=()=>{
     document.getElementById("para1").innerHTML = "para 1 is p tag";
}

let btn = document.getElementById('changeButton')

btn.addEventListener("click",function(){
    handleClick()
})

btn.addEventListener("mouseover",function(){
    console.log("Button Clicked"); 
})