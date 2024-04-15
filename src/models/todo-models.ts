// types
import type { TodoResponse, Todo} from "../types/db";

// models
import TodoModel from "./todo-model";

export default class TodoModels {
    constructor(private _response: TodoResponse | null) {}

    getTodos(): TodoModel[] {
        const todos = this._response ?? [];
        return todos.map((x: Todo) => new TodoModel(x));
    }
}