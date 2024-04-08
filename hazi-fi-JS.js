let a = 6;
let b = 5;

amount = (a, b) => {
    return a+b;
};

difference = (a, b) => {
    return a-b;
}

product = (a, b) => {
    return a*b;
}

ratio = (a,b) => {
    return a/b;
}

console.log(`A két szám összege: ${amount(a, b)}`);
console.log(`A két szám különbsége: ${difference(a, b)}`);
console.log(`A két szám szorzata: ${product(a, b)}`);
console.log(`A két szám hányadosa: ${ratio(a, b)}`)
