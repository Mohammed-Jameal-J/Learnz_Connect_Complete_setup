const students=[]

function addStudent(name,score) {
    score= Number(score);
    score=score ?? 0;
    name=name.trim().toUpperCase()
    students.push({
        name , score
    })
}

function getGrades() {
    return students.map((student)=>{
        let grade="F"

        if(student.score >=90 ) grade="A"
        else if(student.score>=70) grade="B"
        else if(student.score>=50) grade="C"
        else if(student.score>=35) grade="D"
        return{...student,grade}
    })
}

//top Score

function topScore() {
    return students.filter((student)=>
        student.score >=75 )
}

function findStudent(name) {
    return students.find((student)=>
        student.name == name
    )
}

function failStudent() {
    return students.some((student)=>{
        student.score < 35
    })
}


//display data
function displayAll() {
    const graded = getGrades()
    console.log("student Data");
    console.log("All Student with Grades");
    graded.forEach((student)=>{
        console.log(`${student.name} | ${student.score} |${student.grade}`);
        
    })   
}
//adding Student

addStudent("John","91");
addStudent("Mani","41");
addStudent("Kaviya","31");
addStudent("Ganesh","77");

displayAll()

//top score

console.log(" \n Top Score: ");
console.log(topScore());

//find student

console.log(findStudent("KAVIYA"));


//check failure

console.log(failStudent() ? "Yes some Filed":"No failures");



