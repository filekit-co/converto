<script lang="ts">
  import {createEventDispatcher} from 'svelte';
  import filedrop from 'filedrop-svelte/actions/filedrop';
  import type {Events} from 'filedrop-svelte/event';
  import type {FileDropOptions} from 'filedrop-svelte/options';
  type Nullable<T> = T | null;

  export let id: Nullable<string>;
  export let accept: string | string[];
  export let multiple: Nullable<boolean>;
  export let disabled: Nullable<boolean>;
  export let maxSize: Nullable<number>;
  export let minSize: Nullable<number>;
  export let fileLimit: Nullable<number>;
  export let clickToUpload = true;
  export let input: HTMLInputElement;
  let options: FileDropOptions = {};
  $: {
    options = {
      id,
      accept,
      disabled,
      clickToUpload,
      maxSize,
      minSize,
      input,
      fileLimit,
      multiple
    };
  }
  const dispatch = createEventDispatcher<Events>();

  function proxy<
    T extends keyof Events,
    E extends CustomEvent<Events[T]> = CustomEvent<Events[T]>
  >(type: T): (ev: E) => void {
    return function (ev) {
      ev.stopPropagation();
      dispatch(type, ev.detail);
    };
  }
  $: isMulti =
    (fileLimit === undefined || fileLimit > 1) &&
    (multiple === undefined || multiple);
</script>

<label
  {id}
  use:filedrop={options}
  on:filedrop={proxy('filedrop')}
  on:filedialogcancel={proxy('filedialogcancel')}
  on:filedialogclose={proxy('filedialogclose')}
  on:filedialogopen={proxy('filedialogopen')}
  on:filedragenter={proxy('filedragenter')}
  on:filedragleave={proxy('filedragleave')}
  on:filedragover={proxy('filedragover')}
  on:windowfiledragenter={proxy('windowfiledragenter')}
  on:windowfiledragleave={proxy('windowfiledragleave')}
  on:windowfiledragover={proxy('windowfiledragover')}
  on:dragenter
  on:dragleave
  on:dragover
>
  <slot>
    <p class="h-56 md:h-96">
      <span
        >Drag &amp; drop or select to upload {isMulti
          ? 'files'
          : 'a file '}</span
      >
    </p>
  </slot>
  <input type="file" />
</label>

<style>
  p {
    background-color: #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    border: 0.1em dashed #7c7b7a;
    outline: 1em solid #f0f0f0;
    transition: border 0.3s ease-in-out;
    outline-offset: -1.3em;
    padding: 0.475em;
  }
  p:focus {
    border-color: #fbbd23;
  }
  p:hover {
    border-color: #343434;
  }
  p span {
    transition: color 0.1s;
    transition: fill 0.1s;
  }
  p:focus span {
    color: #fbbd23;
    fill: #fbbd23;
  }
  p:hover span,
  p span {
    color: #373737;
    font-size: 1.2em;
    cursor: default;
    align-content: center;
  }
</style>
