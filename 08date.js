let mydate=new Date()
console.log(typeof(mydate))
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toUTCString());



let mycreatedDate=new Date(2023,11,15)
console.log(mycreatedDate.toDateString())

let mycreatedDate1=new Date("01-14-2004")
console.log(mycreatedDate1.toLocaleDateString())



let myTimeStamp = Date.now()
console.log(myTimeStamp)