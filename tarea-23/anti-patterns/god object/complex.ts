class PatientManager {
    patients: any[] = [];


    addPatient(patient: any) {
        this.patients.push(patient);
    }


    getPatientDetails(patientID: string) {
        return this.patients.find(patient => patient.id === patientID);
    }
}


class DoctorManager {
    doctors: any[] = [];


    hireDoctor(doctor: any) {
        this.doctors.push(doctor);
    }


    assignDoctorToPatient(doctorID: string, patientID: string) {
        const patient = patientManager.getPatientDetails(patientID);
        if (patient) {
            patient.assignedDoctor = doctorID;
        }
    }
}


class AppointmentManager {
    appointments: any[] = [];


    scheduleAppointment(appointment: any) {
        this.appointments.push(appointment);
    }


    getDoctorAppointments(doctorID: string) {
        return this.appointments.filter(appointment => appointment.doctorId === doctorID);
    }
}


class TreatmentManager {
    treatments: any[] = [];


    addTreatment(treatment: any) {
        this.treatments.push(treatment);
    }


    getPatientTreatments(patientID: string) {
        return this.treatments.filter(treatment => treatment.patientId === patientID);
    }
}


class BillingManager {
    bills: any[] = [];


    generateBill(patientID: string) {
        const patientTreatments = treatmentManager.getPatientTreatments(patientID);
        const totalCost = patientTreatments.reduce((acc, treatment) => acc + treatment.cost, 0);
        this.bills.push({ patientID, totalCost });
    }


    getPatientBill(patientID: string) {
        return this.bills.find(bill => bill.patientID === patientID);
    }
}


const patientManager = new PatientManager();
const doctorManager = new DoctorManager();
const appointmentManager = new AppointmentManager();
const treatmentManager = new TreatmentManager();
const billingManager = new BillingManager();


patientManager.addPatient({ id: "p123", name: "John", age: 30 });
doctorManager.hireDoctor({ id: "d456", name: "Dr. Smith", specialty: "Cardiology" });
appointmentManager.scheduleAppointment({ doctorId: "d456", patientId: "p123", date: "2023-09-20" });
treatmentManager.addTreatment({ patientId: "p123", description: "Cardiac Checkup", cost: 100 });
billingManager.generateBill("p123");


























class HospitalSystem {
    patients: any[] = [];
    doctors: any[] = [];
    appointments: any[] = [];
    treatments: any[] = [];
    bills: any[] = [];

    // Métodos relacionados con pacientes
    addPatient(patient: any) {
        this.patients.push(patient);
    }
    getPatientDetails(patientID: string) {
        return this.patients.find(patient => patient.id === patientID);
    }

    // Métodos relacionados con médicos
    hireDoctor(doctor: any) {
        this.doctors.push(doctor);
    }
    assignDoctorToPatient(doctorID: string, patientID: string) {
        let patient = this.patients.find(patient => patient.id === patientID);
        if (patient) {
            patient.assignedDoctor = doctorID;
        }
    }

    // Métodos relacionados con citas
    scheduleAppointment(appointment: any) {
        this.appointments.push(appointment);
    }
    getDoctorAppointments(doctorID: string) {
        return this.appointments.filter(appointment => appointment.doctorId === doctorID);
    }

    // Métodos relacionados con tratamientos
    addTreatment(treatment: any) {
        this.treatments.push(treatment);
    }
    getPatientTreatments(patientID: string) {
        return this.treatments.filter(treatment => treatment.patientId === patientID);
    }

    // Métodos relacionados con facturación
    generateBill(patientID: string) {
        const patientTreatments = this.treatments.filter(treatment => treatment.patientId === patientID);
        const totalCost = patientTreatments.reduce((acc, treatment) => acc + treatment.cost, 0);
        this.bills.push({ patientID, totalCost });
    }
    getPatientBill(patientID: string) {
        return this.bills.find(bill => bill.patientID === patientID);
    }
}

const hospital = new HospitalSystem();
hospital.addPatient({ id: "p123", name: "John", age: 30 });
hospital.hireDoctor({ id: "d456", name: "Dr. Smith", specialty: "Cardiology" });
hospital.scheduleAppointment({ doctorId: "d456", patientId: "p123", date: "2023-09-20" });
hospital.addTreatment({ patientId: "p123", description: "Cardiac Checkup", cost: 100 });
hospital.generateBill("p123");
