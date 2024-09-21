// 변수와 값
// 문자열, 숫자, 불(참, 거짓)
// is_student: 파이썬, ...
// isStudent: 자바스크립트, 타입스크립트, ...
// IsStudent: 자바, c#, ...
name1 = "이승현"
age1 = 11
isStudent1 = true

name2 = "삼승현"
age2 = 31
isStudent2 = false

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
