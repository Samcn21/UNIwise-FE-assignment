// types
import type { Todo } from "../types/db";

export default class TodoModel {
    constructor(private _todoResponse: Todo) {}

    isDone(): boolean {
        return this._todoResponse.isDone ?? false;
    }

    getId(): string {
        return this._todoResponse.id ?? '';
    }

    getTitle(): string {
        return this._todoResponse.title ?? '';
    }
}