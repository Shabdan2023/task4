// Задание №1
// Дан массив ["Polina", "Mirdin", "Azret", "Aliia", "Aidana"]. Выведите в консоль имена Mirdin и Aliia с помощью цикла for

let arr = ["Polina", "Mirdin", "Azret", "Aliia", "Aidana"];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "Mirdin") {
    console.log(arr[i]);
  } else if (arr[i] === "Aliia") {
    console.log(arr[i]);
  }
}

// Задание №2
// Создайте пустой массив и заполните его числами от 1 до 10 с помощью цикла for

let arr1 = [];
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Задание №3
// Выведите в консоль все числа в промежутке с 50 до 99 включительно с помощью цикла.

for (let i = 50; i <= 99; i++) {
  console.log(i);
}

// Задание №4
// Выведите те же числа, но уже в обратном порядке, т.е. с 99 до 50.

for (let i = 99; i >= 50; i--) {
  console.log(i);
}

// Задание №5
// Найдите самый длинный элемент массива и выведите в консоль
// ["pen", "pineapple", "apple", "pen"]

let word = ["pen", "pineapple", "apple", "pen"];
let longtWord = "";
for (let i = 0; i < word.length; i++) {
  if (word[i].length > longWord.length) {
    longtWord = word[i];
  }
}
console.log(`Самое длинное слово ${longestWord}`);

// Задание №6
// Так же найдите самый короткий элемент этого же массива
let word1 = ["pen", "pineapple", "apple", "pen"];
let shortWord = word1[0];

for (let i = 1; i < word1.length; i++) {
  if (word1[i].length < shortWord.length) {
    shortWord = word1[i];
  }
}

console.log(`Самое короткое слово: ${shortWord}`);

// Задание №7
// Выведите в консоль все элементы с четными индексами.
// [1,2,3,4,5,6,7,8,9]

let x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < x.length; i++) {
  if (i % 2 === 0) {
    console.log(x[i]);
  }
}

// Задание №8
// Дан двумерный массив. Выведите в консоль все элементы.
// [[1,2], [3,4], [5,6]]

let y = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (i of y) {
  for (j of i) {
    console.log(j);
  }
}

let string = "Example String";
let result;

switch (true) {
  case string.toLowerCase() === string:
    result = string.toUpperCase();
    break;
  case string.toUpperCase() === string:
    result = string.toLowerCase();
    break;
  default:
    result = string;
    break;
}

console.log(result);
console.log(string);
