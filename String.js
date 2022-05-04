// const myStr = "Lutfiyar";

// for (let i = 0; i < myStr.length; i++) {
//   console.log(`letter ${myStr[i]}: ${myStr.charCodeAt(i)}`);
// }

const str1 = "Hello Evez, how are you? Evez";
const str2 = "World";

// console.log(str1.concat(',', str2));

// console.log(String.fromCharCode(116))

// console.log(str1.includes("o"));
// console.log(str1.lastIndexOf("Evez"));

// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[a-z,A-Z,1-9]/g;
// const found = paragraph.match(regex);

// console.log(found);

// const regexp = /t(e)(st(\d?))/g;
// const str = 'test1test2';

// const array = [...str.matchAll(regexp)];

// console.log(array)

// const name1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";

// console.log(name1.normalize("NFKC"));

// const str = "Lorem";

// console.log(str.padEnd(str.length + 3, "."));

// const last4digits = "4157";

// console.log(last4digits.padStart(16, "*").length);

// const myStr = "Test fikir ver";

// console.log(myStr.repeat(100));

// console.log(myStr.replaceAll(/[ ]/g, ","))

// const paragraph =
//   "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

// const regex = /[^\w\s]/g;

// console.log(paragraph.search(regex));

// console.log(paragraph.substring(3, 10))

// const myNum = 1;

// console.log(typeof myNum)

const greeting = "   Hello                    world!   ";

// console.log(greeting.trim())

String.prototype.trimCenter = function () {
  const myStr = this.trim().split("");
  let isSpaceFound = false;

  return myStr
    .filter((element) => {
      if (!isSpaceFound && element === " ") {
        isSpaceFound = true;

        return element;
      }

      if (element !== " ") {
        return element;
      }
    })
    .join("");
};
