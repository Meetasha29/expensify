//do smething wehn set task completes

const promise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("this is the resolved data");
    reject('Something went wrong');
  },5000);
});

console.log("before");
promise.then((data)=>{    //if promise resolve
  console.log(data);
}).catch((error)=>{      //if promise rejects
  console.log(error);
})
console.log("after");
