import { get, writable } from 'svelte/store';

export const isDragDropping = writable(false);


// import { on, off } from "@store/dragDrop";
export function off() {
  isDragDropping.set(false)  
}

export function on() {
  isDragDropping.set(true)
}