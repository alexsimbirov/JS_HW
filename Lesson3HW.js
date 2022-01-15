// function numberSum(a, b){
//    return a + b
// }
// const result = numberSum(3, 5)
// console.log(result)


// const numArray = [1, 2, 3, 4, 5];
// function sumArray(array){
//    let sumNum = 0
//    array.forEach(function(number){
//       sumNum += number
//    })
//    return sumNum
// }
// const result2 = sumArray(numArray)
// console.log(result2)

// const numArray = [1, 2, 3, 4, 5];
// // const result3 = numArray.reduce(function(acc, curr){
// //    return acc += curr
// // }, 0)
// const result3 = numArray.reduce((acc, curr) => acc += Math.pow(curr, 2))
// console.log(result3)


//Task 1
const userNumber = +prompt('Enter any number');
let squareNum = 0;
for(let number = 1; number <= userNumber; number++){
   squareNum += number ** 2
}
console.log('Task 1 - ', squareNum)

//Task 2
const  avg2 = (num1, num2) => (num1 + num2) / 2
const resultTask2 = avg2(2, 5)
console.log('Task 2 - ', resultTask2)

//Task 3
const doubleArray = [[1, 6, 3, '6'], [10, 15, 13, '10']]
const flatArray = doubleArray.flat(Infinity)
const resultTask3 = flatArray.reduce((acc, curr) => {     
   // if(typeof curr === 'number' && curr % 2 === 0){
   //    acc += curr      
   // }
   // return acc

   // Решение через тернарное выражение
   return typeof curr === 'number' && curr % 2 === 0 ? acc+= curr : acc
}, 0)
console.log('Task 3 - ', resultTask3)

//Task 4
const newUser = {
   name: "Alex",
   age: 24
};
function addData(object){
   const key = prompt('Enter key')
   object[key] ? console.error(`${key} уже существует`) : object[key] = prompt('Enter value')
}
addData(newUser)

//Task 5
let flag = false;
for(let i = 0; ; i++) {
   if(flag) {
      break
   }
   flag = confirm()
}

// Task 6
