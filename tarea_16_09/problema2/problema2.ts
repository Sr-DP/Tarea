interface Usuario {
    membresia: 'Básico' | 'Premium' | 'Platino';
  }
  
  enum CategoriaLibro {
    Ficcion = 'Ficción',
    NoFiccion = 'No Ficción',
    Referencia = 'Referencia',
  }
  
  interface Libro1 {
    titulo: string;
    categoria: CategoriaLibro;
    fechaPrestamo?: Date;
    fechaDevolucion?: Date;
  }
  
  class Bibliotecas {
    private multasService: MultasService;
    private librosPrestados: Libro1[] = []; // Cambiamos a Libro1[]
    private historialPrestamos: { usuario: Usuario; libro: Libro1; fechaPrestamo: Date }[] = []; // Cambiamos a Libro1[]
  
    constructor() {
      this.multasService = new MultasService();
    }
  
    prestarLibro(libro: Libro1, usuario: Usuario) { // Cambiamos a Libro1
      if (usuario.membresia === 'Básico' && this.librosPrestados.length >= 2) {
        console.log('Límite de préstamos alcanzado para la membresía Básico.');
        return;
      }
      if (usuario.membresia === 'Premium' && this.librosPrestados.length >= 5) {
        console.log('Límite de préstamos alcanzado para la membresía Premium.');
        return;
      }
      if (libro.categoria === CategoriaLibro.Referencia) {
        console.log('Los libros de Referencia no se pueden prestar.');
        return;
      }
  
      libro.fechaPrestamo = new Date();
      this.librosPrestados.push(libro);
      this.registrarPrestamo(usuario, libro);
    }
  
    devolverLibro(libro: Libro1, usuario: Usuario) { // Cambiamos a Libro1
      libro.fechaDevolucion = new Date();
      const multa = this.multasService.calcularMulta(libro);
      console.log(`Multa por retraso: $${multa}`);
      this.quitarLibroPrestado(libro);
    }
  
    private quitarLibroPrestado(libro: Libro1) { // Cambiamos a Libro1
      const index = this.librosPrestados.indexOf(libro);
      if (index !== -1) {
        this.librosPrestados.splice(index, 1);
      }
    }
  
    private registrarPrestamo(usuario: Usuario, libro: Libro1) { // Cambiamos a Libro1
      const fechaPrestamo = new Date();
      this.historialPrestamos.push({ usuario, libro, fechaPrestamo });
    }
  }
  
  const usuarioBasico: Usuario = { membresia: 'Básico' };
  const usuarioPremium: Usuario = { membresia: 'Premium' };
  const usuarioPlatino: Usuario = { membresia: 'Platino' };
  
  const libro5: Libro1 = { titulo: 'El libro 1', categoria: CategoriaLibro.Ficcion };
  const libro2: Libro1 = { titulo: 'El libro 2', categoria: CategoriaLibro.NoFiccion };
  const libro3: Libro1 = { titulo: 'El libro de Referencia', categoria: CategoriaLibro.Referencia };
  
  const bibliotecas = new Bibliotecas();
  
  bibliotecas.prestarLibro(libro5, usuarioBasico); // Permitido para Básico
  bibliotecas.prestarLibro(libro2, usuarioPremium); // Permitido para Premium
  bibliotecas.prestarLibro(libro3, usuarioPlatino); // No permitido (Referencia)
  