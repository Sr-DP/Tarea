class Product {
    id: number;
    name: string;
    price: number;


    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}


class Cart {
    products: Product[] = [];


    addProduct(product: Product) {
        this.products.push(product);
    }


    calculateTotal(): number {
        const subtotal = this.calculateSubtotal();
        const discount = this.calculateDiscount();
        const shippingCost = this.calculateShippingCost(subtotal);


        return subtotal - discount + shippingCost;
    }


    private calculateSubtotal(): number {
        return this.products.reduce((acc, product) => acc + product.price, 0);
    }


    private calculateDiscount(): number {
        return this.products.length > 5 ? this.calculateSubtotal() * 0.1 : 0;
    }


    private calculateShippingCost(subtotal: number): number {
        return subtotal < 50 ? 10 : 0;
    }
}
























class Product {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Cart {
    products: Product[] = [];

    addProduct(product: Product) {
        this.products.push(product);
    }

    calculateTotal(): number {
        let total = this.products.reduce((acc, product) => acc + product.price, 0);

        // Descuento: 10% si hay más de 5 productos
        if (this.products.length > 5) {
            total *= 0.9;
        }

        // Envío: $10 si la compra es menor a $50
        if (total < 50) {
            total += 10;
        }

        return total;
    }
}
