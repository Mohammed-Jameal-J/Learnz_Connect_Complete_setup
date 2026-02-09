let emails=["h@gmail.com","m@gmail.com","s@gmail.com"]

document.getElementById('checkBtn').addEventListener('click',()=>{
    let currentEmail = document.getElementById('input').value

    let email = emails.find((item)=>{
        return currentEmail === item
    })

    if (email === undefined) {
        document.getElementById('result').innerHTML="email is not found"
    }else{
        document.getElementById('result').innerHTML="email isfound"
    }
})