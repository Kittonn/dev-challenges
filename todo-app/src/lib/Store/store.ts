import { writable } from "svelte/store";
import type { storeI } from "../Interface/storeInterface";

const store = writable<storeI[]>(JSON.parse(localStorage.getItem("data")) || []);

store.subscribe((value) => (localStorage.data = JSON.stringify(value)));
export default store;
