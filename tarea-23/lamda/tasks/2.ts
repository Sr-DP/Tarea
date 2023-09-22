type Product = {
    id: number;
    name: string;
    price: number;
};


type Order = {
    date: Date;
    products: Product[];
};


const orders: Order[] = [
    {
        date: new Date('2023-05-01'),
        products: [
            { id: 1, name: 'Laptop', price: 1000 },
            { id: 2, name: 'Smartphone', price: 500 }
        ]
    },
    {
        date: new Date('2023-05-10'),
        products: [
            { id: 3, name: 'Book: TypeScript Basics', price: 20 },
            { id: 4, name: 'Book: Design Patterns', price: 35 }
        }
    },
    // ... más órdenes ...
];


// Función para calcular el total de una orden
function calculateOrderTotal(order: Order): number {
    return order.products.reduce((total, product) => total + product.price, 0);
}


// Función para calcular el total de todas las órdenes
function calculateTotalRevenue(orders: Order[]): number {
    return orders.reduce((total, order) => total + calculateOrderTotal(order), 0);
}


const totalRevenue = calculateTotalRevenue(orders);
console.log('Total Revenue: $' + totalRevenue);
