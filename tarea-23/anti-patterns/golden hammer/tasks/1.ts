

class TodoManager {
    private todos: string[] = [];
    private storage: Storage;
    private renderer: Renderer;


    constructor(storage: Storage, renderer: Renderer) {
        this.storage = storage;
        this.renderer = renderer;
        this.load();
        this.render();
    }


    add(todo: string) {
        this.todos.push(todo);
        this.save();
        this.render();
    }


    remove(index: number) {
        this.todos.splice(index, 1);
        this.save();
        this.render();
    }


    private save() {
        console.log("Saving todos...");
        this.storage.saveTodos(this.todos);
    }


    private load() {
        console.log("Loading todos...");
        this.todos = this.storage.loadTodos();
    }


    private render() {
        console.log("Rendering todos...");
        this.renderer.renderTodos(this.todos);
    }
}


interface Storage {
    saveTodos(todos: string[]): void;
    loadTodos(): string[];
}


interface Renderer {
    renderTodos(todos: string[]): void;
}
















class TodoManager {
    private todos: string[] = [];

    add(todo: string) {
        this.todos.push(todo);
        this.save();
        this.render();
    }

    remove(index: number) {
        this.todos.splice(index, 1);
        this.save();
        this.render();
    }

    private save() {
        console.log("Saving todos to local storage...");
        // Código para guardar todos en el almacenamiento local
    }

    private render() {
        console.log("Rendering todos in the UI...");
        // Código para renderizar todos en la UI
    }
}
