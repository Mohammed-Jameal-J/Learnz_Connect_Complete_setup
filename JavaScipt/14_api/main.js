let postElement = document.querySelector('#post')

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then((data)=>{
    data.forEach(item => {
        postElement.innerHTML +=`
                        <div>
                        <h1>${item.id}-${item.title}</h1>
                        <p>${item.body}</p>                 
                        </div>
        
        `
    });
})

// using try & catch 

// const postElement = document.querySelector('#post');

// async function getPosts() {
//   try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();

//     data.forEach(item => {
//       postElement.innerHTML += `
//         <div>
//           <h1>${item.id}-${item.title}</h1>
//           <p>${item.body}</p>
//         </div>
//       `;
//     });

//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// getPosts();
