// spread and rest (...)

// spread 
const fruits=["apple","banana","orange"]

fruits[0]="mango"
console.log(fruits);

const newFruits=[...fruits,"redAPPLE"]
newFruits[2]="grapes"
console.log(newFruits);

//rest
function hello(...number) {
    console.log(number);
    
}

hello(1,2,3,4)