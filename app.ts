function sum(n1: number, n2: number) {
    // if(typeof n1 !=='number' || typeof n2!=='number'){
    //     throw new Error('Incorrect input')
    // }
    return n1 + n2;
}

let number1: number;
// number1="hello"; //error
number1 = 10;
let myName="akhila";
// myName=10; //error

const number2 = 2.8;

const result = sum(number1, number2);

console.log(result);