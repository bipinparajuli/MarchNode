// const app = (str,done)=> {

//    process.nextTick(()=>{
//     done(str.replace(/[a-zA-Z]/g,"X"))

// }) 

// }

// const fun = app ("Hello World",(hidden)=>{
//     console.log(hidden)
// })

// // console.log(fun)

// console.log("Hello")

function delay (callback,s){
    setTimeout(callback,s*1000)
}

console.log("Starting delay");

delay(()=>{
    console.log('after 2 second')
    delay(()=>{
        console.log("After 1 second")
    },1)
},2)
