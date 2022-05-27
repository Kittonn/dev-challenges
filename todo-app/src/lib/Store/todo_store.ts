import { writable } from "svelte/store";

interface todoI {
    todo: string;
    finish:boolean;
}

let todo_data:todoI[] = []

export const todo_store = writable(todo_data)