// 변수와 값
// 문자열
// 숫자: 정수(integer), 소수(float, double)
// 불(참, 거짓)
// is_student: 파이썬, ...
// isStudent: 자바스크립트, 타입스크립트, ...
// IsStudent: 자바, c#, ...
name1 = "이승현"
age1 = 11
isStudent1 = true

name2 = "삼승현"
age2 = 31
isStudent2 = false

// 연산자
// =, +, -, x, /, +=, %
x = 1
x = x + 100
x += 100
console.log(x)
console.log(x % 100)
console.log(x / 100)

// 출력
// 문자열 포멧팅
console.log(name1)
console.log(age1)
console.log(isStudent1)
console.log(`내 이름은 ${name1}이다. 나는 ${age1}살이다.`) // 이승현의 프로필
console.log(`내 이름은 ${name2}이다. 나는 ${age2}살이다.`) // 삼승현의 프로필

// json 객체
// 키, 값
person1 = {
    name: "이승현",
    age: 11,
    isStudent: true,
}
person2 = {
    name: "삼승현",
    age: 31,
    isStudent: false,
}
console.log(`내 이름은 ${person1.name}이다. 나는 ${person1.age}살이다.`) // 이승현의 프로필
console.log(`내 이름은 ${person2.name}이다. 나는 ${person2.age}살이다.`) // 삼승현의 프로필

// 배열
numbers = [1, 2, 3, 4, 5]
console.log(numbers[0])
people = [person1, person2]
console.log(`내 이름은 ${people[0].name}이다. 나는 ${people[0].age}살이다.`) // 이승현의 프로필
console.log(`내 이름은 ${people[1].name}이다. 나는 ${people[1].age}살이다.`) // 삼승현의 프로필

// 조건문
// if (이 조건이 참이라면) {
//     이것을 실행한다
// } else if (또는 이 조건이 참이라면) {
//     이것을 실행한다
// } else {
//     이것을 실행한다
// }
if (person2.isStudent === true) {
    console.log("학생입니다")
} else {
    console.log("학생이 아닙니다")
}

// 반복문
// while (조건이 참이면) {
//     이것을 반복한다
// }
// 조건이 참이 아니면 빠져나온다
// i = 1;
// while (i <3){
//   console.log("hello")
//     i=i+1
//     }

// 함수
// x = 7;
// i = 1;
// while (i <10){
//     console.log(`${x} x ${i} = ${x * i}`);
//     i = i+1;
// }
// x = 2;
// while (x < 10) {
//     i = 1;
//     while (i < 10) {
//         console.log(`${x} x ${i} = ${x * i}`);
//         i = i + 1;
//         console.log(`..........`)
//     }
//     x = x + 1;
//     console.log(`___________`)
// }

// 반복문
i = 1
while (i < 10) {
    console.log(i)
    i += 1;
}

i = 1
while (true) {
    console.log(i)
    i += 1;
    if (i === 10) {
        break
    }
}

for (let i = 1; i < 10; i++) {
    console.log(i);
}
