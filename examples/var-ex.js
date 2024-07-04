// a라는 변수에 1, b라는 변수에 2라는 숫자 타입 값 저장
// 원래는 var 또는 let 키워드를 써줘야 한다.

a = 1;
b = 2;

// a와 b를 더해서 화면에 표시
console.log(a+b);

// 텍스트 연산

c = "강아지";
d = "새";

console.log(c+d);

e = [1,2,3,4,5];
f = [100, 12, 13];

f.pop();
f.push(3);

console.log(e[2]*f[0]);
console.log(e+f);

g = {
    name: "배문형",
    age: 36,
}

h = {
    name: "윤석열",
    age: 63,
}

// 배문형의 나이가 윤석열보다 많다.
console.log(g.age > h.age);

g.weight = 80;
h.weight = 100;

// 배문형이 윤석열보다 가볍다.
console.log(g.weight < h.weight);

