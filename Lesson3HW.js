// Task 1
const userNumber = +prompt('Enter any number');
let squareNum = 0;
for(let number = 1; number <= userNumber; number++){
   squareNum += number ** 2
}
console.log('Task 1 - ', squareNum)

// Task 2
const  avg2 = (num1, num2) => (num1 + num2) / 2
const resultTask2 = avg2(2, 5)
console.log('Task 2 - ', resultTask2)

// Task 3
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

// Task 4
const newUser = {
   name: "Alex",
   age: 24
};
function addData(object){
   const key = prompt('Enter key')
   object[key] ? console.error(`${key} уже существует`) : object[key] = prompt('Enter value')
}
addData(newUser)

// Task 5
let flag = false;
for(let i = 0; ; i++) {
   if(flag) {
      break
   }
   flag = confirm()
}


// Task 6
const someArray = [3, 7, -10, 20, '13', -1]

// Сумма всех числовых типов данных
const sumNumberArray = someArray.reduce((acc, curr) => {
   return typeof curr === "number" ? acc += curr : acc
}, 0)
console.log('Task 6 - Сумма всех числовых типов данных - ', sumNumberArray)

// Сортровка по убыванию
someArray.sort((a, b) => (b - a));
console.log('Task 6 - Сортровка по убыванию - ', someArray);

// Массив с положительными числами
const resultPositiveSort = someArray.filter(item => item > 0 && typeof item === 'number')
console.log('Task 6 - Массив с положительными числами', resultPositiveSort)

//Увелечение на 10, если тип данных - число
const numberPlusTen = someArray.reduce((acc, curr) => {
   return typeof curr === "number" ? acc += curr + 10 : acc
}, 0)
console.log('Task 6 - Увелечение на 10, если тип данных - число - ', numberPlusTen)