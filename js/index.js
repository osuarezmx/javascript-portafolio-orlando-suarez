let nombre = prompt("Ingresa tu nombre");

function inicio() {
    let bienvenida = `Bienvenido ${nombre}`;
    alert(bienvenida);
}

inicio();

let designDevWeb, uiUx, digitStores, logoIndentity, naming, brandGuide, packaging, printedMat, creativityStrat, socialMedia, advertising;

let fin = `Excelente ${nombre}, nosotros te contactaremos para más detalles`;
    let pregWeb = prompt(`Perfecto ${nombre} estas son nuestras opciones de servicios web
    4- diseño y desarrollo web
    5- diseño ui/ux
    6- tiendas digitales`);
    let pregBrand = prompt(`Perfecto ${nombre} estas son nuestras opciones de servicios de branding
    7- logo y sistema de identidad
    8- naming
    9- guia de identidad
    10- packaging
    11- naming`)
    let pregMkt = prompt(`Perfecto ${nombre} estas son nuestras opciones de servicios de marketing
    12- estrategia creativa y desarrollo de campaña de marketing
    13- redes sociales
    14- publicidad digital e impresa`);
    let pregDos = prompt(`${nombre} ¿Deseas agregar otro serivicio?`);
    let pregTres = prompt(`¿Qué servicio desess agregar?
    1- Web,
    2- Branding,
    3- Marketing digital`);

let servWeb = "desarrollo web";
let servBrand = "branding";
let servMkt = "marketing";

let servicioWeb = [
    {id: designDevWeb, nombre: "diseño y desarrollo web"},
    {id: uiUx, nombre:"ui/ux"},
    {id: digitStores, nombre:"Tiendas Digitales"}
];
let servicioBrands = [
    {id: logoIndentity, nombre:"logo y sistema de identidad"},
    {id: naming, nombre:"naming"},
    {id: brandGuide, nombre:"guia de identidad"},
    {id: packaging, nombre:"packaging"},
    {id: printedMat, nombre:"materiales impresos"}
];
let servicioMkt = [
    {id: creativityStrat, nombre:"estrategia creativa y desarrollo de campaña de marketing"},
    {id: socialMedia, nombre:"redes sociales"},
    {id: advertising, nombre:"publicidad digital e impresa"},
];
let servicios = [
    {id: servWeb, nombre: "desarrollo web", contenido: servicioWeb},
    {id: servBrand, nombre: "branding", contenido: servicioBrands},
    {id: servMkt, nombre: "marketing digital", contenido: servicioMkt}
];

function servicio() {

    let pregUno = prompt(`Hola ${nombre}¿Qué servicio deseas cotizar?
    1- Web,
    2- Branding,
    3- Marketing digital`);
    /* let pregDos, pregTres, pregWeb, pregBrand, pregMkt; */
    
    
  

    if(pregUno === "1") {
        pregWeb;
    }else {
        if(pregUno === "2") {
            pregBrand;
        } if(pregUno === "3") {
            pregMkt;
        }
    }

    

    if(pregWeb === "4") {
        pregDos;
    } if(pregDos === "si") {
        pregTres;
    }else {
        if(pregDos === "no") {
            alert(fin);
        }
    } 

}
    
servicio();
