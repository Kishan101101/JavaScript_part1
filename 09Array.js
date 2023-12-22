const myArr=[0,1,2,3,4,5,'kishan','yadav']//resizeable, 
const myHeroes=["Ironman","Dr.Strange"]
const Array2=new Array(1,2,3,4)
// console.log(myArr)


//Array methods

Array2.push('kishan')
Array2.pop()

Array2.unshift(9)//it insert 9 at the begining of array
// console.log(Array2)
Array2.shift()
// console.log(Array2)

// console.log(Array2.includes(9))


let newArray=myArr.join()//convert into string
// console.log(newArray)

console.log("A",Array2)

const myn1=Array2.slice(1,3)
console.log(myn1)
console.log("B ",Array2)
const myn2=Array2.splice(1,3)
console.log("c",Array2)
console.log(myn2)


