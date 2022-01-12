console.log('Task2');
let a;
console.log(typeof 2);
console.log(typeof 'Hello JS');
console.log(typeof(2>3));
console.log(typeof(2/0));
console.log(typeof(0/2));
console.log(typeof(2-'aaa'));
console.log(typeof {});
console.log(typeof(alert));
console.log(typeof(a));
console.log(typeof null);

console.log('Task3');
const userName = 'Alex';
const anotherName = 777;

if (typeof userName === 'string'){
   console.log(`Привет, ${userName}`)
} else {
   console.log(`Ошибка, не тот тип данных`)
}

console.log('Task4');
typeof anotherName === 'string' ? console.log(`Привет, ${anotherName}`) : console.log(`Ошибка, не тот тип данных`);

console.log('Task5');
const numberOfDay = prompt('Enter number of a day');
let fDayOff;

if (numberOfDay > 0 && numberOfDay < 6){
   fDayOff = false;
} else if (numberOfDay > 5 && numberOfDay <= 7){
   fDayOff = true;
} else {
   console.log('Enter number of a day from 1 to 7')
}
console.log(fDayOff);
