class animal{
    nombre: string;
    raza: string;


    constructor(nombre: string, raza: string){
        this.nombre= nombre;
        this.raza = raza;
    }
    comer(){
        console.log("comer");
        //throw new console.error("comer");  
    }
    nadar(){
        console.log("nadar");
    }
}


class jirafa extends animal{
    constructor(nombre:string, raza:string){
        super(nombre,raza);
    }

    comer() : string{
        return "";
    };

}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// codigo espagueti revisar en liskovrespuetas
interface IAnimal{
    comer();

}

interface IAnimalAquatico extends IAnimal{
    nadar();
}
interface IAnimalAquatico2{
    nadar();
}
interface IAnimalTerrestre extends IAnimalAquatico2{
    cavar();
}


class jirafa2 implements IAnimal{
    comer() {
        throw new Error("Method not implemented");
    }

}


class pato2 implements IAnimalAquatico{
    nadar() {
        throw new Error("Method not implemented.");
    }
    comer() {
        throw new Error("Method not implemented.");
    }
    
    
}
class topo2 implements IAnimalTerrestre{
    cavar() {
        throw new Error("Method not implemented.");
    }
    nadar() {
        throw new Error("Method not implemented.");
    }
    
}
//-------------------------------------------------------------------------------------------------------------

