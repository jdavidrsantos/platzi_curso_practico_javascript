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
function perimetrotriangulo(lado1,lado2, base ){
return lado1+lado2+base;
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

