class Book {
    constructor(public title: string, public author: string, public ISBN: string) {}
}

class Loan {
    constructor(public book: Book, public userID: string, public date: Date) {}
}

class EmailService {
    sendEmail(userID: string, message: string) {
        console.log(`Enviando email a ${userID}: ${message}`);
        // Implementación ficticia del envío de correo
    }
}

class LibraryManager {
    private books: Book[] = [];
    private loans: Loan[] = [];
    private emailService: EmailService = new EmailService();

    addBook(title: string, author: string, ISBN: string) {
        this.books.push(new Book(title, author, ISBN));
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
        } else {
            console.log("El libro no existe en la biblioteca.");
        }
    }

    returnBook(ISBN: string, userID: string) {
        const index = this.loans.findIndex(loan => loan.book.ISBN === ISBN && loan.userID === userID);
        if (index !== -1) {
            const returnedBook = this.loans.splice(index, 1)[0];
            this.emailService.sendEmail(userID, `Has devuelto el libro con ISBN ${returnedBook.book.ISBN}. ¡Gracias!`);
        } else {
            console.log("No tienes este libro prestado.");
        }
    }
}

const library = new LibraryManager();
library.addBook("El Gran Gatsby", "F. Scott Fitzgerald", "123456789");
library.addBook("1984", "George Orwell", "987654321");
library.loanBook("123456789", "user01");
