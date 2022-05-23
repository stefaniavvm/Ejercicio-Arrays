//pop() 
//no admite parámetros. Elimina el último elemento del array.

//**PUSH**
//Entre los paréntesis se pueden añadir tantos valores como se quiera añadir a  el array, separados por comas (`,`). 
//Añade un elemento al array en última posición.

//**REVERSE**
//`reverse()` tampoco admite parámetros. Invierte el orden del array.

//**SHIFT**
//`shift()` funciona como `pop()`, pero extrayendo del array el primer elemento.
//Como se ve, todos los índices de la matriz se actualizan.

//**SORT**

//`sort()` ordena los elementos del array, tal y como ordena los nombres de archivo un ordenador, es decir:

//- Los valores como los de esta matriz se ordenan por orden alfabético.
//- Si la matriz consiste en una serie de números, estos se ordenan según las cifras más a la izquierda, de menor a mayor. 
//Así, por ejemplo, una matriz que consista en `200,35,40,1`, no se ordenará según el valor de las cifras —`1,35,40,200`—, 
//sino que `sort()` devolverá `1,200,35,40`.

//**SPLICE**

//`splice()` es un método especial, cuyo comportamiento depende de los parámetros que se le asignen:

//- El **primer parámetro** es un **número** que representa el **índice** desde el que tiene que **empezar a modificar la matriz**.
//- El **segundo** es otro **número** que indica el número de **elementos** que debe **eliminar** o **sustituir**, contando el inicial (por ello un valor de `0` no modifica nada en absoluto).
//- Tras estos dos parámetros, se puede incluir una **lista de elementos** separados por comas:
  //  - Si **no** se incluye ningún **elemento**, `splice()` simplemente **elimina** tantos elementos como se han indicado en el segundo parámetro, tomando como índice inicial el primer parámetro.
  //- Si se **incluyen** **menos elementos** que el valor del **segundo parámetro**, **rellena los «huecos»** disponibles hasta quedarse sin valores, **y elimina los que faltan**.
 //- Si **se incluyen más elementos** que el valor del **segundo parámetr**o, primero **elimina los indicados**, y luego **inserta todos los elementos** proporcionados entre el anterior y el posterior a la sección eliminada. 

 //METODOS QUE NO MODIFICAN EL ARRAY.
  
 //Concat.
 // Une dos o mas array y crea un array nuevo.

 //**JOIN**
 //Empleado sin un parámetro, `join()` devuelve una mera cadena en la que los valores del array están separados por comas.
 // Sin embargo, se puede especificar una cadena que sirva como separador:

 //Slice.
 //Extrae una copia de una seccion especifica del array sin modificarlo realmente.

 //Tostring.

 //FUNCIONES DE JS.

 //sintaxis : function yourName (){
//  alert('esto es un alert');
// }alert(nos muestra un mensaje en el navegador)

//yourName();

//Promt: es una alerta pero podemos escribir el texto que queramos que aparezca.
//EJEMPLO:
//function yourName() {
  //prompt('Cual es tu nombre');
//}
//yourName();

//CONDICIONES O STATEMENT.

//IF
//La sentencia if(...) evalúa la condición en los paréntesis, y si el resultado es true ejecuta un bloque de código.
//let marvelQuestion = prompt('¿Nombre de Iron Man?', '');

//if (marvelQuestion == 'Tony Stark') alert( '¡Woh, eres un marvelita!' );

