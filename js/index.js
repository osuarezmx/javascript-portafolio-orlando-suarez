//Bienvenida
let nombrePers = prompt("Ingresa tu nombre");


function inicio() {
    let bienvenida = `Bienvenido ${nombrePers}`;
    alert(bienvenida);
}

inicio();


//Variables
let total=0, precioServicio=0;
let miCompra = [], totalPagar, posicion = 0, compra="Servicios a cotizar\n";
let fin = `Gracias por contactarnos ${nombrePers}, nosotros nos pondremos en contacto contigo para más detalles.`

// Servicios
const servicios = [
    {id: 1, nombre: "diseño y desarrollo web", precio:16000},
    {id: 2, nombre: "ui/ux", precio:10000},
    {id: 3, nombre: "tiendas digitales", precio:18000},
    {id: 4, nombre: "logo", precio:6500},
    {id: 5, nombre: "naming", precio:4500},
    {id: 6, nombre: "guia de identidad", precio:8000},
    {id: 7, nombre: "packaging", precio:12500},
    {id: 8, nombre: "materiales impresos", precio:4200},
    {id: 9, nombre: "estrategia de marketing", precio:22800},
    {id: 10, nombre:"redes sociales", precio:6200},
    {id: 11, nombre:"publicidad digital", precio:5200},
];

//Funcion para seleccionar serviciosa cotizar
function cotizar() {
    
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
}
cotizar();
