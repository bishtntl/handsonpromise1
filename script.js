// function first(callback){
//     console.log("hello i am first")
//     callback();
// }
// function second(callback){
//     console.log("hello i am second")
//     callback();
// }
// function third(callback){
//     console.log("hello i am third")
//     callback();
// }
// function fourth(callback){
//     console.log("hello i am fourth")
//     callback()
// }
// first(()=>{
//     second(()=>{
//         third(()=>{
//             fourth(()=>{
                
//             })
//         })
//     })
// })


// *****************************************
// function demos(){
//  return new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("1")
//     },1000)

// })
// }
// function demos1(){
//     return new Promise((res,rej)=>{
//        setTimeout(()=>{
//            res("2")
//        },2000)
   
//    })
//    }
//    function demos2(){
//     return new Promise((res,rej)=>{
//        setTimeout(()=>{
//            res("3")
//        },3000)
   
//    })
//    }
//    let result=[demos(),demos1(),demos2()]
   
//    Promise.all(result).then((a)=>{
//     console.log(a)
//    }).catch((e)=>{
//     console.log(e)
//    })



// let promise=new Promise((res,rej)=>{
//     let a=10;
//     let b =20;
//     if(a==b){
//         res("promise resolved")
//     }
//     else{
//         rej("promise rejected")
//     }
// })
// promise.then((a)=>{
//     console.log(a)
// }).catch((b)=>{
//     console.log(b)
// })


// function first(callone){
//     console.log("hello");
//     callone();
    
// }
// function second(){
//     console.log("second");
// }
// first(second)



// function call1(call){
//     console.log("a")
//     call()
// }
// function call2(callback){
//     console.log("b")
//     callback()
// }
// function call3(callone){
//     console.log("c")
//     callone()
// }
// call1(()=>{
//     call2(()=>{
//         call3(()=>{

//         })
//     })
// })

// let one=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("welcome")
//     },5000)
// })
// async function pop(){
//     let result=await one;
//     console.log(result)
//     console.log("i am here")
// }
// pop();
// function demo(){
//     return new Promise ((res)=>{
//         setTimeout(()=>{
//             res("resolve")
//         })
//     })
//     }
//     function demo2(){
//          return new Promise((res)=>{
//              setTimeout(()=>{
//                  res("resolve2");
//              },1000)
//          })
//      }
//      function demo3(){
//          return new Promise((res)=>{
//              setTimeout(()=>{
//                  res("resolve3");
//              },1000)
//          })
//      }
    
//      let pro = [demo(),demo2(),demo3()];
    
//      Promise.all(pro)
//      .then((a)=>{
//          console.log(a)
//          })
        
//      .catch((e)=>console.log(e));

// function demo(num){ 
//       return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//              console.log(num);
//              resolve();
//          },1000)
//      })
//      }
    
//      let pro = Promise.resolve();
//      for(let i=1;i<=7;i++){
//         pro=pro.then(()=>demo(i));
//      }