let numbers=[1,2,3,4,5,6]
let number = numbers.map((item)=>{
 document.getElementById('result').innerHTML += `${item*3}`
})

console.log(number);
