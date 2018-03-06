import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCx4H3pcmTjAhpfIxy8EGXbUa08aUeOYe0",
    authDomain: "expensify-4de6c.firebaseapp.com",
    databaseURL: "https://expensify-4de6c.firebaseio.com",
    projectId: "expensify-4de6c",
    storageBucket: "expensify-4de6c.appspot.com",
    messagingSenderId: "1049891879140"
  };

firebase.initializeApp(config);

const database=firebase.database();
export { firebase, database as default };
//arrays
// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'Jaiur',
//   amount: '26000',
//   createdAt: '24568'
// });

//subscription
//child_removed
// const onValueChange = database.ref('expenses').on('child_removed',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val());
//     });

//child_chnaged
// const onValueChange = database.ref('expenses').on('child_changed',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val());
//     });
//child_added
//it will run once for the data already there
// const onValueChange = database.ref('expenses').on('child_added',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val());
//     });
//Read the arrays

// database.ref('expenses')
//     .once('value')
//     .then((snapshot)=>{
//       const expenses=[];
//
//       snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         });
//       });
//       console.log(expenses);
//     });

// const onValueChange = database.ref('expenses').on('value',(snapshot)=>{
//   const expenses=[];
//
//   snapshot.forEach((childSnapshot)=>{
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
//
//   },(e)=>{
//       console.log('error with data fetching',e);
//     });




//ref will point to the particular colllection and if we are not
//passing anything it means we are pointing to the root
// database.ref().set({
//   name: "Meetasha gaur",
//   age: 26,
//   isSingle: true,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location:{
//     city: 'Jaipur',
//     country: 'India'
//   }
// }).then(()=>{
//   console.log("data is saved");
// }).catch((e)=>{
//   console.log("this ios failed", e);
// });


//fetch the data
//subscription

// const onValueChange = database.ref().on('value',(snapshot)=>{
//   console.log(snapshot.val());
// },(e)=>{
//   console.log('error with data fetching',e);
// });
//
// setTimeout(()=>{
//   database.ref('age').set(24);
// },3500);
//
// setTimeout(()=>{
//   database.ref().off();
// },7000);
//
// setTimeout(()=>{
//   database.ref('age').set(30);
// },10500);
//for once
// database.ref()
//     .once('value')
//     .then((snapshot)=>{
//       const val = snapshot.val();
//       console.log(val);
//     })
//     .catch((e)=>{
//       console.log('error fetching data', e);
//     });



// removing the data
// database.ref('isSingle').set(null);

// database.ref('isSingle').remove()
//   .then(function() {
//     console.log("Remove succeeded.")
//   })
//   .catch(function(e) {
//     console.log("Remove failed: " + e)
//   });



//UPDATE
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Hyderabad'
//   //isSingle: null  remove a database
//   //salary: 8000 add a data
// });

// database.ref('age').set(27);
// database.ref('location/city').set('New York');
