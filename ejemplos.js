/*
if (1 + 1 === 2) {
    
    console.log('La expresion es verdadera') }
    */



/*
    if (false) {
    console.log('Este código será omitido');
} else if (true) {
    console.log('Este código correrá');
} else if (true) {
    console.log('Este código NO correrá');
}
*/
/*
if (false) {
    console.log('Este código será omitido');
} else if (false) {
    console.log('Este código NO correrá');
} else {
    console.log('Este código correrá');
}
*/

/*
if (100 > 10 && 10 === 10) {
    console.log('100 > 10 && 10 === 10' + ' ' + 'Ambas declaraciones son ciertas, este código se ejecutará');
}

if (10 === 9 && 10 > 9) {
    console.log('Una de las declaraciones es false, por lo que && devolverá false, y este código no se ejecutará');
}
*/
/*
if (100 > 10 || 10 === 10) {
    console.log('Ambas declaraciones son ciertas, este código se ejecutará');
}

if (10 === 9 || 10 > 9) {
    console.log('Una de las declaraciones es true, por lo que || devolverá true y este código se ejecutará');
}

if (10 === 9 || 1 > 9) {
    console.log('Ambas declaraciones son falsas, por lo que || devolverá false y este código no se ejecutará');
}
*/
/*
if (!false) {
    console.log('El ! devolverá true, porque es lo contrario de false, así que ste código se ejecutará');
}
*/
/*
if (!(1 === 1)) {
    console.log('1 es igual a 1, de modo que la expresión devuelve true. El operador ! devolverá lo contrario de eso, por lo que este código NO se ejecutará');
}
*/
/*
    ciclo del 1 al 10
for (let i = 1; i < 11; i++) {
    // | Declaramos una variable | Expresión condcicional | Incrementamos la variable |
    console.log(i);
}
*/
//ciclo infinito
/*
for (let i = 0; i >= 0; i++) {
    console.log(i);
}
*/
/*
function log(str) {
    console.log(str)
}
log('hola!') <
    'hola!'
    */

/*
function args() {
    console.log(arguments)
}

args('hola!', 'otro parametro', 3)
["hola!", "otro parametro", 3, callee: 'function', Symbol(Symbol.iterator): 'function']
*/
/*
if (false) {
    console.log('Este código será omitido');
} else if (true) {
    console.log('Este código correrá');
} else if (true) {
    console.log('Este código NO correrá');
}
*/
/*
if (1 === 0 || 1 > 2) {
    console.log("el calculo final es true");
} else console.log("El calculo final es false");
*/
//for anidados en forma de matriz
function imprimirNumeros(n, m) {

    for (i = 0; i <= n; i++) {
        for (j = 0; j <= m; j++) {
            console.log(i + " " + j)
        }
    }

}
imprimirNumeros(2, 2)