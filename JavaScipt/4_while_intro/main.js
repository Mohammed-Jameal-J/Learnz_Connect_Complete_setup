let ground= document.getElementById('btn')

ground.addEventListener('click',function(){
    let total = parseInt(document.getElementById('rounded').value) 
            document.getElementById('result').innerHTML = ""
    let currentlap=1

    while(currentlap <=total){
        document.getElementById('result').innerHTML += (`lap ${currentlap} is completed`);
        currentlap++  
    }
    console.log("completed");
    
})