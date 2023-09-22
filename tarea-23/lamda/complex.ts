type Student = {
    id: number;
    name: string;
    averageGrade: number;
};

let students: Student[] = [
    { id: 1, name: 'Ana', averageGrade: 90 },
    { id: 2, name: 'Juan', averageGrade: 80 },
    { id: 3, name: 'Sofía', averageGrade: 95 },
    { id: 4, name: 'Luis', averageGrade: 78 },
    { id: 5, name: 'Carlos', averageGrade: 88 },
];

// Filtrar estudiantes con promedio superior a 85
let highAchievers = students.filter(student => student.averageGrade > 85);

// Crear mensajes de felicitación
let congratulatoryMessages = highAchievers.map(student => `¡Felicidades, ${student.name}! Has obtenido un promedio excelente de ${student.averageGrade}.`);

// Ordenar los mensajes alfabéticamente por nombre
congratulatoryMessages.sort((a, b) => a.localeCompare(b));

console.log(congratulatoryMessages);















type Student = {
    id: number;
    name: string;
    averageGrade: number;
};

let students: Student[] = [
    { id: 1, name: 'Ana', averageGrade: 90 },
    { id: 2, name: 'Juan', averageGrade: 80 },
    { id: 3, name: 'Sofía', averageGrade: 95 },
    { id: 4, name: 'Luis', averageGrade: 78 },
    { id: 5, name: 'Carlos', averageGrade: 88 },
];

let congratulatoryMessages = students
    .filter(student => student.averageGrade > 85) // Filtramos estudiantes con promedio superior a 85.
    .map(student => `¡Felicidades, ${student.name}! Has obtenido un promedio excelente de ${student.averageGrade}.`) // Convertimos a mensajes.
    .sort((a, b) => a.localeCompare(b)); // Ordenamos alfabéticamente por nombre.

console.log(congratulatoryMessages);

student => student.averageGrade > 85

student => `¡Felicidades, ${student.name}! Has obtenido un promedio excelente de ${student.averageGrade}.`

(a, b) => a.localeCompare(b)
