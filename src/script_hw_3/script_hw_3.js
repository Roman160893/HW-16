const powerNumber =  function () {
   let putNumber;
   do {
      putNumber = +prompt('Введіть число яке будемо підносити до степеню');
   } while (!Number.isInteger(putNumber) || putNumber <= 0)
   let putPowerNumber;
   do {
      putPowerNumber = +prompt('Введіть число до якого степеню будемо підносити число');
   } while (!Number.isInteger(putPowerNumber) || putPowerNumber <= 0);
   let sumNumber = 1;
   for (let i = 0; i < putPowerNumber; i++) {
      sumNumber = sumNumber * putNumber;
   }
   alert(`Ваш результат ${sumNumber}`)
   console.log(`Ваш результат: ${sumNumber}`);
}

const changeName = function () {
   let putName = prompt(`Введіть ім'я яке будемо редагувати`);
   let corectPutName = putName.toLowerCase();
   alert(`Ваш результат: ${corectPutName[0].toUpperCase() + corectPutName.substring(1)}`)
   console.log(`Ваш результат: ${corectPutName[0].toUpperCase() + corectPutName.substring(1)}`)
}

const randomNumber =  function () {
   let firstNumber;
   do {
      firstNumber = +prompt('Введіть перше число від якого будемо шукати рандомне число');
   } while (!Number.isInteger(firstNumber) || firstNumber <= 0);
   let secondNumber;
   do {
      secondNumber = +prompt('Введіть друге число до якого ми будемо шукати рандомне число');
   } while (!Number.isInteger(secondNumber) || secondNumber < 0 || secondNumber <= firstNumber);
   let numRandom = Math.floor(Math.random() * (secondNumber - firstNumber)) + firstNumber;
   alert(`Ваше рандомне число: ${numRandom}`);
   console.log(`Ваше рандомне число: ${numRandom}`);

}

const randomPassword = function () {
   let yourPassword = prompt('Введіть довжину бажаного паролю');
   if (yourPassword === "") {
      yourPassword = 8;
   }
   let yourRandomPassword = Math.floor(Math.random() * 10 ** yourPassword);
   alert(`Ваш рандомний пароль: ${yourRandomPassword}`);
   console.log(`Ваш рандомний пароль: ${yourRandomPassword}`);
}

const deleteLetters = function () {
   let enterWord;
   do {
      enterWord = prompt("Введіть слово або речення");
   } while (enterWord === '');
   let whatLettersDelete;
   do {
      whatLettersDelete = prompt('Яку букву будемо видаляти?')
   } while (whatLettersDelete === '');
   let correctWord = enterWord.toLowerCase().replaceAll(`${whatLettersDelete}`, '');
   alert(`Ваше відредаговане слово виглядає ось так: ${correctWord}`);
   console.log(`Ваше відредаговане слово виглядає ось так: ${correctWord}`);
}

const bigNumber = function () {
   let putNumber = prompt(`Введіть число в якому будемо шукати найбільшу цифру`);
   let moreNumber = putNumber[0];
   for (let i = 0; i < putNumber.length; i++) {
      if (moreNumber > putNumber[i]) {
         continue
      } else {
         moreNumber = putNumber[i]
      }
   }
   alert(`Найбільша цифра із Вашого числа: ${moreNumber}`)
   console.log(`Найбільша цифра із Вашого числа: ${moreNumber}`);
}

module.exports = randomPassword;