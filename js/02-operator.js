
console.log(`-------------- 숫자 연산 --------------`);
var x = 8, y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);


console.log(`-------------- 문자 연산 --------------`);
var firstName = '선';
var lastName = '현민';

console.log(firstName + lastName);




console.log(`-------------- 대입 연산 --------------`);
var a = 10
a += 20;
console.log(a);
a -= 20;
console.log(a);
a *= 2;
console.log(a);
a /= 2;
console.log(a);




console.log(`-------------- 증감 연산 --------------`);
var b = 20;
console.log(b++);
console.log(b);


console.log(`-------------- 비교 연산(숫자) --------------`);
var smaller = 15, bigger = 25;
console.log(smaller > bigger);
console.log(smaller >= bigger);
console.log(smaller < bigger);
console.log(smaller <= bigger);
console.log(smaller != bigger);
console.log(smaller == bigger);
var number1 = 15, wired = '15';
console.log(number1 == wired);
console.log(number1 === wired);


console.log(`-------------- 불리언 연산 --------------`);
console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(false || false);