
//-------
// ------  PAN  -----------------------------------------------------------------------------------

// llamo a los HTML elements 
// creando una variable "var rodaja" e igualandola a un elemento por el id "pan"
//esa sera la variable a la cual le iré cambiando la propiedad src.
//luego creo otra variable "var panEntero"  que será la que iniciaré e irá incrementando el valor
// y la cual utilizaré para verificar las rodajas e ir agregando las imagenes correspondientes.
  
var rodaja = document.getElementById("pan");
var audioCortarRodajas = document.getElementById("audioRodaja");

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
        activarAudioPan();
        } else if  ( panEntero == "rodaja1" ) {
                  rodaja.src = "img/panLactal2.png";
                  panEntero = "rodaja2";
                  activarAudioPan();
                }  else if  ( panEntero == "rodaja2" ) {
                        rodaja.src = "img/panLactal3.png";
                        panEntero = "rodaja3";
                        activarAudioPan();
                         }  else if  ( panEntero == "rodaja3" ) {
                                  rodaja.src = "img/panLactal4.png";
                                  panEntero = "rodaja4";
                                  activarAudioPan();
                               } else if  ( panEntero == "rodaja4" ) {
                                       rodaja.src = "img/panLactal5.png";
                                       panEntero = "rodaja5";
                                       activarAudioPan();
                                     } else if  ( panEntero == "rodaja5" ) {
                                              rodaja.src = "img/panLactal6.png";
                                              panEntero = "rodaja5";
                                              activarAudioPan();
                                             }
}

//esta función reproduce y detiene el audio de la pava
// si el audio esta en pausa, entonces que lo reproduzca, 
// y si el audio se esta reproduciendo que lo detenga.
function activarAudioPan(){ 
    if(audioCortarRodajas .paused ){ // paused es una propieda de js, que devuelve true o false, según sea el caso 
        audioCortarRodajas .play(); // inicia el audio del pan
    } else {
        audioCortarRodajas.pause(); // detiene el audio  
        audioCortarRodajas.currentTime = 0; // deje reiniciado el audio del pan
    }
}



//-------
// ------  HUEVOS  -----------------------------------------------------------------------------------

// Al hacer clic sobre los huevos, un huevo se romperá sobre la sartén y dara lugar a cocinar el huevo
// y colocarlo cocido sobre un plato.
// establecer las variables que voy a necesitar.
// crear el evento de tomar un huevo y romperlo sobre la sarten.
// crear la función que inicia cocinar el huevo y dejarlo en el plato.

 
// variables
var tomarHuevos = document.getElementById("tomar-huevo"); // tomar un huevo para romperlo
var cocinando = document.getElementById("sartenCocina"); 
var plato = document.getElementById("plato"); // ir colocando los huevos cocinados en el plato
// es esta var plato a la que se le irá cambiando la propiedad src de la img
var botonSarten = document.getElementById("boton-sarten");
var audioFrituras = document.getElementById("audioFrituras");
var botonCocinaSarten = document.getElementById("botonCocina");
var romperHuevos = document.getElementById("audioRomperHuevos");

var huevosRotos = "no";
var sartenVacia = "si";
var i = 0; // RECORDAR que fue necesario colocar la var=i antes de la var=platoConHuevos
var platoConHuevos = i ; // contar cuantos huevos van cocinados (solo necesito cocinar 4 huevos)
 
// clic sobre los huevos
// evento que inicia el gif que rompe un huevo sobre la sarten
tomarHuevos.onclick = function() { 
    if( huevosRotos == "no" && sartenVacia == "si" && (platoConHuevos < 4)) {
        cocinando.src = "img/romperHuevo.gif"; // archivo de huevos rompiendose
        huevosRotos = "si";
        sartenVacia = "no";
        activarAudioRomperHuevos ();
        } 
} 

//esta función reproduce y detiene el audio de las frituras
// si el audio esta en pausa, entonces que lo reproduzca, 
// y si el audio se esta reproduciendo que lo detenga.
function activarAudioRomperHuevos (){ 
    if(audioFrituras.paused ){ // paused es una propieda de js, que devuelve true o false, según sea el caso 
        romperHuevos.play(); // inicia el audio
    } else {
        botonCocinaSarten.play(); // inicia el audio del boton de la cocina 
        romperHuevos.currentTime = 0; // deje reiniciado el audio
    }
}




//botones de la cocina
// cuando haga clic sobre el boton-sarten cambiará la propiedad src del id sartenCocina
// función que inicia el gif del huevo cocinandose 
function cocinarSarten() { 
    var nombreImagen = "img/plato";  // Resulta que la imagen de los platos depende del valor
// de la variable i, puesto que cuando i=0 se mostrará la imagen plato0.png, 
//cuando i=0 se mostrará la imagen plato0.png,
//cuando i=0 se mostrará la imagen plato0.png, 
//etc...
//entonces establezco una variable nombreImagen cuyo valor depende de i
// ya que en la parte del else if de la function cocinarSarten()
// suceden dos ejecuciones:
//nombreImagen+= i;   (suma al valor i al final del valor de la variable nombreImagen)
//nombreImagen+=".png"; (suma al valor ".png"  al final del valor de la variable nombreImagen)
// y con esto ya se irá cambiando la propiedad src de la variable plato. 

//es importante inicializar primero  var nombreImagen 
// dentro de la función porque si no el valor de la variable va sumando cosas inecesarias.
     if( sartenVacia == "no" && huevosRotos == "si") {
        cocinando.src = "img/sartenConHuevosGIF.gif"; // archivo de huevos cocinandose
        botonSarten.src = "img/on.png";
        huevosRotos = "no";
        sartenVacia = "no";
        platoConHuevos = i;
        activarAudioSarten(); // llamando a la función que reproduce el audio de la frituras 

      } else if( sartenVacia == "no" && huevosRotos == "no") {
           cocinando.src = "img/sartenConHuevos1.png"; // archivo de sarten vacía
           i = i + 1; // la variable i se incrementa una unidad
           nombreImagen+= i; // suma al valor de la variable nombreImagen
           nombreImagen+=".png";
           //plato.src = "img/plato1.png";
           plato.src = nombreImagen;
           botonSarten.src = "img/off.png";
           huevosRotos = "no";
           sartenVacia = "si";
           platoConHuevos = i ;
           activarAudioSarten(); // llamando a la función que detiene el audio de la frituras 
           }  
}

//esta función reproduce y detiene el audio de las frituras
// si el audio esta en pausa, entonces que lo reproduzca, 
// y si el audio se esta reproduciendo que lo detenga.
function activarAudioSarten (){ 
    if(audioFrituras.paused ){ // paused es una propieda de js, que devuelve true o false, según sea el caso
        botonCocinaSarten.play(); // inicia el audio del boton de la cocina
        audioFrituras.play(); // inicia el audio
    } else {
        botonCocinaSarten.play(); // inicia el audio del boton de la cocina
        audioFrituras.pause(); // detiene el audio 
        audioFrituras.currentTime = 0; // deje reiniciado el audio
    }
}
 
//-------
// ------  PAVA  -----------------------------------------------------------------------------------
 
// establecer las variables que voy a necesitar.
// crear la función que inicia cocinar pava y que finaliza con tazas llenas de café.

//variables
var pavacocina = document.getElementById("pavaCocina");
var tazasmesa = document.getElementById("tazasVacias");
var botonPava = document.getElementById("boton-pava")
var audioPava = document.getElementById("audioPava");
var botonCocinaPava = document.getElementById("botonCocina");

var pavaCociandose = "no";
var tazasLlenas = "no";

//botones de la cocina
// al hacer clic sobre el boton-pava
// se activa una función que cambia archivos:
// la imagen.png será reemplazada por el archivo.gif
// función que inicia y detiene el gif de la pava cocinandose
function cocinarPava() {
    if( pavaCociandose == "no" && tazasLlenas == "no") {
        pavacocina.src = "img/tetera.gif";
        botonPava.src = "img/on.png";
        pavaCociandose = "si";
        tazasLlenas = "no";
        activarAudioPava(); // llamando a la función que reproduce el audio de la pava


        } else if ( pavaCociandose == "si" && tazasLlenas == "no" ) {
                  pavacocina.src = "img/tetera11.png";
                  tazasmesa.src = "img/tazasLlenas.png";
                  botonPava.src = "img/off.png";
                  pavaCociandose = "no"; 
                  tazasLlenas = "si";
                  activarAudioPava(); // llamando a la función que reproduce el audio de la Pava
                  }  
}

//esta función reproduce y detiene el audio de la pava
// si el audio esta en pausa, entonces que lo reproduzca, 
// y si el audio se esta reproduciendo que lo detenga.
function activarAudioPava (){ 
    if(audioPava.paused ){ // paused es una propieda de js, que devuelve true o false, según sea el caso
        botonCocinaPava.play(); // inicia el audio del boton de la cocina
        audioPava.play(); // inicia el audio de la pava
    } else {
        audioPava.pause(); // detiene el audio 
        botonCocinaPava.play(); // inicia el audio del boton de la cocina
        audioPava.currentTime = 0; // deje reiniciado el audio
    }
}



//-------
// ------  LICUADORA  -----------------------------------------------------------------------------------
//cuando haga clic sobre la licuadora
// la función licuadora iniciara un gif
//  pero cuando yo vuelva a hacer clic sobre la licuadora
// se mostrara una licuadora vacía y aparecerán vasos llenos

// por lo tanto primero tengo que arrancar la función que da inicio al gif
// luego arrancar una función que finalizará el gif y mostrará una imagen de vasos llenos.

// variables 
var licuar = document.getElementById("licua"); // comienza con una img de licuadora quieta y vacía 
var vasos = document.getElementById("naranjas") // comienza con una img de vasos vacíos 
var botonLicuadora = document.getElementById("botonLicuadora");
var audioLicuadora = document.getElementById("audioLicuadora");

var licuando = "no";
var vasosLlenos = "no";



// función que inicia el gif
function licuadora() {
    if(licuando == "no" && vasosLlenos == "no") {
        licuando = "si";
        vasosLlenos = "no";
//en este caso, le voy a pedir que me agregue la clase active
// y para eso utilizo la propiedad classList
//cuando se agregue la clase active, se va a cambiar la imagen
        licuar.classList.add("active");
        activarAudioLicuadora ();
    } else if (licuando == "si" && vasosLlenos == "no"){
        licuando = "no";
        vasosLlenos = "si";
        vasos.src = "img/vasosLLenos.png"; //cambia la propiedad src a vasos llenos
// y cuando vuelva a hacer click, se remueva la clase active, 
//y regrese la imagen original.
        licuar.classList.remove("active");
        activarAudioLicuadora ();
    }
} 


function activarAudioRomperHuevos (){ 
    if(audioFrituras.paused ){ // paused es una propieda de js, que devuelve true o false, según sea el caso 
        romperHuevos.play(); // inicia el audio
    } else {
        botonCocinaSarten.play(); // inicia el audio del boton de la cocina 
        romperHuevos.currentTime = 0; // deje reiniciado el audio
    }
}

 
//esta función reproduce y detiene el audio de la licuadora
// si el audio esta en pausa, entonces que lo reproduzca, 
// y si el audio se esta reproduciendo que lo detenga.
function activarAudioLicuadora (){ 
    if(audioLicuadora.paused ){ // paused es una propiedad de js, que devuelve true o false, según sea el caso
        botonLicuadora.play(); // inicia el audio del boton de la licuadora
        audioLicuadora.play(); // inicia el audio de la licuadora
    } else {
        audioLicuadora.pause(); // detiene el audio de la licuadora
        botonLicuadora.play(); // inicia el audio del boton de la licuadora
        audioLicuadora.currentTime = 0; // deje reiniciado el audio de la licuadora
    }
}
 