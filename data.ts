interface Todo {
    id: number;
    text: string;
}

let TODOS: Todo[] = []

export function addTodo(text: string) {
    const newTodo = {id: Math.random(), text}
    TODOS.push(newTodo)
    return newTodo
}

export function getTodo(id: number) {
    const todo = TODOS.find(todo => todo.id === id)
    if (!todo) {
        throw new Error(`TODOS not found with id ${id}`)
    }
    return todo
}

export function getTodos() {
    return TODOS
}

export function removeTodo(id: number) {
    TODOS = TODOS.filter(t => t.id !== id)
}

export  function updateTodo(id: number, text: string) {
    const todo = getTodo(id)
    todo.text = text
    return todo
}