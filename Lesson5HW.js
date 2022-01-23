// Task 1
console.log('Task 1')
const studentArr = [{
   name: 'Сергей',
   surname: 'Войлов',
   ratingPoint: 1000,
   schoolPoint: 1000,
   course: 2,
},
{
   name: 'Татьяна',
   surname: 'Коваленко',
   ratingPoint: 880,
   schoolPoint: 700,
   course: 1,
},
{
   name: 'Анна',
   surname: 'Кугир',
   ratingPoint: 1430,
   schoolPoint: 1200,
   course: 3,
},
{
   name: 'Станислав',
   surname: 'Щелоков',
   ratingPoint: 1130,
   schoolPoint: 1060,
   course: 2,
},
{
   name: 'Денис',
   surname: 'Хрущ',
   ratingPoint: 1000,
   schoolPoint: 990,
   course: 4,
},
{
   name: 'Татьяна',
   surname: 'Капустник',
   ratingPoint: 650,
   schoolPoint: 500,
   course: 3,
},
{
   name: 'Максим',
   surname: 'Меженский',
   ratingPoint: 990,
   schoolPoint: 1100,
   course: 1,
},
{
   name: 'Денис',
   surname: 'Марченко',
   ratingPoint: 570,
   schoolPoint: 1300,
   course: 4,
},
{
   name: 'Антон',
   surname: 'Завадский',
   ratingPoint: 1090,
   schoolPoint: 1010,
   course: 3
},
{
   name: 'Игорь',
   surname: 'Куштым',
   ratingPoint: 870,
   schoolPoint: 790,
   course: 1,
},
{
   name: 'Инна',
   surname: 'Скакунова',
   ratingPoint: 1560,
   schoolPoint: 200,
   course: 2,
},
];

class Student {
   static #id = 1;   
   constructor(enrollee) {           
      const { name, surname, ratingPoint, schoolPoint, course } = enrollee;

      this.name = name;
      this.surname = surname;
      this.ratingPoint = ratingPoint;
      this.schoolPoint = schoolPoint;
      this.course = course;
      this.id = Student.#id;
      this.isSelfPayment = null;

      Student.#id++;
   }
};

const students = [...studentArr].sort((a, b) => a.ratingPoint < b.ratingPoint  ? 1 : -1).map((enrollee) => new Student(enrollee));
students.map((student, index) => {
   index <= 4 ? student.isSelfPayment = true : student.isSelfPayment = false;
})

console.log(students) // Возвращенный массив студентов, ТОП-5 попадают на бюджет и принимают isSelfPayment = true
console.log(studentArr) // Демонстрация того, что первоначальный массив не мутировал


// Task 2
console.log('Task 2')
// 1 вариант без использования constructor{}
class CustomString {
   reverse(str){   
      return str.split('').reverse().join('');
   }
   ucFirst(str){   
      return str[0].toUpperCase() + str.slice(1);
   }
   ucWords(str){
      return str.split(' ').map(someWord => someWord.charAt(0).toUpperCase() + someWord.slice(1)).join(' '); 
   }
}

let myString = new CustomString();
console.log(myString.reverse('qwerty'));
console.log(myString.ucFirst('qwerty'));
console.log(myString.ucWords('qwerty qwerty qwerty'));

// 2 вариант c использованием constructor{}
// class CustomString {
//    constructor(revWord, ucFirstWord, ucAllWords){
//       this.revWord = revWord;
//       this.ucFirstWord = ucFirstWord;
//       this.ucAllWords = ucAllWords;
//    }
//    reverse(){
//       const reverseSplit = this.revWord.split('')
//       return reverseSplit.reverse().join('');
//    }
//    ucFirst(){
//       let upperCaseWord = this.ucFirstWord[0].toUpperCase() + this.ucFirstWord.slice(1);
//       return upperCaseWord;
//    }
//    ucWords(){
//       let allWordsUpperCase = this.ucAllWords
//       return allWordsUpperCase.split(' ').map(someWord => someWord.charAt(0).toUpperCase() + someWord.slice(1)).join(' '); 
//    }
// }

// let myString = new CustomString('qwerty', 'qwerty', 'qwerty qwerty qwerty');
// console.log(myString.reverse());
// console.log(myString.ucFirst());
// console.log(myString.ucWords());