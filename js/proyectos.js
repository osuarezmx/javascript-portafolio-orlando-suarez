const proyectos = [
    {id:"a", nombre: "Miitra", categorias: "branding y sitio web"},
    {id:"b", nombre: "MaFace", categorias: "branding"},
    {id:"c", nombre: "Medz", categorias: "branding"},
];

//DOM Proyectos
let proyectosGrid = document.querySelector(".proyectos-grid");


for(const proyecto of proyectos) {
    let proyectoCard = document.createElement("div");
    proyectoCard.className = "proyecto";
    proyectoCard.innerHTML = `<img src="./img/imagen-muestra-cuadrado.jpg" class="proyecto-img">
                                <div class="proyecto-contenido">
                                    <h2 class="proyecto-titulo heading">${proyecto.nombre}</h2>
                                    <h3 class="proyecto-categoria texto">${proyecto.categorias}</h3>
                                    <div class="proyecto-enlace">
                                        <a href="./proyectos/${proyecto.nombre.toLowerCase()}.html" class="enlace">Ver más</a>
                                    </div>
                                </div>`;
    
    
    proyectosGrid.append(proyectoCard);
}
