//-------------------------------------------------------------------------------------------------------------

interface IAnimal2{
    comer();

}

interface IAnimalAquatico2 {
    nadar();
}
interface IAnimalSubterraneo2{
    cavar();
}


class jirafa3 implements IAnimal2{
    comer() {
        throw new Error("Method not implemented");
    }

}


class pato3 implements IAnimalAquatico2, IAnimal2{
    nadar() {
        throw new Error("Method not implemented.");
    }
    comer() {
        throw new Error("Method not implemented.");
    }
    
    
}
class topo3 implements IAnimalSubterraneo2, IAnimalAquatico2{
    cavar() {
        throw new Error("Method not implemented.");
    }
    nadar() {
        throw new Error("Method not implemented.");
    }
    
}