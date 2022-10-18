var k5 = {
    ownerName: 'Hyeonmin Seon',
    trunkType: 'hatchback',
    wheels: [
        {
            position: 'front-right',    // 바퀴위치
            sizeInch: 18,               // 사이즈
            tearRate: 0.02              // 마모 비율
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
        console.log('시동이 걸렸습니다');
    },
    accelerate: function (increaseSpeed) {
        this.speed += increaseSpeed;
        console.log(`현재 속도: ${this.speed}km/h`);
    },
    break: function (decreaseSpeed) {
        this.speed -= decreaseSpeed;
        console.log(`현재 속도: ${this.speed}km/h`);
    }
};

k5.accelerate(10);  // "시동이 꺼져있어 가속할 수 없습니다"
k5.tabPowerButton();   // "시동이 걸렸습니다"
k5.accelerate(5);   // "현재 속도: 5km/h"
k5.accelerate(10);  // "현재 속도: 15km/h"
k5.break(7);        // "현재 속도: 8km/h"
k5.break(10);       // "현재 속도: 0km/h"
k5.tabPowerButton();   // "시동이 꺼졌습니다"

k5.companyName = 'KIA';

console.log(k5);
