/**
 * 01. 변수
 * 
 * 자바스크립트에서 변수는 주로 camelCase를 사용한다
 */

// #1. 리터럴
var itemPrice = 12000;  // 숫자
const PI = 3.1412       // 숫자(실수) + 불변객체
let myName = "홍길동";  // 문자열
let isWoman = false;    // 불리언
var ready;              // undefined

// #2. 배열
var fruits = ['apple', 'banana', 'orange'];

// #3. 객체(object)
var k5 = {
    name: 'K5',
    manufacturer: 'KIA',
    hasSunroof: false,
    year: 2021,
    drive: function () {
        console.log(name + ' is driving...');
    }
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
}];

// #5. 함수
var hasCharacters = function (str, ch) {
    return str.includes(ch);
}
