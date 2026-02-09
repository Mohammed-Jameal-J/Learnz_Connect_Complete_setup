

let fruits=["apple","orange","grapes"]

fruits.push("berry")
fruits[0]="butter"

// fruits.forEach(function(item){
// document.getElementById('result').innerHTML +=`<h1>${item}</h1>`
// })

fruits.forEach((item)=>{
    document.getElementById('result').innerHTML +=`<h1>${item}</h1>`
})

