//Task 1
const names = 'Вася;Петя;Вова;Олег';
const namesArray = names.split(';');
console.log("namesArray", namesArray)

//Task 2
const userName = prompt('Enter you name');
const hello2 = (name='гость') => name ? alert(`Привет, ${name}!`) : alert('Привет, гость!');
hello2(userName);

//Task 3
const addOneForAll = (...numbers) => numbers.map((number) => number + 1);

// function addOneForAll(...numbers) {
//    return numbers.map(function(number){
//       return number + 1;
//    })
// }

const result = addOneForAll(1, 2, 3, 4, 5);
console.log(result)

//Task 4
const arr = [];
for(let i = 0; ; i++) {
   i !== 0 ? arr.push(i) : null;
   
   if(Math.random() > 0.9) {
      break
   } 
}

const counter = arr.length;
console.log('counter', counter);

//Task 5
