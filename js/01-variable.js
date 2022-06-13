// 변수의 선언
// #1. 리터럴
var itemPrice = 12000;  // 숫자
var myName = "홍길동";  // 문자열
var isWoman = false;    // 불리언
var ready;              // undefined
// #2. 배열
var fruits = ['apple', 'banana', 'orange'];
// #3. 객체(object)
var k5 = {
    name: 'K5',
    manufacturer: 'KIA',
    hasSunroof: false,
    year: 2021
};
// #4. 복합(배열 + 객체)
var cars = [{
    name: 'K5',
    manufacturer: 'KIA',
    hasSunroof: false,
    year: 2021
},{
    name: 'Sonata',
    manufacturer: 'Hyundai',
    hasSunroof: true,
    year: 2022
},{
    name: '티볼리',
    manufacturer: 'Ssangyong',
    hasSunroof: false,
    year: 2019
}]

// 개발자 도구에 출력
console.log(itemPrice);
console.log(itemPrice, myName, isWoman, ready);
console.log(cars);

// 문서에 출력
document.write(`<div>${myName}</div>`);