interface Libro {
    titulo: string;
    fechaPrestamo?: Date;
    fechaDevolucion?: Date;
}
class MultasService {
    calcularMulta(libro: Libro): number {
        if (!libro.fechaPrestamo || !libro.fechaDevolucion) {
            throw new Error('El libro no ha sido prestado o devuelto correctamente.');
        }

        const diasRetraso = this.calcularDiasRetraso(libro.fechaPrestamo, libro.fechaDevolucion);
        const multa = diasRetraso * 1; // $1 por día de retraso
        return multa;
    }

    private calcularDiasRetraso(fechaPrestamo: Date, fechaDevolucion: Date): number {
        const tiempoPrestamoEstandar = 7; // 7 días
        const milisegundosPorDia = 24 * 60 * 60 * 1000; // 1 día en milisegundos

        const diferenciaEnDias =
            (fechaDevolucion.getTime() - fechaPrestamo.getTime()) / milisegundosPorDia;

        return Math.max(0, diferenciaEnDias - tiempoPrestamoEstandar);
    }
}

class Biblioteca {
  private multasService: MultasService;
  private librosPrestados: Libro[] = [];

  constructor() {
    this.multasService = new MultasService();
  }

  prestarLibro(libro: Libro) {
    libro.fechaPrestamo = new Date();
    this.librosPrestados.push(libro);
  }

  devolverLibro(libro: Libro) {
    libro.fechaDevolucion = new Date();
    const multa = this.multasService.calcularMulta(libro);
    console.log(`Multa por retraso: $${multa}`);
    this.quitarLibroPrestado(libro);
  }

  private quitarLibroPrestado(libro: Libro) {
    const index = this.librosPrestados.indexOf(libro);
    if (index !== -1) {
      this.librosPrestados.splice(index, 1);
    }
  }
}

const libro1: Libro = { titulo: 'El libro 1' };
const biblioteca = new Biblioteca();

biblioteca.prestarLibro(libro1);

// Simulando la devolución después de 10 días de retraso
setTimeout(() => {
  biblioteca.devolverLibro(libro1);
}, 10 * 24 * 60 * 60 * 1000); // 10 días en milisegundos
