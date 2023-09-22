

class InventoryManager {
    inventory: any[] = [];


    addProduct(product: any) {
        this.inventory.push(product);
    }


    removeProduct(product: any) {
        const index = this.inventory.indexOf(product);
        if (index > -1) {
            this.inventory.splice(index, 1);
        }
    }
}


class EmployeeManager {
    employees: string[] = [];
    salaries: { [key: string]: number } = {};


    hireEmployee(employee: string, salary: number) {
        this.employees.push(employee);
        this.salaries[employee] = salary;
    }


    fireEmployee(employee: string) {
        const index = this.employees.indexOf(employee);
        if (index > -1) {
            this.employees.splice(index, 1);
        }
        delete this.salaries[employee];
    }
}


class SalesManager {
    salesRecords: any[] = [];


    recordSale(sale: any) {
        this.salesRecords.push(sale);
    }


    getDailySales(date: string): any[] {
        return this.salesRecords.filter(sale => sale.date === date);
    }
}


class PetStore {
    inventoryManager: InventoryManager;
    employeeManager: EmployeeManager;
    salesManager: SalesManager;


    constructor() {
        this.inventoryManager = new InventoryManager();
        this.employeeManager = new EmployeeManager();
        this.salesManager = new SalesManager();
    }
}


const store = new PetStore();
store.inventoryManager.addProduct({ name: "Dog Food", price: 20 });
store.employeeManager.hireEmployee("Alice", 5000);
store.salesManager.recordSale({ date: "2023-09-15", total: 50 });


























class PetStore {
    // Atributos relacionados con el inventario
    inventory: any[] = [];


    // Atributos relacionados con los empleados
    employees: string[] = [];
    salaries: { [key: string]: number } = {};


    // Atributos relacionados con las ventas
    salesRecords: any[] = [];


    // Métodos relacionados con el inventario
    addProduct(product: any) {
        this.inventory.push(product);
    }
    removeProduct(product: any) {
        const index = this.inventory.indexOf(product);
        if (index > -1) {
            this.inventory.splice(index, 1);
        }
    }


    // Métodos relacionados con los empleados
    hireEmployee(employee: string, salary: number) {
        this.employees.push(employee);
        this.salaries[employee] = salary;
    }
    fireEmployee(employee: string) {
        const index = this.employees.indexOf(employee);
        if (index > -1) {
            this.employees.splice(index, 1);
        }
        delete this.salaries[employee];
    }


    // Métodos relacionados con las ventas
    recordSale(sale: any) {
        this.salesRecords.push(sale);
    }
    getDailySales(date: string): any[] {
        return this.salesRecords.filter(sale => sale.date === date);
    }
}


const store = new PetStore();
store.addProduct({ name: "Dog Food", price: 20 });
store.hireEmployee("Alice", 5000);
store.recordSale({ date: "2023-09-15", total: 50 });


























