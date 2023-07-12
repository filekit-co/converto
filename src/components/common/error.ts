import {writable} from 'svelte/store';

export const errorStatus = writable(false)
export const errorMessage = writable('')