let fruits=["apple","orange","banana"]

let filterFruits = fruits.filter((item)=>{
    return item.includes("a")
})

filterFruits.forEach((flu)=>{
    document.getElementById('result').innerHTML += `<h1>${flu} is included </h1>`
})
