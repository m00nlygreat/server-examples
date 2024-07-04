g = {
    name: "배문형",
    age: 36,
    weight: 80,
}

h = {
    name: "윤석열",
    age: 63,
    weight: 100,
}

if (g.weight > h.weight) {
    console.log("배문형이 윤석열보다 무겁습니다.");
} else if (g.weight < h.weight) {
    console.log("배문형이 윤석열보다 가볍습니다.");
}

if (false) {
    console.log("이 구문은 실행되지 않습니다.");
} else if (true) {
    console.log("이 구문은 실행됩니다.");
}