const promiseOne = new Promise(function(resolve, reject){

  setTimeout(function(){
    console.log('Async task is complete');
    resolve()
  }, 1000)
})

promiseOne.then(function(){
  console.log("Promise consumed");
})

new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("Async task 2");
    resolve()
  }, 1000)
}).then(function(){
  console.log('Async 2 resolved');
})

const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({username: "chai", email: "chai@chaiaurcode.com"})
  }, 1000)
})

promiseThree.then(function(user){
  console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
      let error = false
      if (!error) {
        resolve({username: "Abhishek", password: "123"})
      }  else {
          reject('ERROR: Something wen wrong')

      }

    }, 1000)
})

promiseFour
.then((user) => {
  console.log(user);
  return user.username
})
.then((username) => {

    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected") )

const promiseFive = new Promise(function(resolve, reject){
   setTimeout(function(){
      let error = false
      if (!error) {
        resolve({username: "JAVASCRIPT", password: "123"})
      }  else {
          reject('ERROR: Js  went wrong')

      }

    }, 1000)

});

async function consumePromiseFive() {
 const response =  await promiseFive
   console.log(response);
}

consumePromiseFive()

async function gatAllUsers(){
  const response = await  fetch('htps://jsonplaceholder.typicode.com/users')
 cosnt =  response.json()
 console.log(data);
}

getAllUsers()