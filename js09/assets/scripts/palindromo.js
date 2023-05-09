const palindromo = (word) => {
    word = word.toLowerCase().split(" ").join("");
    return word === word.split("").reverse().join("")
  }
console.log(palindromo("Somos o no somos"));
module.exports = {palindromo};