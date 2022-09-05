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
    let pregDos = prompt(`Perfecto ${nombre} ¿Qué servicio deseas cotizar? Desarrollo web, Branding, Marketing digital`);
    let web = "desarrollo web";
    let brand = "branding";
    let mkt = "marketing";
    let msjWeb = `Excelente ${nombre}, nosotros te contactaremos para más detalles sobre tu proyecto web`;
    let msjBrand = `Excelente ${nombre}, nosotros te contactaremos para más detalles sobre tu proyecto de branding`;
    let msjMkt = `Lo sentimos ${nombre}, por el momento no podemos cotizar este servicio, escríbenos para resolver tus dudas`;
    let fin = `¡Gracias por contactárnos`;
    const quitarServicio = [web, brand, mkt];

    quitarServicio.pop();

     if(pregUno === resConv){
        alert(conversacion);
     }else if(pregUno === resCot){
        pregDos;
     }

     if(pregDos === web){
        alert(msjWeb);
     }else if(pregDos === brand){
        alert(msjBrand);
     }else if(pregDos === mkt){
        alert(msjMkt);
     }

     alert(fin);
}
form();