//Singleton (make from constructor) object.create


//object literals

const mySym= Symbol("key1")
const jsuser={
   name:"kishan",
   "fullname":"kishan yadav",
   email:"kishan@google.com",
   age:23,
   location:"mau",
   isloggedIn:false,
   [mySym]: "mykey1"

}
// console.log(jsuser["email"])
// console.log(jsuser["location"])
// console.log(jsuser["fullname"])
// console.log(jsuser[mySym])
// console.log(typeof(mySym))

//Object.freeze(jsuser)//it not allowed you to change in object
jsuser.email="kishan@microsoft.com"
// console.log(jsuser)

jsuser.greeting=function(){
   console.log("Hello js user");
}
jsuser.greetingtwo=function(){
   console.log(`Hello Js user ${this.name}`);
}
 
// console.log(jsuser.greetingtwo());



//+++++++++++singleton object++++++++++

// const tinderUser ={}
 const tinderUser=new Object()
 tinderUser.id="123abc"
 tinderUser.name="kishan"
 tinderUser.isloggedIn=false

//  console.log(tinderUser)

const regularUser={
   email:"xyad@gamil.com",
   fullname:{
      userfullname :{
      firstname:"kishan",
      lastname:"yadav"
      }
   }
}

//combining two or more object

const obj1={
   1:"a",
   2:"b"
}
const obj2={
   3:"c",
   4:"d"
}
//const obj3 = Object.assign({},obj1,obj2)
console.log({...obj1,...obj2}) //latest method

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(tinderUser.hasOwnProperty('isloggedIn'))

