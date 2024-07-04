const comp = (a, b) => {
    if (a > b) {
        return a + '이(가) 크다!';
    } else if (a < b) {
        return b + '이(가) 크다!';
    } else { 
        return '둘이 똑같다!'; 
    }
}

let result = comp(3,4);

console.log(result);