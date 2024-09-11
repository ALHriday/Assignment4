
function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        return "Invalid Input";
    };

    let parentProfession = false;
    if (obj.isFFamily) {
        parentProfession  = 20;
    };
    
    if (obj.testScore <= 50 && obj.schoolGrade <= 30 || isFFamily === true) {
        const finalScore = obj.testScore + obj.schoolGrade + parentProfession;

        if (finalScore >= 80) {
            return true;
        } else {
            return false;
        }
    };
};



const score = calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  });
const score2 = calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false });
const score3 = calculateFinalScore("hello" );
const score4 = calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  });

console.log(score, score2,score3,score4);
