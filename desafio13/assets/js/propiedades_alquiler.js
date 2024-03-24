pintarPropiedadesAlquiler();

function pintarPropiedadesAlquiler(){

    const propiedadesAlquiler = [ 
        {
            nombre: 'Apartamento en el centro de la ciudad',
            src: './assets/img/1A.jpg',
            descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
            ubicacion: ' 123 Main Street, Anytown, CA 91234',
            habitaciones: 2,
            banos: 2,
            costo: '2.000',
            smoke: false,
            pets: true 
        },
        {
            nombre: 'Apartamento luminoso con vista al mar',
            src: './assets/img/2A.jpg',
            descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
            ubicacion: ' 456 Ocean Avenue, Seaside Town, CA 56789',
            habitaciones: 3,
            banos: 2,
            costo: '2.500',
            smoke: true,
            pets: true 
        },
        {
            nombre: 'Condominio moderno en zona residencial',
            src: './assets/img/3A.jpg',
            descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
            ubicacion: ' 123 Main Street, Anytown, CA 91234',
            habitaciones: 2,
            banos: 2,
            costo: '2.200',
            smoke: false,
            pets: true 
        },
        {
            nombre: 'Codominio cerca de la Universidad MER',
            src: './assets/img/4A.jpg',
            descripcion: ' Condominio moderno ubicado en zona universitaria',
            ubicacion: '5751 Main Street, Anytown, CA 91234',
            habitaciones: 2,
            banos: 2,
            costo: '2.800',
            smoke: true,
            pets: false 
        },
        {
            nombre: 'Apartamento Acogedor',
            src: './assets/img/5A.jpg',
            descripcion: 'Condominio moderno cerca de estacion metro',
            ubicacion: ' 6546 Ocean Avenue, Seaside Town, CA 56789',
            habitaciones: 3,
            banos: 3,
            costo: '2.500',
            smoke: false,
            pets: false 
        }
    ];
   
    const row = document.querySelector(".row");
    let iconoMascota = '', textoMascota = '', textoColorMas = '', textoColorFum = '', html = '';
    for (let cards of propiedadesAlquiler){
        if (cards.pets){
            iconoMascota = "fas fa-paw";
            textoMascota = " Mascotas permitidas";
            textoColorMas = "text-success";
        }else{
            iconoMascota = "fa-solid fa-ban";
            textoMascota = " No se permiten mascotas";
            textoColorMas = "text-danger";
        }

        if (cards.smoke){
            iconoFumar = "fas fa-smoking";
            textoFumar = " Permitido fumar";
            textoColorFum = "text-success";
        }else{
            iconoFumar = "fas fa-smoking-ban";
            textoFumar = " No se permite fumar";
            textoColorFum = "text-danger";
        }

        html += `
        <div class="col-md-4 mb-4">
                <div class="card">
                <img src="${cards.src}" class="card-img-top" alt="Imagen del departamento"/>
                    <div class="card-body">
                        <h5 class="card-title">${cards.nombre}</h5>
                        <p class="card-text">${cards.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i>${cards.ubicacion}</p>
                        <p><i class="fas fa-bed"></i> ${cards.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${cards.banos} Baños</p>
                        <p><i class="fas fa-dollar-sign"></i> ${cards.costo}</p>
                        <p class="${textoColorFum}"><i class="${iconoFumar}"></i>${textoFumar}</p>
                        <p class="${textoColorMas}"><i class="${iconoMascota}"></i>${textoMascota}</p>
                    </div>
                </div>
        </div>
        `
    };
    row.innerHTML = html;
};