// Task 1
let table = document.createElement("table");

document.body.append(table);

for (let i = 1; i <= 9; i++) {
  let tr = document.createElement("tr");

  table.appendChild(tr);
  
  for (let j = 1; j <= 9; j++) {
    let td = document.createElement("td");
    
    tr.appendChild(td);
    td.innerText = i * j;
  }  
}


// Task 2
const arr = [1, 1, 2, 2, 3];

const getUnique = (someArray) => (
   someArray.reduce((acc, curr) => (
      acc.includes(curr) ? acc : [...acc, curr]
   ), [])
);
const newArr = getUnique(arr);
console.log(newArr)


// Task 3

let countSecond = 0
function counter(countFirst) {
    return function() {
        return countSecond += countFirst
    }();
}
console.log(counter(4));
console.log(counter(13));
console.log(counter(43));

// Task 4

function Calculator() {

   this.read = function () {
     this.x = +prompt('Введите первое значение');
     this.y = +prompt('Введите второе значение');
   };
 
   this.setAction = function () {
     let condition = prompt('Введите 1 если хотите суммировать значения \nВведите 2 если хотите умножить значения \nВведите 3 если хотите отнять значения \nВведите 4 если хотите разделить значения \nВведите 5 если хотите возвести в куб сумму значений \nВведите 6 если хотите получить значение кубического корня первого числа');
 
 
     this.doAction = function () {
       if (condition == 1) {
         return console.log('Сумма равняется: ' + (this.x + this.y));
       };
 
       if (condition == 2) {
         return console.log('Произведение равняется: ' + (this.x * this.y));
       };
 
       if (condition == 3) {
         return console.log('Разница равняется: ' + (this.x - this.y));
       };
 
       if (condition == 4) {
         return console.log('Деление равняется: ' + (this.x / this.y));
       };
 
       if (condition == 5) {
         return console.log('Куб суммы двух введенных чисел равняется: ' + ((this.x + this.y) ** 3));
       };
 
       if (condition == 6) {
         return console.log('кубический корень первого числа равняется: ' + Math.cbrt(this.x));
       };
 
     }
 
   }
 }
 
 let calculator = new Calculator();
 calculator.read();
 calculator.setAction();
 const tres = calculator.doAction();
 console.log(tres);