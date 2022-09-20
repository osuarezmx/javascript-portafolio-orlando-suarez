//Bienvenida
/* let nombrePers = prompt("Ingresa tu nombre");


function inicio() {
    let bienvenida = `Bienvenido ${nombrePers}`;
    alert(bienvenida);
} */

//Variables
/* let total=0, precioServicio=0;
let miCompra = [], totalPagar, posicion = 0, compra="Servicios a cotizar\n";
let fin = `Gracias por contactarnos ${nombrePers}, nosotros nos pondremos en contacto contigo para más detalles.` */


//Servicios agrupados
/* const servicios = [
    {nombre: "diseño y desarrollo web", precio:16000},
    {nombre: "ui/ux", precio:10000},
    {nombre: "tiendas digitales", precio:18000},
    {nombre: "logo", precio:6500},
    {nombre: "naming", precio:4500},
    {nombre: "guia de identidad", precio:8000},
    {nombre: "packaging", precio:12500},
    {nombre: "materiales impresos", precio:4200},
    {nombre: "estrategia de marketing", precio:22800},
    {nombre:"redes sociales", precio:6200},
    {nombre:"publicidad digital", precio:5200},
]; */

// Proyectos


// Servicios
const servicios = [
    {id:4, nombre: "Desarrollo web", precio:16000},
    {id:5, nombre: "Branding", precio:10000},
    {id:6, nombre: "Marketing", precio:18000},
];

const serviciosWeb = [
    {id:7, nombre: "diseño y desarrollo web", precio:16000},
    {id:8, nombre: "ui/ux", precio:10000},
    {id:9, nombre: "tiendas digitales(e-commerce)", precio:18000},
];
const serviciosBrand = [
    {id:10, nombre: "logo", precio:6500},
    {id:11, nombre: "naming", precio:4500},
    {id:12, nombre: "guia de identidad", precio:8000},
    {id:13, nombre: "packaging", precio:12500},
];
const serviciosMkt = [
    {id:14, nombre: "materiales impresos", precio:4200},
    {id:15, nombre: "estrategia de marketing", precio:22800},
    {id:16, nombre:"redes sociales", precio:6200},
    {id:17, nombre:"publicidad digital", precio:5200},
];

// DOM SERVICIOS
let serviciosGrid = document.querySelector(".servicios-grid");

for (const servicio of servicios) {
    let servicioContenido = document.querySelector(".servicio-contenido");
    servicioContenido.innerHTML = `<h2 class="servicio-titulo heading">${servicio.nombre}</h2>`;

    serviciosGrid.append(servicioContenido);

    //Categorias de servicios
    let servicioLista = document.createElement("ul");
    servicioContenido.append(servicioLista);
    servicioLista.className = "servicio-lista";

    //Servicios Web
    if(servicio.nombre === "Desarrollo web"){
        for (const item of serviciosWeb) {
            let servWeb = document.createElement("li");
            servWeb.innerHTML = `${item.nombre}`;
            servWeb.className = "elemento-lista texto";
    
            servicioLista.append(servWeb);

        }
    //Servicios Branding
    }else if(servicio.nombre === "Branding"){
        for (const item of serviciosBrand) {
            let servBrand = document.createElement("li");
            servBrand.innerHTML = `${item.nombre}`;
            servBrand.className = "elemento-lista texto";
    
            servicioLista.append(servBrand);
        }
    //Servicios Marketing
    }else if(servicio.nombre === "Marketing"){
        for (const item of serviciosMkt) {
            let servMkt = document.createElement("li");
            servMkt.innerHTML =  `${item.nombre}`;
            servMkt.className = "elemento-lista texto";
    
            servicioLista.append(servMkt);
        }
    }
    

    //Botones
    let btnServDiv = document.createElement("div");
    servicioContenido.append(btnServDiv);
    btnServDiv.className = "servicio-botones";

    //Boton Ver más
    let btnServVer = document.createElement("button");
    btnServVer.innerHTML = "Ver más";
    btnServVer.className = "enlace servicio-btn";

    btnServDiv.append(btnServVer);

    //Boton Cotizar
    let btnServCotizar = document.createElement("button");
    btnServCotizar.innerHTML = "Cotizar";
    btnServCotizar.className = "btn-cotizar enlace enlace-btn";

    btnServDiv.append(btnServCotizar);

    const modal = document.querySelector(".modal");
    const modalCerrar = document.querySelector(".modal-cerrar");

    btnServCotizar.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("modal--show")
    });
    modalCerrar.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.remove("modal--show")
    });

    let modalLista = document.querySelector("modal-lista");

}



//Funcion para seleccionar serviciosa cotizar
/* function cotizar() {
    
    let catalogo = servicios.map(item => item.nombre);

    const agregarCarrito = (item) => {
        miCompra.push(item);
        console.log(miCompra);
        return(miCompra);
    }

    const mostrarCompra = () => {
        for(let i=0; i<miCompra.length; i++){
        compra = compra + `${miCompra[i].nombre}, Costo: $${miCompra[i].precio}\n`;}
        console.log(miCompra);
        alert(compra);
        alert(`El total de los servicios es $${total}`);
    }

    const sumarPrecios = (item) => {
        precioServicio = parseInt(item.precio);
        total += precioServicio;
        return(total);
    }

    function ingresarServ() {
        let encontrado=0
        let seleccion = prompt(`${nombrePers}\n¿Qué servicio desea cotizar?\n${catalogo.join("\n")}`);
        seleccion = seleccion.toLowerCase();
        

        for(const item of servicios) {
            if(seleccion===(item.nombre).toLowerCase()){
                let mensaje = `Servicio elegido: ${item.nombre}, Precio: $${item.precio}`;
                alert(mensaje);
                encontrado = 1;
                agregarCarrito(item);
                sumarPrecios(item);
                return(item);
            }
        }
        if(encontrado === 0)
        alert("No encontramos el servicio");
    }
    
    ingresarServ();

    let nuevoServ = confirm(`¿Deseas agregar otro servicio?`);
    while(nuevoServ === true) {
        ingresarServ();
        nuevoServ = confirm(`¿Deseas agregar otro servicio?`);
    }
    console.log(miCompra)
    
    mostrarCompra();

    alert(fin);
} */






//Primera entrega
/* let nombre = prompt("Ingresa tu nombre");


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
form(); */