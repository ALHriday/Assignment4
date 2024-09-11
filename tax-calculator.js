
function calculateTax(income, expenses) {
    // You have to write your code here
    if (income < 0 || expenses > income) {
        return "Invalid Input";
    }
    const tax = (income - expenses) * 0.20;
    return tax;
}

// const tax = calculateTax(10000,3000);
// const tax2 = calculateTax(34000,1753);
// const tax3 = calculateTax(-2000,1500);
// console.log(tax,tax2,tax3);


