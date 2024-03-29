// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////                 ARRAYS, OBJETOS Y POO                  ///////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 1. Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"] crea una función que saque por
// consola la longitud del array. Crea otra función que obtenga un elemento aleatorio del array
// y lo saque por consola.

// const ejercicio = () => { 
//     letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
//     aleatorio = parseInt(Math.random()*10)
//     console.log(letras.length, letras[aleatorio])
// }


// ejercicio ()


// 2. Crea un array con los nombres de los planetas del Sistema Solar. Crea una función que
// los liste y los saque por consola.


// const ejercicio = () => { 
//     planetas = ["Mercurio", "Venus", "Tierra", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno"]
//     planetas.forEach((item,index) => {
//         console.log((index+1) + ". -> " + item)
//     });

// }


// ejercicio ()





// 3. Dado el array javascript1 = ["DOM", "BOM", "Funciones", "Arrays"], elimina "DOM" del
// array. Añade en su lugar el elemento "Objetos". Elimina el elemento "Arrays". Añade en su
// lugar el elemento "ArraysDifíciles". Haz una copia del array que solo incluya los últimos dos
// elementos. Obtén el índice del elemento "Funciones".

// javascript1 = ["DOM", "BOM", "Funciones", "Arrays"]

// const ejercicio = (a) => { 
//     console.log(a)
//     a.splice(0,1,"Objetos")
//     console.log(`cambio del DOM por Objetos -> ${a}`)
//     a.splice(3,1,"ArraysDifíciles")
//     console.log(`cambio del Array por ArrayDifícil -> ${a}`)
//     javascript2 = a.slice(2,4)
//     console.log(`el nuevo Array es -> ${javascript2}`)
//     console.log(a.indexOf("Funciones"))
// }


// ejercicio (javascript1)


// 4. Crea una string, pásala a array y saca por consola la versión invertida de la original.
// Ejemplo= "Hola" -> [H, o, l, a] -> [a, l, o, H] -> "aloH"


// const ejercicio = () => { 
//     word = "murcielago"
//     wordS = Array.from(word)
//     wordSInv = wordS.reverse()
//     wordInv = wordSInv.join("")
//     console.log(wordInv)
// }


// ejercicio ()



// 5. Crea dos arrays de la misma longitud y una función que cree un nuevo array que intercale
// sus elementos y vacíe los arrays originales. Por ejemplo, con los arrays arrayUno = [1, 2, 3]
// y arrayDos = [4, 5, 6] el resultado debería ser [1, 4, 2, 5, 3, 6]


// list1 = [0, 2, 4, 6, 8]
// const max = list1.length
// list2 = [1, 3, 5, 7, 9]
// list3 = []
// const ejercicio = (a, b, c) => {
//     for (let i = 0; i < max; i++) {
//         c.push(a[0])
//         c.push(b[0])
//         console.log(c)
//         a.splice(0, 1)
//         console.log(a)
//         b.splice(0, 1)
//         console.log(b)
//     }
//     console.log(c)
//     console.log(a, b)
// }


// ejercicio(list1, list2, list3)





// 6. Crea un array con al menos 10 números y una función que los divida en otros dos arrays=
// uno para pares y otro para impares. A continuación, saca por consola ambos arrays
// resultantes concatenados.

// let list = [2, 6, 4, 76, 3, 5, 7, 3, 6, 2]
// let listTemp1 = []
// let listTemp2 = []
// let listFinall = []

// const ejercicio = (a, b, c, d) => {
//     for (let i = 0; i < a.length; i++) {
//         a[i] % 2 === 0
//             ? b.push(a[i])
//             : c.push(a[i])
//     }
//     d = d.concat(b, c)
//     console.log(b,c)
//     console.log(d)
// }



// ejercicio(list, listTemp1, listTemp2, listFinall)





// 7. Utilizando el array del ejercicio anterior, crea una función que saque por consola
// únicamente los números mayores que 5.


// let list = [2, 6, 4, 76, 3, 5, 7, 3, 6, 2]
// let listTemp1 = []
// let listTemp2 = []
// let listFinall = []

// const ejercicio = (a, b, c, d) => {
//     for (let i = 0; i < a.length; i++) {
//         a[i] % 2 === 0
//             ? b.push(a[i])
//             : c.push(a[i])
//     }
//     d = d.concat(b, c)
//     console.log(b, c)
//     console.log(d)
// }

// const ejercicio2 = (a) => {
//     a.forEach(item => {
//         item > 5
//             ? console.log(item)
//             : null
//     });
// }

// ejercicio2(list)





// 8. Dados los arrays javascript1 = ["DOM", "BOM", "Funciones", "Arrays"] y javascript2 =
// ["Objetos", "Arrays", "ParseInt"], crea una función que determine si se repite algún elemento
// y lo saque por consola.


// let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"]
// let javascript2 = ["Objetos", "Arrays", "ParseInt"]

// const ejercicio = (a, b) => {
//     a.forEach((item,index) => {
//         b.forEach((target,index2) => {
//             item === target
//                 ? console.log(`se repite la palabra ${item} en las posiciones ${index} de la primera lista y en ${index2} en la segunda`)
//                 : console.log(`ninguna de estas palabras se repiten -> ${item} o ${target}`)
//         })
//     });
// }


// ejercicio(javascript1, javascript2)





// 9. Imagina que estamos en una carrera y los nombres de las personas que van llegando a la
// meta se van almacenando en un array (el primero quedaría en la primera posición del array,
// el segundo en la segunda, etc.). Crea un array con por lo menos cinco nombres.
// Desestructura el array utilizando el operador rest de manera que puedas llamar al ganador,
// al segundo y al resto de competidores por separado.

// let list = ["mike", "john", "jack", "emily", "rose"]
// let [ganador, segundon, ...resto] = list

// console.log(ganador)
// console.log(segundon)
// console.log(...resto)


// 10. Crea un objeto que almacene los datos de una persona (nombre, apellidos, edad,
// dirección, ciudad, país... y lo que quieras). Crea una función que saque por consola el
// nombre completo (nombre y apellidos) de la persona a modo de string.

// let persona = {
//     nombre: "manuel",
//     apellidos: "lopera",
//     edad: "32",
//     direccion: "calle falsa 123",
//     ciudad: "Springfield",
//     pais: "landlandia"
// }

// const ejercicio = () => {
//     console.log(persona.nombre, persona.apellidos)
// }

// ejercicio()


// 11. Utiliza el objeto del ejercicio anterior y mediante desestructuración accede únicamente a
// tres de esas propiedades.


// let persona = {
//     nombre: "manuel",
//     apellidos: "lopera",
//     edad: "32",
//     direccion: "calle falsa 123",
//     ciudad: "Springfield",
//     pais: "landlandia"
// }

// let {edad,pais,...resto} = persona

// console.log(edad)
// console.log(pais)
// console.log(resto)




// 12. Crea un array que contenga al menos tres objetos con las mismas propiedades (al
// menos tres) y distintos valores. Crea una función que saque por consola el valor de una de
// las propiedades para todos los objetos.


// object1 = {
//     color: "marron",
//     numero: 2,
//     condicion: true
// }
// object2 = {
//     color: "verde",
//     numero: 3,
//     condicion: true
// }
// object3 = {
//     color: "rojo",
//     numero: 5,
//     condicion: false
// }

// let listaObjects = [object1, object2, object3]

// const ejercicio = () => {
//     // for (let i = 0; i < listaObjects.length; i++) {
//     //     console.log(listaObjects[i].color)        
//     // }
//     listaObjects.forEach(item => {
//         console.log(item.color)
//     });
// }

// ejercicio()



// 13. Crea un objeto que contenga una receta de cocina, con propiedades asignadas a su
// nombre, tiempo de preparación e ingredientes. Haz una función que saque por consola el
// nombre, el tiempo y una lista de los ingredientes.

// let receta = {
//     nombre: "pechugas a la nata",
//     tiempo: 30,
//     ingredientes: ["pechugas", "nata", "queso", "cebolla"]
// }

// const ejercicio = () => { 
//     console.log(receta.nombre)
//     console.log(receta.tiempo)
//     receta.ingredientes = receta.ingredientes.map(item=>"***" + item)
//     console.log(receta.ingredientes)
// }

// ejercicio()


// 14. Reutiliza la receta del ejercicio anterior y añádela a un array que contenga varias recetas
// similares, con las mismas propiedades. Utiliza también la función del ejercicio anterior y
// saca por consola todas las recetas de tu array.

// let receta1 = {
//     nombre: "pechugas a la nata",
//     tiempo: 30,
//     ingredientes: ["pechugas", "nata", "queso", "cebolla"]
// }
// let receta2 = {
//     nombre: "cerdo a la crema",
//     tiempo: 50,
//     ingredientes: ["cerdo", "crema", "queso azul", "calabacin"]
// }
// let receta3 = {
//     nombre: "mero al limon",
//     tiempo: 60,
//     ingredientes: ["mero", "limon", "cebolla"]
// }

// let recetas = [receta1, receta2, receta3]

// const ejercicio = () => {
//     recetas.forEach(item => {
//         console.log(item.nombre)
//         console.log(item.tiempo)
//         console.log(item.ingredientes)
//     });
// }

// ejercicio()


// 15. Haz lo mismo declarando una clase "receta" e instanciando cada una de las nuevas
// recetas. Luego añádelas a un array y reutiliza la función que habías creado en el ejercicio
// anterior para sacarlas por consola.


class recetas {
    constructor(nombre, tiempo, ingredientes) {
        this.nombre = nombre
        this.tiempo = tiempo
        this.ingredientes = ingredientes
    }

    info() {
        console.log(`se llama ${this.nombre}`)
        console.log(`tarda ${this.tiempo}'s minutos`)
        console.log(`tiene los siguientes ingredientes: ${this.ingredientes}`)
    }
}

let receta1 = new recetas(
    nombre = "pechugas a la nata",
    tiempo = 30,
    ingredientes = ["pechugas", "nata", "queso", "cebolla"]
)
let receta2 = new recetas(
    nombre = "cerdo a la crema",
    tiempo = 50,
    ingredientes = ["cerdo", "crema", "queso azul", "calabacin"]
)
let receta3 = new recetas(
    nombre = "mero al limon",
    tiempo = 60,
    ingredientes = ["mero", "limon", "cebolla"]
)


const ejercicio = () => {
    receta1.info()
    receta2.info()
    receta3.info()
}

ejercicio()