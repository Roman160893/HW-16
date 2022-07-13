export function* createIdGenerator() {
   for (let i = 1; ; i++) {
      yield i
   };
}

const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);



// Функція зміни шрифту


function* newFontGenerator(el) {
   for (let i = 1; ; i++) {
      let fontSize = yield el;
      if (fontSize === 'up') {
         el += 2
      } else if (fontSize === 'down') {
         el -= 2
      }
   }
}

let ip = newFontGenerator(14);
