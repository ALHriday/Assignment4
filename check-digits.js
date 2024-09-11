

function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    };

    let digitArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let nameArr = name.split('');
    let digit = false;

    for (let i = 0; i < digitArr.length; i++){
        if (nameArr.includes(digitArr[i])){
            digit = true;
        } 
    };

    return digit;
};




const result = checkDigitsInName('rana');
console.log(result);


