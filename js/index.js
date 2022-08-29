let nombre = prompt("Ingresa tu nombre");

function inicio() {
    let bienvenida = `Bienvenido ${nombre}`;
    alert(bienvenida);
}
inicio();

function form() {

    let pregUno = prompt(`Hola ${nombre}¿Solo quieres conversar o deseas cotizar un proyecto?`);
    let resConv = "conversar";
    let resCot = "cotizar";
    let conversacion = `Muy bien ${nombre}, ¡Escríbenos!`;
    let pregDos = prompt(`Perfecto ${nombre} ¿Qué servicio deseas cotizar? Desarrollo web, Branding, Marketing digital`)
    let web = "desarrollo web";
    let brand = "branding";
    let mkt = "marketing";
    let fin = `Excelente ${nombre}, nosotros te contactaremos para más detalles`;

     if(pregUno === resConv){
        alert(conversacion);
     }else if(pregUno === resCot){
        pregDos;
     }

     if(pregDos === web){
        alert(fin);
     }else if(pregDos === brand){
        alert(fin);
     }else if(pregDos === mkt){
        alert(fin)
     }
}
    
form();

 /* while(pregUno === resConv){
        alert(conversacion);
    }
    while(pregUno === resCot){
        pregDos
    }
    while(pregDos === " "){
        alert(fin)
    } */

   /*  if(pregUno === resConv){
        alert(conversacion);
    }else(pregUno === resCot){
        pregDos === web(alert(fin));
        }else{
        pregDos === brand(alert(fin));
            }else{
                pregDos === mkt(alert(fin));
            }  */