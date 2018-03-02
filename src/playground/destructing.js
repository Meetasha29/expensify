const person={
  name:"Meetasha",
  age: 22,
  location: {
    city: "jaipur",
    temp: 32
  }
};

//we do so as we don't have to write person.loaction.city everywhere
const{name: firstname="Anonymous",age}=person; //setting default value and changing name to firstname
const{city,temp:temperature} =person.location;
console.log(firstname);
console.log(`it is ${temperature} in ${city}.`);


//Array destructuring
const address=['vaishali','jaipur','india','302021'];
const [, state, country='USA']=address;
console.log(`You are in ${state} ${country}`);
