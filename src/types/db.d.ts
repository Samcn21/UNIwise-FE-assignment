export interface Country {
    id: number;
    name: string;
    short_code: string;
}

export type Todo = {
    id: string;
    title: string;
    isDone: boolean;
}

export type TodoResponse = Todo[];