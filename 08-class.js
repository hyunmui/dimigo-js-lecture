class Wheel {
    constructor(position, sizeInch, tearRate) {
        this.position = position;
        this.sizeInch = sizeInch;
        this.tearRate = tearRate;
    }
}

class Car {
    constructor(ownerName, trunkType, wheels) {
        this.ownerName = ownerName;
        this.trunkType = trunkType;
        this.wheels = wheels;
        this.speed = 0;
        this.isPowerOn = false;
    }

    tabPowerButton() {
        console.log('시동이 걸렸습니다');
        this.isPowerOn = !this.isPowerOn;
    }

    accelerate (increaseSpeed) {
        this.speed += increaseSpeed;
        console.log(`현재 속도: ${this.speed}km/h`);
    }

    break (decreaseSpeed) {
        this.speed -= decreaseSpeed;
        console.log(`현재 속도: ${this.speed}km/h`);
    }
}

class K5 extends Car {}

let k5 = new K5("Hyeonmin Seon", "hatchback", [
    new Wheel("front-right", 18, 0.02),
    new Wheel("front-left", 18, 0.04),
    new Wheel("back-right", 18, 0.6),
    new Wheel("back-left", 18, 0.7),
]);

console.log(k5);

k5.accelerate(10); // "시동이 꺼져있어 가속할 수 없습니다"
k5.tabPowerButton(); // "시동이 걸렸습니다"
k5.accelerate(5); // "현재 속도: 5km/h"
k5.accelerate(10); // "현재 속도: 15km/h"
k5.break(7); // "현재 속도: 8km/h"
k5.break(10); // "현재 속도: 0km/h"
k5.tabPowerButton(); // "시동이 꺼졌습니다"

console.log(k5);