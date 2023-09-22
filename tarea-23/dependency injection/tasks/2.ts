interface DeliveryMethod {
    deliverPackage(packageId: string, address: string): void;
}


class BikeDelivery implements DeliveryMethod {
    deliverPackage(packageId: string, address: string) {
        console.log(`Delivering package ${packageId} to ${address} using a bike.`);
    }
}


class PackageService {
    deliveryMethod: DeliveryMethod;


    constructor(deliveryMethod: DeliveryMethod) {
        this.deliveryMethod = deliveryMethod;
    }


    sendPackage(packageId: string, address: string) {
        this.deliveryMethod.deliverPackage(packageId, address);
    }
}


const bikeDelivery = new BikeDelivery();
const packageService = new PackageService(bikeDelivery);


packageService.sendPackage("12345", "123 Main St");






















class BikeDelivery {
    deliverPackage(packageId: string, address: string) {
        console.log(`Delivering package ${packageId} to ${address} using a bike.`);
    }
}

class PackageService {
    deliveryMethod: BikeDelivery;

    constructor() {
        this.deliveryMethod = new BikeDelivery();
    }

    sendPackage(packageId: string, address: string) {
        this.deliveryMethod.deliverPackage(packageId, address);
    }
}
