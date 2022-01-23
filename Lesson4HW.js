// // Task 1
// const person1 = {
//    name: "Alexey",
//    email: "alexsimbirov@gmail.com",
//    phone: {
//       mobilePhone: "+380954094778",
//       localPhone: "435789456",
//    },
// }
// function showName(){
//    console.log(this.name)
// }
// const helloName = showName.bind(person1)
// helloName() // выводит контекст из person1

// function bindFunc(func, context, ...args){
//    const foo = func.bind(context)
//    foo()
// }
// bindFunc(showName, person1, 3, 5)


// // Task 2
// const objectA = {
//    a: 1,
//    b: 2,
//    c: 3,
// };
// const objectB = {
//    a: 1,
//    b: 6,
//    c: 3,
//    d: -4,
// };
// function sumOfValues() {
//    const arr = Object.values(this); 
//    return arr.reduce((acc, curr) => curr > 0 ? acc += curr : acc, 0)
// }
// const result = sumOfValues.call(objectB);
// console.log('Task2 - ', result)


// // Task 3
// const valObject0 = {        
//    values: [1, '2', 4, 8, 6, '8',  3, 10, null, false],
//  };
 
// function getNewArray(){      
//    const filterObject = valObject0.values.filter((curr) => typeof curr === "number" && curr > 2 && curr < 10 && curr % 2 == 0);
//    return filterObject
// }
// console.log(getNewArray(this.values));


// //Task 4
// let user = {
//  birthdayDate: new Date("1997-03-31")
// }
   
// console.log("birthdayDate.toLocalString =>",user.birthdayDate.toLocaleString());
   
// function whenPrevBirthday(){
// let now = new Date();
// let prevBirthday = user.birthdayDate;
   
// if(now.getMonth() > user.birthdayDate.getMonth() || (now.getMonth() === user.birthdayDate.getMonth() && now.getDate() > user.birthdayDate.getDate())){	
//   prevBirthday.setFullYear(now.getFullYear())
// }else{
//   prevBirthday.setFullYear(now.getFullYear() - 1)
// }
// console.log("whenPrevBirthday",(now-prevBirthday)/(1000*60*60*24))
// }
// whenPrevBirthday()








// const valObject0 = {         
//    values: [1, '2', 4, 8, 6, '8',  3, 10, null, false], 
//  }; 
  
//    function getNewArray() { 
       
//       const filterObject = Object.values(this).filter((curr) => typeof curr === "number").filter((curr) => curr > 2).filter((curr) => curr < 10).filter((curr) => curr % 2 == 0); 
//       return filterObject 
//    } 
//      console.log(getNewArray.call(valObject0));


// const isNumber = (number) => typeof(number) === 'number';
//  const inRange = (number) => number >= 2 && number <= 10;
//  const isEven = (number) => number % 2 === 0;    
//  const valObject0 = {
//       a: 1,
//       b: 6,
//       c: 3,
//       d: -4,     
// function getNewArray(){           
//    return Object.values(this).filter(curr => inRange(curr) && isEven(curr));
// } 
// const result123 = getNewArray.call(valObject0);
// console.log(result123)

 
  