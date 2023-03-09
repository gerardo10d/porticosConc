//Progamacion vigas
//Datos de entrada
//funcion captura de datos de formulario 

function calcularArea() {
  // Obtiene el valor de los inputs con los id
  let anchoEdificio = document.getElementById("anchoEdificio").value;
  let largoEdificio = document.getElementById("largoEdificio").value;

  // Realiza el cálculo del área del edificio
  let areaEdificio = anchoEdificio * largoEdificio;

  // Actualiza el valor del input de resultado
  document.getElementById("areaEdificio").value = areaEdificio;
}


// alert("Bienvenidos");
console.log("Resistencia de la viga")
let phi = 0.9;
let As = 400;
let fy = 420;
let d = 402;
let constante = 1.7;
let fc = 28;
let b = 250;
//Areas de varillas
let N5 = 200;
let N6 = 284;
Mn = (phi*As*fy)*(d-(fy*As)/(constante*fc*b));
Mn = Number(Mn.toFixed(2));
console.log(Mn, "Newtons");
Mnn = Mn/1000000
Mnn = Number(Mnn.toFixed(2));
console.log(Mnn, "Kilonewtons");

//parte superior de la viga
console.log("Parte superior de la viga")
//dato de entrada momento maximo parte superior
Mus = 87.36*(10^6);
//comparar Mn mayor Mu
if (Mnn > Mus) {
    console.log("Si cumple");
}else {
    console.log("No cumple");
}
//si lo anterior no cumple se recalcula el area de acero
console.log("Como no cumple, se recalcula el area del acero");

var n = 0;
var x = 0;
while (n <= 607) {
  n++;
  x=(phi*n*fy)*(d-((fy*n)/(constante*fc*b)));
}
console.log("As =", n, "mm^2")
//Numero de varillas
console.log("Se calcula el numero de varillas")
let Nvars = Math.ceil(n/N5)
console.log("No. varillas =", Nvars)
//Acero suministrado
console.log("Acero suministrado")
let Asums = N5*Nvars
console.log("Acero suministrado =", Asums)

//parte inferior de la viga
console.log("Parte inferior de la viga")
Mui = 67.15*(10^6);
//comparar Mn mayor Mu
if (Mnn > Mui) {
    console.log("Si cumple");
}else {
    console.log("No cumple");
}
//si lo anterior no cumple se recalcula el area de acero
console.log("Como no cumple, se recalcula el area del acero");

var n = 0;
var x = 0;
while (n <= 460) {
  n++;
  x=(phi*n*fy)*(d-((fy*n)/(constante*fc*b)));
}
console.log("As =", n, "mm^2")
//Numero de varillas
console.log("Se calcula el numero de varillas")
let Nvari = Math.ceil(n/N6)
console.log("No. varillas =", Nvari)
//Acero suministrado
console.log("Acero suministrado")
let Asumi = N6*Nvari
console.log("Acero suministrado =", Asumi)

//Conclusiones
console.log("El resultado de la viga es de la siguiente manera:")
console.log("Parte superior", Nvars, N5, "y As =", Asums, "mm^2")
console.log("Parte inferior", Nvari, N6, "y As =", Asumi, "mm^2")


//ciclo while
/*
let i = 0;
while(i<10)
{
   resultado=(phi*i*fy)-(d-((fy*i)/(constante*fc*b)));
   console.log(resultado);
}*/




