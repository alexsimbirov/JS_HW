let someArray = [1, 2, 3, 4, 5];
someArray.splice(1, 0, "a", "b") && someArray.splice(6, 0, "c") && someArray.splice(8, 0, "e");
alert (someArray);


localStoragePractice.value = localStorage.getItem('localStoragePractice');
localStoragePractice.oninput = () => {
      localStorage.setItem('localStoragePractice', localStoragePractice.value)
};




// let user = {
// 	name:"test",
//   pass:'fdnkv'
// }


// try{
// 	isEmpty(user.name)
//   minLength(user.pass,5)
  
//   console.log('send user to server')
// }catch(e){
// 	console.log(e)
// }

// function isEmpty(val){
// 	if(!val){
//   throw "value is empty"
//   }
// }

// function minLength(val,min){
// console.log(val.length)
// 	if(String(val).length <= min){
//   throw new Error("password too short")
//   }
// }

