class Configuracion {
    valor: string;

    constructor(valor: string) {
        this.valor = valor;
    }
}

class BaseDatos {
    guardar(configuracion: Configuracion) {
        console.log(`Guardando configuración con valor: ${configuracion.valor} en la base de datos`);
    }

    obtener(): Configuracion {
        // Obtener de la BD...
        return new Configuracion("valor");
    }
}

class GestorConfiguraciones {
    db: BaseDatos;

    constructor() {
        this.db = new BaseDatos();
    }

    guardarConfiguracion(valor: string) {
        const configuracion = new Configuracion(valor);
        this.db.guardar(configuracion);
    }

    obtenerConfiguracion(): Configuracion {
        return this.db.obtener();
    }
}

// Ejemplo de uso
const gestor = new GestorConfiguraciones();
gestor.guardarConfiguracion("nuevo_valor");
const configuracionObtenida = gestor.obtenerConfiguracion();
console.log(`Valor de la configuración obtenida: ${configuracionObtenida.valor}`);
