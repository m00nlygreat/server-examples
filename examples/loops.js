// for문

for (i = 0; i < 3; i++) {
    console.log((i + 1) + '번째 실행중');
}

let result = 0;

for (i=1; i < 101; i++) {
    result = result + i;
}

console.log(result);

// for in 문

a = [1,2,3,4,5,6];

// 이경우 number는 string 타입의 key 값이 된다.
for (number in a) {
    console.log(number);
    console.log(a[number]);
}