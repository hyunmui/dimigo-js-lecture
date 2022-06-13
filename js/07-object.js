var k5 = {
    ownerName: 'Hyeonmin Seon',
    trunkType: 'hatchback',
    wheels: [
        {
            position: 'front-right',    // 바퀴위치
            sizeInch: 18,               // 사이즈
            tearRate: 0.02               // 마모 비율
        },
        {
            position: 'front-left',
            sizeInch: 18,
            tearRate: 0.04
        },
        {
            position: 'back-right',
            sizeInch: 18,
            tearRate: 0.6
        },
        {
            position: 'back-left',
            sizeInch: 18,
            tearRate: 0.7
        }
    ],
    speed: 0,           // 속도
    isPowerOn: false,   // 전원 상태
    tabPowerButton: function () {
        // TODO 시동이 이미 걸려있다면 시동을 끄는 로직을 넣어주세요

        console.log('시동이 걸렸습니다');
    },
    accelerate: function (increaseSpeed) {
        // TODO: 시동이 안걸린 상태에서는 가속을 할 수 없습니다.

        this.speed += increaseSpeed;
        console.log(`현재 속도: ${this.speed}km/h`);
    },
    break: function (decreaseSpeed) {
        // TODO 속도는 0 이하로 내려갈 수 없습니다. 이를 해결하는 로직을 작성해주세요

        this.speed -= decreaseSpeed;
        console.log(`현재 속도: ${this.speed}km/h`);
    },
    checkTires: function () {
        // TODO 전체 타이어의 마모상태를 체크해서 0.5 이상인 타이어의 위치를 출력해주세요
    }
};

k5.accelerate(10);  // "시동이 꺼져있어 가속할 수 없습니다"
k5.tabPowerButton();   // "시동이 걸렸습니다"
k5.checkTires();    // "back-right 의 마모 정도가 60%로 심합니다"
k5.accelerate(5);   // "현재 속도: 5km/h"
k5.accelerate(10);  // "현재 속도: 15km/h"
k5.break(7);        // "현재 속도: 8km/h"
k5.break(10);       // "현재 속도: 0km/h"
k5.tabPowerButton();   // "시동이 꺼졌습니다"

console.log(k5);

console.log('----------------- JSON ----------------');
var jsonString = JSON.stringify(k5);
console.log(jsonString);
var carObject = JSON.parse(jsonString);
console.log(carObject);
