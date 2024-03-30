/*Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".*/

const str = 'Hellow';
const newStr = str.split('').reverse().join('');

console.log(newStr)
