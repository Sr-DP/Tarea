//crea un programa que nos Permita 
//mostrar libros de una biblioteca
//actualizar  el nombre del libro1
//crear un libro 
//eliminarlo


//libros fisicos 
//audio libros
//libros digitales
// libros de hace 100 años
// combinaciones
//nose se pueden eliminar audiolibros
//no se puede actualizar ni eliminar libros antiguos
//quiero que el crear libros, libros fisicos y libros digitales me pida diferentes autores
/*interface libro1{
    titulo: string;
    autor: string;
    //contenido: string;
    //tipo: string;
    //, contenido:string, tipo:string
    
}*/



class Libro {
    titulo: string;
    autor: string;
    edicion: Date;
    //contenido: string;
    //tipo: string;
    //, contenido:string, tipo:string
    constructor( titulo: string, autor: string, edicion: Date) {
        this.titulo = titulo;
        this.autor = autor;
        this.edicion = edicion;
        //this.contenido = contenido;
        //this.tipo = tipo;
    }

}




class LibroFisico extends Libro {
    constructor(titulo: string, autor: string, edicion: Date) {
        super(titulo, autor, edicion);
    }
}

class AudioLibro extends Libro {
    constructor(titulo: string, autor: string, edicion: Date) {
        super(titulo, autor, edicion);
    }
}

class LibroDigital extends Libro {
    constructor(titulo: string, autor: string,edicion: Date) {
        super(titulo, autor, edicion);
    }
}

/*class LibroDeHace100Anios extends Libro {
    constructor(titulo: string, autor: string, edicion:Date) {
        super(titulo, autor, edicion);
    }
}*/

class anios extends Libro{
    
    constructor(titulo: string, autor: string, edicion:Date) {
        
        super(titulo, autor, edicion);
        this.edicion=edicion;

    }
    

}


class Biblioteca {
    libros: Libro[] = [];

    mostrarLibros() {
        console.log("Libros en la biblioteca:");
        this.libros.forEach((libro, index) => {
            console.log(`${index + 1}. Título: ${libro.titulo}, Autor: ${libro.autor}, Edicion: ${libro.edicion}`);
        });
    }

    

    crearLibroFisico(titulo: string, autor: string, edicion:Date) {
        const nuevoLibro = new LibroFisico(titulo, autor, edicion);
        this.libros.push(nuevoLibro);
        console.log("Libro físico creado exitosamente.");
    }

    crearAudioLibro(titulo: string, autor: string, edicion: Date) {
        const nuevoAudioLibro = new AudioLibro(titulo, autor, edicion);
        this.libros.push(nuevoAudioLibro);
        console.log("Audiolibro creado exitosamente.");
    }

    crearLibroDigital(titulo: string, autor: string, edicion) {
        const nuevoLibroDigital = new LibroDigital(titulo, autor, edicion);
        this.libros.push(nuevoLibroDigital);
        console.log("Libro digital creado exitosamente.");
    }

    actualizarNombreLibro(index: number, nuevoTitulo: string) {
        if (index >= 0 && index < this.libros.length) {
            if (!(this.libros[index] instanceof LibroDigital) && !(this.libros[index] instanceof LibroDeHace100Anios)) {
                this.libros[index].titulo = nuevoTitulo;
                console.log("Nombre del libro actualizado exitosamente.");
            } else {
                console.log("No se puede actualizar el nombre de este libro.");
            }
        } else {
            console.log("Índice de libro no válido.");
        }
    }

    eliminarLibro(index: number) {
        if (index >= 0 && index < this.libros.length) {

            if (!(this.libros[index] instanceof AudioLibro)) {
                if (!(this.libros[index] instanceof LibroDeHace100Anios)) {
                    this.libros.splice(index, 1);
                    console.log("Libro eliminado exitosamente.");
                } else {
                    console.log("No se puede eliminar este libro antiguo.");
                }
            } else {
                console.log("No se pueden eliminar audiolibros.");
            }
        } else {
            console.log("Índice de libro no válido.");
        }
    }
}
