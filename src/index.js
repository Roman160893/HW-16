import "./style/style.css";
import logMaxNumber from "./script_hw_1/script_hw_1.js";
import randomPassword from "./script_hw_3/script_hw_3.js";
import { boyAndGirl } from "./script_hw_4/script_hw_4.js";
import filterEvenNumbers from "./script_hw_5/script_hw_5.js";
import { calculateWordLetters } from "./script_hw_6/script_hw_6.js";
import { getMyTaxes } from "./script_hw_7/script_hw_7.js";
import getRandomChinese from "./script_hw_11/script_hw_11.js";
import { createIdGenerator } from "./script_hw_13/script_hw_13.js";
import boyImg from "./img/man.jpg";

const img = document.querySelector('.img')
const innerIMG = document.createElement('img');
innerIMG.setAttribute('src', boyImg);

img.insertAdjacentHTML('afterbegin', `<p> Homework- 16 </p>`);
img.append(innerIMG);

const calcSumAPlusB = (a = 5, b = 5) => {
   return a + b
}

console.log(calcSumAPlusB());

logMaxNumber;
randomPassword;
boyAndGirl();
filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(calculateWordLetters('тест'));
getMyTaxes;
getRandomChinese(4);
createIdGenerator;