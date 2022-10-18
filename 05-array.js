/**
 * 05. 배열
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

// 배열 관련 함수
var fruits = ['apple', 'banana', 'orange'];

// 접근 (from 0 to length - 1)
console.log(fruits[1], fruits[2]);

// 배열 길이 구하기
console.log(fruits.length);

// 뒤에 더하기: push
fruits.push('pineapple');
console.log(fruits);

// 맨 뒤에 항목 빼기 : pop
var firstFruit = fruits.pop();
console.log(firstFruit, fruits);

// 이어 붙여서 문자열로 반환
console.log(fruits.join('-'));

// 정렬
console.log(fruits.sort());

// 역순 정렬
console.log(fruits.reverse());

// 제거
var removedFruits = fruits.splice(1, 1);
console.log(removedFruits, fruits);

// 제거 안하고 추가
var f2 = fruits.splice(0, 0, 'mango', 'melon');
console.log(f2, fruits);



console.log('--------------- Basic Functional Programming --------------');
var fruits2 = ['apple', 'banana', 'orange'];
// map
var fruitLetterCounts = fruits2.map(function (fruit) {
    return fruit.length;
});
console.log(fruitLetterCounts);

// filter
var fruitsByLetterCountLargerThan5 = fruits2.filter(f => f.length > 5);
console.log(fruitsByLetterCountLargerThan5);

// every
var isAllFruitsStartWithConsonant = fruits2.every(f => !['a', 'e', 'i', 'o', 'u'].includes(f));
console.log(isAllFruitsStartWithConsonant);