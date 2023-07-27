//Задание 1
function findingSmallest (a, b) {
  return a <= b ? a : b;
}
console.log(findingSmallest (8, 4))
console.log(findingSmallest (6, 6))
// 2Способ
function findingSmallest (a, b) {
  if (a>=b) {
    return b;
  }  else {
    return a;
  }
}
console.log(findingSmallest (8, 4))
console.log(findingSmallest (6, 6))

//Задание 2
function even_or_odd(number) {
  return number % 2 === 0 ? "Odd" : "Even"
}

console.log(even_or_odd(3));
console.log(even_or_odd(2));

//Задание 3.
//3.1

function exponentiation (number) {
  console.log (number * number);
}
exponentiation (6)

//3.2

let exponentiation = (number) => {
  let result = (number * number);
  return result
}

//Задание 4
let sayHi = ( age = prompt ('Сколько Вам лет?')) => {
   if (age < 0) { 
    alert ('Вы ввели неправильное заначение');
  } else if (age <= 12) {
    alert ('Привет друг!');
  } else if (age >= 13) {
    alert ('Добро пожаловать!')
  }
}
sayHi ()

//Задание 5
let mult = (a = prompt ("Введите первое число"), b = prompt ("Введите второе число")) => {
  if (isNan(a) || isNan(b)) {
    return alert ('Одно или оба заначения не являтся число');
  } else {
    return alert (a*b);
  }
}
mult()

//Задание 6
let degree = ( userNumber = prompt ("Введите любое число")) => {
if (isNaN (userNumber)) {
  return alert('Переданный параметр не является числом');
} else {   
   return alert (`${userNumber} в кубе равняется ${userNumber**3}`);
}
}
degree();


//Задание 7

const Pi = 3.14159;

function getCircleArea() {
  return (Pi * this.radius ** 2) / 2;
}

function getCirclePerimeter(radius) {
  return Pi * this.radius * 2;
}

const circle1 = {
  radius: 10,
  getArea: getCircleArea,
  getPerimeter: getCirclePerimeter,
};

const circle2 = {
  radius: 15,
  getArea: getCircleArea,
  getPerimeter: getCirclePerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());

console.log(circle2.getArea());
console.log(circle2.getPerimeter());



//Задание 8
function seasons () {
  let monthNumber = prompt ('Введите номер мясяца');
  if (monthNumber == 1 && monthNumber == 2 && monthNumber == 12) {
    alert('Зима');
  }
  else if (monthNumber == 3 && monthNumber == 4 && monthNumber == 5) {
    alert('Весна');
  }
  else if (monthNumber == 6 && monthNumber == 7 && monthNumber == 8) {
    alert('Лето');
  }
  else if (monthNumber == 9 && monthNumber == 10 && monthNumber == 11) {
    alert('Осень');
  }
  else {
    alert ('Вы ввели неподходящее значение');
  }
}
seasons()