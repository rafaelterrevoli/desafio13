pintarPropiedadesVenta();

function pintarPropiedadesVenta(){

    const propiedadesVenta = [ 
        {
            nombre: 'Apartamento de lujo en zona exclusiva',
            src: './assets/img/1V.jpg',
            descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
            ubicacion: '23 Luxury Lane, Prestige Suburb, CA 45678',
            habitaciones: 4,
            banos: 4,
            costo: '5.000',
            smoke: false,
            pets: false 
        },
        {
            nombre: 'Apartamento acogedor en la montaña',
            src: './assets/img/2V.jpg',
            descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
            ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
            habitaciones: 2,
            banos: 1,
            costo: '1.200',
            smoke: true,
            pets: true 
        },
        {
            nombre: 'Penthouse de lujo con terraza panorámica a la ciudad',
            src: './assets/img/3V.jpg',
            descripcion: 'Penthouse de lujo con terraza panorámica',
            ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
            habitaciones: 3,
            banos: 3,
            costo: '4.500',
            smoke: false,
            pets: true 
        },
        {
            
            nombre: 'Apartamento Acogedor en zona tranquila',
            src: './assets/img/4V.jpg',
            descripcion: 'Este apartamento acogedor está situado en el centro',
            ubicacion: '777 Avenue, Skyview City, CA 56789',
            habitaciones: 3,
            banos: 2,
            costo: '5.000',
            smoke: false,
            pets: true 
        },
        {
            nombre: 'Apartamento Hermoso con vista a al mar',
            src: './assets/img/5V.jpg',
            descripcion: 'Este apartamento acogedor con hermosa vista y a la ciudad',
            ubicacion: '7855 Lane, Prestige Suburb, CA 45678',
            habitaciones: 2,
            banos: 2,
            costo: '3.500',
            smoke: true,
            pets: false 
        }
    ];
   
    const row = document.querySelector(".row");
    let iconoMascota = '', textoMascota = '', textoColorMas = '', textoColorFum = '', html = '';
    for (let cards of propiedadesVenta){
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
}

