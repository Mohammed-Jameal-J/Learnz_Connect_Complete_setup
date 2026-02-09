let joinButton= document.getElementById('joinbtn')

joinButton.addEventListener('click',function(){
    let firstName = document.getElementById('firstname').value
    let lastName = document.getElementById('lastname').value

    if(firstName==="" || lastName===""){
        document.getElementById('result').innerHTML ="Invalid"
    }else{
        document.getElementById('result').innerHTML = `${firstName} ${lastName}`
    } 
})


