console.log(hello);
var hello = 'Hello';


if(true){
    let nayeem = 'Nayeem';
    nayeem = 'Nayeem Uddin';
    console.log(nayeem)
}
console.log(nayeem); //gives error

if(true){
    const nayeem = 'Nayeem';
    nayeem = 'Nayeem Uddin'; //gives error
    console.log(nayeem)
}
console.log(nayeem); //gives error
