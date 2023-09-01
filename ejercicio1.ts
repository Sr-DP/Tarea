interface animal{
    comer();
    caminar();
}
interface aves extends animal{
    volar();
}
interface acuaticos extends animal{
    nadar();
}

class Pajaro implements aves{
    volar() {
        throw new Error("Method not implemented.");
    }
    comer() {
        throw new Error("Method not implemented.");
    }
    caminar() {
        throw new Error("Method not implemented.");
    }
    
}

class Pinguino implements acuaticos{
    nadar() {
        throw new Error("Method not implemented.");
    }
    comer() {
        throw new Error("Method not implemented.");
    }
    caminar() {
        throw new Error("Method not implemented.");
    }
   
}