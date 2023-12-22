// for loop

const array=[5,8,6,3,2]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.table([element])
    
}

//while loop

//each time condition must be true
let index=0
while (index< array.length) {
    
    const element = array[index];
    // console.log(`value is at ${index} is ${array[index]}`)
    index++
}

//nesting ,break,continue same as other programming languageas


// do while loop

//firt time not check any condition

let score=1;
 do {
    // console.log(`socre is ${score}`)
    score++
 } 
 while (score<=10);


// for of loop

for (const iterator of array) {
    // console.log(iterator)
}

const greetings="Hello mr. welcome to jumanji "

for (const greet of greetings) {
    // console.log(greet)
}


// Maps

const map=new Map()

map.set('kishan','1')
map.set('shaloo','2')
map.set('nikhil','3')
map.set('rohan','4')
map.set('sohan','5')

// for (const it of map) {
//     console.log([it[0],it[1]])
// }

for (const [key,value] of map) {
    // console.log(key,':-',value)
}
//for of loop does not work on objects use for in loop 



//for in loop
const myObject={
    js:'JavaScript',
    cpp:'C++',
    py:'Python',
    rb:'ruby',
    swift:'Swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} is shortcut of ${myObject[key]}`)
}
//it  does not work on map ,array

// for each loop

const coding=["js","cpp","ruby","python"]

//passing arrow function
// coding.forEach(
//     (val) =>{console.log(val);}
// )


// function printMe(itm){
//     console.log(itm);
// }

// coding.forEach(printMe) //passing external function


// coding.forEach(
//     (val,index,arr) =>{console.log(val,index,arr);}
// )

//mostly use during database
const mycoding=[{
    languageName:"javascript",
    languageFileName:"js"
},{
    languageName:"c++",
    languageFileName:"cpp"
},{
    languageName:"python",
    languageFileName:"py"
}]

// mycoding.forEach((item)=>{
//     {console.log(item.languageName);}
// })

//how for each work when you want to return something
const num =[1,2,3,4,5,6,7,8,9,10]

const newnum=num.filter((n) => {return n>4})
// console.log(newnum)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks=books.filter((bk)=> bk.genre==='Science')
  

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
// console.table(userBooks)





