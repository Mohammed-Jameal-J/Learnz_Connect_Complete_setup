// function checkOrder() {
//     return new Promise((resolve,reject)=>{
//         let orderId= document.querySelector('#order-id').value

//         if(orderId == 'order123'){
//             resolve("Order Delivered")
//         }else{
//             reject("Order is pending")
//         }
//     })
// }

async function checkOrder(){
    let orderId= document.querySelector('#order-id').value

    if(orderId == 'order123'){
        return "Order Delivered"
    }else{
        throw "Order is pending"
    }

}


document.querySelector('#checkBtn').addEventListener("click",async()=>{
    // checkOrder().then((success)=>{
    //     document.querySelector('#result').innerHTML=success
    // }).catch((failure)=>{
    //      document.querySelector('#result').innerHTML=failure
    // })
    try{
         let success = await checkOrder()
    document.querySelector('#result').innerHTML=success
    } catch(error){
         document.querySelector('#result').innerHTML=error
    }
   
})