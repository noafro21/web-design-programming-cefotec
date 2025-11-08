


console.log("Práctica JavaScript");

// Comentario
// alert("Iniciar");

/*

Comentarios en varias líneas

*/

// Variables y Tipos de Datos

var nombrePersona = "Pedro Salas";

var nombreOtraPersona = 'José Salas';
console.log("Valor de nombrePersona: " + nombrePersona + ' - nombreOtraPersona: ' + nombreOtraPersona);

var nombreMascota;
nombreMascota = "Puppy";
console.log(nombreMascota);
nombreMascota = "Puppy2";
console.log(nombreMascota);

var saludo = "hola";
console.log(saludo);
var numero = 3;

console.log(numero);

var saludo = "Hola!";
console.log(saludo);

let nuevosaludo = "HOLA";
console.log(nuevosaludo);
nuevosaludo = "HOLA!";
console.log(nuevosaludo);

// Constantes

const cantidadSucursales = 4;
console.log(cantidadSucursales);
// cantidadSucursales = 3;
// console.log(cantidadSucursales);

const visibilidadFormulario = true; // false
console.log(visibilidadFormulario);

// Ejemplo de asignar diferentes tipos de datos al valor de la variable

let texto = "Mensaje";
console.log(texto);
texto = 10;
console.log(texto);

// Operadores aritméticos + - 

let num1 = 30;
let num2 = 20;
let resultado;

resultado = "Resultado " + (num1 + num2);
console.log("El resultado de la suma es: " + resultado);

resultado = num1 - num2;
console.log("El resultado de la resta es: " + resultado);

resultado = num1 * num2;
console.log("El resultado del producto es: " + resultado);

resultado = num1 / num2;
console.log("El resultado de la división es: " + resultado);

resultado = num1 % num2;
console.log("El resultado del resto es: " + resultado);

resultado = resultado * 2;
console.log("El resultado es: " + resultado);

//Operadores lógicos
let estadoActivo = resultado >= 30;
console.log(estadoActivo);

estadoActivo = resultado <= 20;
console.log(estadoActivo);

//Estructura de control condicional

// 1. condicionales if, else if, else switch

let nota = 69;

if (nota >= 70) {
    console.log("Aprobado");
}
else{ 
    console.log("Reprobado");
}



if(nota >= 70)
{
    // true verdadero
    console.log("Nota aprobada!");

    if(nota >= 90)
    {
        console.log("Nota alta!");
    }

} else if(nota >= 50)
{
    // true verdadero (nota >= 50)
    // false falso (nota >= 70)
    console.log("Requiere prueba adicional!");
}
else
{
    // false falso
    console.log("Nota no aprobada!");
}
  

switch(nota){
    case 100:
        console.log("*Nota alta aprobada!");
        
        break;
    case 70:
        console.log("*Nota aprobada!");
        break;
    case 50:
        console.log("*Requiere prueba!");
        break;
    case 40:
        console.log("*Nota no aprobada!");
        break;
    default:
        console.log("*Nota no identificada");
        break;
}


nota = 95;

switch(true){    
    case nota >= 90:
        console.log("**Nota alta aprobada!");        
        break;
    case nota >= 70:
        console.log("**Nota aprobada!");
        break;
    case nota >= 50:
        console.log("**Requiere prueba!");
        break;
    case nota < 50:
        console.log("**Nota no aprobada!");
        break;
    default:
        console.log("**Nota no identificada");
        break;
}




for(let i = 0; i < 10; i++)
{
    console.log("Valor de i: " + i);
}


let contador = 11;

while(contador <= 10){
    console.log("WHILE Valor de contador: " + contador);
    contador = contador + 2;
}

contador = 11;

do {
    console.log("DO WHILE Valor de contador: " + contador);
    contador = contador + 2;
} while(contador <= 10);


// Manejador de errores

let a = 100;
let b = 0;
let c;

try {

    if(b == 0)
    {
        throw new Error("División entre 0");
    }

    if(a != 20)
    {
        throw new Error("Valor de a incorrecto");
    }

} catch (error) {
    console.log(error.message);
} finally{

    console.log("Fin del programa.");

}


// Otros tipos de datos

// Arreglos

let arregloElementosTexto = ["Pedro", "Rebeca", "Laura"];
console.log(arregloElementosTexto);

arregloElementosTexto = ["Elemento A", 1, true];
console.log(arregloElementosTexto);

arregloElementosTexto[1] = false;
console.log(arregloElementosTexto);


let nuevoArreglo = [];

nuevoArreglo[0] = "Elemento 1";
nuevoArreglo[1] = "Elemento 2";
nuevoArreglo[3] = "Elemento 3";
console.log(nuevoArreglo);


const temas = ["HTML", "CSS", "JavaScript"];

for(let p = 0; p < temas.length; p++)
{
    console.log("Elemento Posición: " + p + " Valor: " + temas[p]);    
    document.writeln("* Elemento Posición: " + p + " Valor: " + temas[p]);
}

temas.forEach(function(tema, index){
    document.writeln("** Elemento Posición: " + index + " Valor: " + tema);
});
   