//toBe hacer la importacion

const { palindromo } = require("../scripts/palindromo")

/*
Hacer pruebas unitarias a una función que
verifique  que si una palabra es palíndromo

Palíndromo: La palabra se lee igual de recha a izquierda
 y de izquierda a derecha.

 "Ana"  -> true
 "Bob"  -> true
 "Radar" -> true
 "Saoko" -> false
 "Palabra" -> false
 "Somos o no somos" -> true

*/

test("Prueba de Ana",()=>{
    expect(palindromo("Ana")).toBe(true);
});

test("Prueba de Bob",()=>{
        expect(palindromo("Bob")).toBe(true);

});
test("Prueba de Radar",()=>{
    expect(palindromo("Radar")).toBe(true);

});
test("Prueba de Saoko",()=>{
    expect(palindromo("Saoko")).toBe(false);

});
test("Prueba de Palabra",()=>{
    expect(palindromo("Palabra")).toBe(false);

});
test("Prueba de Somos o no somos",()=>{
    expect(palindromo("Somos o no somos")).toBe(true);

});