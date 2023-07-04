import {writable} from 'svelte/store';

export const checked = writable(false)

export function handleOnClose() {
  checked.set(false)
}