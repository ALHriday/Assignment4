

function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
        return 'Invalid Input';
    };

    const serialNum = serialNumber - 1;
    let totalTime = 0;
    
    for (let time of waitingTimes) {
        totalTime += time;
    };
    const avgTime = Math.round(totalTime / waitingTimes.length);

    return (serialNum - waitingTimes.length) * avgTime; 
     
};


const time = waitingTime([ 3, 5, 7, 11, 6 ], 10)
const time2 = waitingTime([13, 2], 6)
const time3 = waitingTime([7, 8, 3, 4, 5], "9");
const time4 = waitingTime("[6,2]", 9);
console.log(time,time2,time3,time4);
