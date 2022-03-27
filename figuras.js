//Este es el codigo del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: "+ladoCuadrado+ "cm")

function perimetroCuadrado(lado){
return lado*4;
}
perimetroCuadrado();


// console.log("El perimetro del cuadrado es: "+perimetroCuadrado+ "cm")

// const areaCuadrada = ladoCuadrado*ladoCuadrado;
// console.log("El área del cuadrado es: "+areaCuadrada + "cm2")
function areaCuadrada (lado){
    return lado*lado;
}
areaCuadrada();
console.groupEnd();



//Este es el codigo del triangulo
console.group("Triangulos");
// const ladotriangulo1 = 6;
// const ladotriangulo2 = 6;
// const basetriangulo = 4;
// const alturatriangulo = 5.5;
// const perimetrotriangulo = ladotriangulo1+ladotriangulo2+basetriangulo;
// const areatriangulo = (basetriangulo*alturatriangulo)/2;

// console.log(
//     "Los lados del triangulo miden: "
//     + ladotriangulo1+"cm, " 
//     + ladotriangulo2+"cm, " 
//     + basetriangulo+"cm"   
//     );
function perimetrotriangulo(lado){
return lado;
}

function areatriangulo (base, altura){
return (base*altura)/2;
}

// console.log("La altura del triangulo es de: "+ alturatriangulo);
// console.log("El perimetro del triangulo es "+ perimetrotriangulo+ "cm");
// console.log("El area del triangulo es "+ areatriangulo+ "cm2");

console.groupEnd();

//Este es el codigo del circulo
console.group("Circulos");

//radio
// const radiocirculo = 4;
// console.log("El radio del circulo es: "+radiocirculo + "cm");

// //Diametro
// const diametrocirculo = radiocirculo*2;
// console.log("El diametro del circulo es: "+diametrocirculo + "cm");
function diametrocirculo(radio){
    return radio*2
}

//PI
const PI = Math.PI; 
// console.log("PI es: "+ PI);

//Circunferencia
// const perimetrocirculo = diametrocirculo*PI;
// console.log("El perimetro del circulo es: "+perimetrocirculo + "cm");
function perimetrocirculo(hola){
    const diametro = diametrocirculo (hola);
return diametro*PI;
}

//Area
// const areacirculo = (radiocirculo*radiocirculo)*PI;
// console.log("El area del circulo es: "+areacirculo + "cm2");
function areacirculo(radio){
    return (radio*radio)*PI
};


console.groupEnd();


//Aqui interactuamos con el HTML

//CUADRADO
function calcularperimetro (){
const input = document.getElementById("inputcuadrado");
const value = input.value;
const perimetro = perimetroCuadrado(value);
alert(perimetro);
}


function calculararea (){
const input = document.getElementById("inputcuadrado");
const value = input.value;
console.log(value);
const area = areaCuadrada (value);
alert(area);
}

//TRIANGULO
function calcularperimetrotriangulo (){
const inputt = document.getElementById("inputtriangulo1");
const valuee = (inputt.value)*1;

const input = document.getElementById("inputtriangulo2");
const value = (input.value)*1;

const inputtt = document.getElementById("inputtriangulo3");
var valueee = (inputtt.value)*1;

const total= valuee+value+valueee;
console.log (total);

const area = perimetrotriangulo(total);
alert (area);
}


function calcularareatriangulo(){
const trianguloarea = document.getElementById("inputtriangulo4");
const triangulo = (trianguloarea.value)*1;

const inputtt = document.getElementById("inputtriangulo3");
var valueee = (inputtt.value)*1;

const trianguloresult = areatriangulo(valueee, triangulo);
alert(trianguloresult);
}

//CIRCULO

function perimetrocirculocalculo(){
const diametrocirculo = document.getElementById("inputcirculo");
const  value = diametrocirculo.value;
console.log(value); 

const circuloresult= perimetrocirculo(value);
alert (circuloresult);
}


function areacirculocalculo (){
let hola = document.getElementById("inputcirculo");
let holaresult = hola.value;
console.log(holaresult);
const estees = areacirculo(holaresult);
alert (estees);
}




//Altura triangulo
function alturaTriangulo ()
{   const inputt = document.getElementById("inputtriangulo1");
    const valuee = (inputt.value)*1;
    const input = document.getElementById("inputtriangulo2");
    const value = (input.value)*1;
    //base
const inputtt = document.getElementById("inputtriangulo3");
var valueee = (inputtt.value)*1;
console.log("esta es la base "+valueee);

    if (valuee != value)
    {console.error ("Los lados a y b no son iguales");
    }else   {
        console.log ("lados iguales campeon");
        let trianguloPequeñoLadoA;
        let alturadesconocida;
         const trianguloPequeñoLadoB = value;
         const trianguloPequeñoLadoBase = valueee/2;
        
         const operacionuno = value*value;
         console.log (  "La operacion 1 que es un lado es "+operacionuno );
         const operaciondos = (valueee/2) ;
         const operaciondoss = operaciondos*operaciondos;
         console.log (" la operacion 2 que es la base da "+ operaciondoss);  

         const operaciontres = operacionuno - operaciondoss;
         console.log("dio " + operaciontres);
         const operacioncuatro = Math.sqrt (operaciontres);
        console.log(operacioncuatro);
        alert(operacioncuatro);
            
            }







    }

