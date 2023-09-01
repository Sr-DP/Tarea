interface ReproductoresAudio{
    reproducirMusica(): void;
}
interface DispositivoMultimedia extends ReproductoresAudio{
    reproducirVideo(): void;
    leerEbook(): void;
}

class Smartphone implements DispositivoMultimedia {
    reproducirVideo(): void {
        throw new Error("Method not implemented.");
    }
    leerEbook(): void {
        throw new Error("Method not implemented.");
    }
    reproducirMusica(): void {
        throw new Error("Method not implemented.");
    }

}

class ReproductorMP3 implements ReproductoresAudio {
    reproducirMusica(): void {
        throw new Error("Method not implemented.");
    }
    
}


