class Luz {
    encender() {
        console.log("Luz encendida");
    }

    apagar() {
        console.log("Luz apagada");
    }
}

class Interruptor {
    private luz: Luz;
    //Creamos un estado boolean para la luz
    private encendida: boolean; 
    
    constructor(luz: Luz) {
        this.luz = luz;
        //asumimos que inicialmente la luz esta apagada
        //estado inicial de la Luz
        this.encendida = false; 
    }

    operar() {
        // se cambia el estado segun el estado de la luz
        if (this.encendida) {
            this.luz.apagar();
            this.encendida = false;
        } else {
            this.luz.encender();
            this.encendida = true;
        }
    }
}

// Crear una instancia de Luz
const luzSala = new Luz();

// Crear una instancia de Interruptor y pasarle la instancia de Luz
const interruptorSala = new Interruptor(luzSala);

// Ejemplo de uso
interruptorSala.operar(); // Enciende la luz
interruptorSala.operar(); // Apaga la luz
