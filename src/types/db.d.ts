export interface Country {
    id: string;
    name: string;
    short_code: string;
}

export type Todo = {
    id: string;
    title: string;
    isDone: boolean;
}

export type TodoResponse = Todo[];