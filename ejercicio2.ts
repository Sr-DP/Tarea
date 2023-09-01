class Rectangulo {
    private alto: number;
    private ancho: number;

    constructor(alto: number, ancho: number) {
        this.alto = alto;
        this.ancho = ancho;
    }

    setAlto(value: number) {
        this.alto = value;
    }

    setAncho(value: number) {
        this.ancho = value;
    }

    area(): number {
        return this.alto * this.ancho;
    }
}

//los métodos setAlto y setAncho se heredaran de Rectangulo.

class Cuadrado extends Rectangulo {
    constructor(lado: number) {
        super(lado, lado);
    }
    
}
























//ejemplos de casos de uso 

const rectangulo = new Rectangulo(4, 6);
console.log(rectangulo.area()); // Imprime 24

const cuadrado = new Cuadrado(5);
console.log(cuadrado.area()); // Imprime 25
