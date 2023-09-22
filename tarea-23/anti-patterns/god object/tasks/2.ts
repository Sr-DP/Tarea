

class FlightManager {
    flights: any[] = [];


    scheduleFlight(flight: any) {
        this.flights.push(flight);
    }
}


class PassengerManager {
    passengers: any[] = [];


    checkInPassenger(passenger: any) {
        this.passengers.push(passenger);
    }
}


class CrewManager {
    crews: any[] = [];


    assignCrewToFlight(crew: any, flightID: string) {
        this.crews.push({ ...crew, flightID });
    }
}


class MaintenanceManager {
    planesMaintenance: any[] = [];


    logMaintenance(planeID: string, maintenance: any) {
        this.planesMaintenance.push({ planeID, ...maintenance });
    }
}


class FinancialManager {
    financialRecords: any[] = [];


    recordFinancialTransaction(transaction: any) {
        this.financialRecords.push(transaction);
    }
}


const flightManager = new FlightManager();
const passengerManager = new PassengerManager();
const crewManager = new CrewManager();
const maintenanceManager = new MaintenanceManager();
const financialManager = new FinancialManager();


flightManager.scheduleFlight({ flightNumber: "F123", destination: "New York" });
passengerManager.checkInPassenger({ name: "Alice", seat: "A1" });
crewManager.assignCrewToFlight({ name: "John", role: "Pilot" }, "F123");
maintenanceManager.logMaintenance("A321", { date: "2023-09-20", description: "Engine check" });
financialManager.recordFinancialTransaction({ type: "Expense", amount: 1000 });


















class AirportSystem {
    flights: any[] = [];
    passengers: any[] = [];
    crews: any[] = [];
    planesMaintenance: any[] = [];
    financialRecords: any[] = [];

    // Métodos relacionados con vuelos
    scheduleFlight(flight: any) {
        this.flights.push(flight);
    }

    // Métodos relacionados con pasajeros
    checkInPassenger(passenger: any) {
        this.passengers.push(passenger);
    }

    // Métodos relacionados con tripulaciones
    assignCrewToFlight(crew: any, flightID: string) {
        this.crews.push({...crew, flightID});
    }

    // Métodos relacionados con el mantenimiento de aviones
    logMaintenance(planeID: string, maintenance: any) {
        this.planesMaintenance.push({planeID, ...maintenance});
    }

    // Métodos relacionados con facturación y contabilidad
    recordFinancialTransaction(transaction: any) {
        this.financialRecords.push(transaction);
    }
}
