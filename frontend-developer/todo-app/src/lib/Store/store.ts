import { writable } from "svelte/store";
import type { storeI } from "../Interface/storeInterface";

const store = writable<storeI[]>([]);


export default store;
