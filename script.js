const numbers = [10,5,9,16,25,30,2];


const filtro = numbers.find(isBigEnough);

function isBigEnough(value, index, array){
    return value >= 15;
}

console.log(filtro);

