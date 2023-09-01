interface Animal{
    comer(): void;
}
interface Animal_Ave extends Animal{
    volar(): void;
    hacerSonido(): void;
    caminar(): void;
}
interface Animal_Acuatico extends Animal{
    nadar(): void;
}


class Aguila implements Animal_Ave{
    volar(): void {
        throw new Error("Method not implemented.");
    }
    hacerSonido(): void {
        throw new Error("Method not implemented.");
    }
    caminar(): void {
        throw new Error("Method not implemented.");
    }
    comer(): void {
        throw new Error("Method not implemented.");
    }
    
}

//algunos animales acuaticos producen sonido bajo el agua, como focas, leones marinos, calamarae, pulpos y morsas
//pero el tiburon no

class Tiburon implements Animal_Acuatico{
    nadar(): void {
        throw new Error("Method not implemented.");
    }
    comer(): void {
        throw new Error("Method not implemented.");
    }
    
}


