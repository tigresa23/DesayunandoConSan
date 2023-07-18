

// ------  PAN  ----------------

// llamo a los HTML elements 
// creando una variable "var rodaja" e igualandola a un elemento por el id "pan"
//esa sera la variable a la cual le iré cambiando la propiedad src.
//luego creo otra variable "var panEntero"  que será la que iniciaré e irá incrementando el valor
// y la cual utilizaré para verificar las rodajas e ir agregando las imagenes correspondientes.
  
var rodaja = document.getElementById("pan");
var panEntero = "panEntero";
//cada vez que yo haga clic en la img con el id "pan"
//se llamará al evento onclick
//y este va a lanzar una función 
//que se encargará de cambiar el atributo src
//del elemento con el id "pan"
rodaja.onclick = function() { 
    if( panEntero == "panEntero" ) {
        rodaja.src = "img/panLactal1.png";
        panEntero = "rodaja1";
        } else if  ( panEntero == "rodaja1" ) {
                  rodaja.src = "img/panLactal2.png";
                  panEntero = "rodaja2";
                }  else if  ( panEntero == "rodaja2" ) {
                        rodaja.src = "img/panLactal3.png";
                        panEntero = "rodaja3";
                         }  else if  ( panEntero == "rodaja3" ) {
                                  rodaja.src = "img/panLactal4.png";
                                  panEntero = "rodaja4";
                               } else if  ( panEntero == "rodaja4" ) {
                                       rodaja.src = "img/panLactal5.png";
                                       panEntero = "rodaja5";
                                     } else if  ( panEntero == "rodaja5" ) {
                                              rodaja.src = "img/panLactal6.png";
                                              panEntero = "rodaja5";
                                             }

}
  
    
   
//-------



// ------  SARTEN  ----------------
// La sarten tiene tres estados sartenMesa  sartenHuevos sartenCocina
//cuando yo haga clic en los huevos se reproducira unas imágenes en sartenMesa
//cuando yo haga clic en sartenMesa aparecerá unas imágenes en sartenCocina
//y con otro clic en sartenCocina, la sarten regresa a sartenMesa


var sarteneando = "no";
var sartear = document.getElementById("sartenCocina");

function sartendoraCocina() {
    if(sarteneando == "no") {
        sarteneando= "si";

//en este caso, le voy a pedir que me agregue la clase active
// y para eso utilizo la propiedad classList
//cuando se agregue la clase active, se va a cambiar la imagen
       sartear.classList.add("active");
    } else {
       sarteneando = "no"
// y cuando vuelva a hacer click, se remueva la clase active, 
//y regrese la imagen original.
       sartear.classList.remove("active");
    }
} 


// ------  PAVA ----------------

var paveando = "no";
var pavar = document.getElementById("pavaCocina");

function pavadoraCocina() {
    if(paveando == "no") {
        paveando = "si";

//en este caso, le voy a pedir que me agregue la clase active
// y para eso utilizo la propiedad classList
//cuando se agregue la clase active, se va a cambiar la imagen
        pavar.classList.add("active");
    } else {
        paveando = "no"
// y cuando vuelva a hacer click, se remueva la clase active, 
//y regrese la imagen original.
        pavar.classList.remove("active");
    }
} 



// ------  LICUADORA ----------------

var licuando = "no";
var licuar = document.getElementById("licua");

function licuadora() {
    if(licuando == "no") {
        licuando = "si";

//en este caso, le voy a pedir que me agregue la clase active
// y para eso utilizo la propiedad classList
//cuando se agregue la clase active, se va a cambiar la imagen
        licuar.classList.add("active");
    } else {
        licuando = "no"
// y cuando vuelva a hacer click, se remueva la clase active, 
//y regrese la imagen original.
        licuar.classList.remove("active");
    }
} 