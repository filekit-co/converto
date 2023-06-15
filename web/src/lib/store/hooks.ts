import {readable} from 'svelte/store';

function useState(initValue: any) {
  let setValue;
  const nameStore = readable(initValue, set => {
    setValue = set;
  });
  nameStore.subscribe(value => {});
  return [nameStore, setValue];
}

export {useState};
