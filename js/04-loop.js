var fruits = ['apple', 'pineapple', 'banana'];
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

// for
for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    console.log(car.name);
}

// draw triangle
for (let i = 0; i < 5; i++) {
    var line = '';
    for (let j = 0; j <= i; j++) {
        line += '*';
    }

    console.log(line);
}

// TODO: 별을 역순으로 하려면 어떻게 바꾸면 될까?
// *****
// ****
// ***
// **
// *

// for of
for (const car of cars) {
    console.log(car.name);
}

// break
for (const fruit of fruits) {
    console.log(fruit);
    if (fruit.length > 7) {
        break;
    }
}