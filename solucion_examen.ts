class Book {
    constructor(public title: string, public author: string, public ISBN: string) {}
}

class Loan {
    constructor(public book: Book, public userID: string, public date: Date) {}
}

interface IEmailService {
    sendEmail(userID: string, message: string): void;
}

class EmailService implements IEmailService {
    sendEmail(userID: string, message: string) {
        console.log(`Enviando email a ${userID}: ${message}`);
        // Implementación ficticia del envío de correo
    }
}

class LibraryManager {
    private books: Book[] = [];
    private loans: Loan[] = [];
    private emailService: IEmailService;

    private constructor(emailService: IEmailService) {
        this.emailService = emailService;
    }

    addBook(book: Book) {
        this.books.push(book);
        this.notifyUsers(book.title);
    }

    removeBook(ISBN: string) {
        const index = this.books.findIndex(book => book.ISBN === ISBN);
        if (index !== -1) {
            this.books.splice(index, 1);
        }
    }

    searchByTitle(title: string) {
        return this.books.filter(book => book.title.includes(title));
    }

    searchByAuthor(author: string) {
        return this.books.filter(book => book.author.includes(author));
    }

    searchByISBN(ISBN: string) {
        return this.books.find(book => book.ISBN === ISBN);
    }

    loanBook(ISBN: string, userID: string) {
        const book = this.searchByISBN(ISBN);
        if (book) {
            this.loans.push(new Loan(book, userID, new Date()));
            this.emailService.sendEmail(userID, `Has solicitado el libro ${book.title}`);
        }
    }

    returnBook(ISBN: string, userID: string) {
        const index = this.loans.findIndex(loan => loan.book.ISBN === ISBN && loan.userID === userID);
        if (index !== -1) {
            const returnedBook = this.loans.splice(index, 1)[0];
            this.emailService.sendEmail(userID, `Has devuelto el libro con ISBN ${returnedBook.book.ISBN}. ¡Gracias!`);
        }
    }

    private notifyUsers(bookTitle: string) {
        // Implementa la notificación a usuarios cuando se añade un libro
    }
}

// Implementación del patrón Singleton para LibraryManager
class LibraryManagerSingleton {
    private static instance: LibraryManager | null = null;

    private constructor(emailService: IEmailService) {
        this.libraryManager = new LibraryManager(emailService);
    }

    static getInstance(emailService: IEmailService) {
        if (!this.instance) {
            this.instance = new LibraryManagerSingleton(emailService);
        }
        return this.instance;
    }

    private libraryManager: LibraryManager;

    getLibraryManager() {
        return this.libraryManager;
    }
}
