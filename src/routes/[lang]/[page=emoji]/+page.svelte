<script context="module">
  import * as ue from 'unicode-emoji';
</script>

<script lang="ts">
  import {onDestroy} from 'svelte';
  import {IconSearch} from '@tabler/icons-svelte';
  import {copy} from 'svelte-copy';

  const versions: ue.Version[] = [
    '15.0',
    '14.0',
    '13.1',
    '13.0',
    '12.1',
    '12.0',
    '11.0',
    '5.0',
    '4.0',
    '3.0',
    '2.0',
    '1.0',
    '0.7',
    '0.6'
  ];
  let selectedVersion: ue.Version;
  $: selectedVersion = versions[0];

  let groupedEmojis: Record<string, ue.BaseEmoji[]>;
  $: groupedEmojis = ue.getEmojisGroupedBy('category', {
    version: [selectedVersion]
  });

  let flatEmojis: ue.BaseEmoji[];
  $: {
    flatEmojis = Object.values(groupedEmojis).flat();
  }

  let search: string = '';
  let filteredEmojis: ue.BaseEmoji[] = [];

  let timer: ReturnType<typeof setTimeout> | null = null;
  const debounce = (event: Event) => {
    const target = event.target as HTMLInputElement;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      search = target.value;
      searchEmojis();
    }, 150);
  };
  const clearSearch = () => {
    search = '';
  };

  const searchEmojis = () => {
    const searchTerms = search.toLowerCase().split(' ');
    filteredEmojis = flatEmojis.filter(emoji =>
      isMatchTerms(emoji, searchTerms)
    );
  };

  function isMatchTerms(emoji: ue.BaseEmoji, searchTerms: string[]) {
    return searchTerms.some(searchTerm => {
      return (
        emoji.description.toLowerCase().includes(searchTerm) ||
        emoji.keywords.some(keyword => {
          return keyword.toLowerCase().includes(searchTerm);
        })
      );
    });
  }

  let clickedEmoji: ue.BaseEmoji | undefined;
  $: clickedEmoji;

  function clearClicked() {
    clickedEmoji = undefined;
  }

  function handleClick(emoji: ue.BaseEmoji) {
    clickedEmoji = emoji;
  }

  onDestroy(() => {
    if (timer) {
      clearTimeout(timer);
    }
  });
</script>

<div class="mt-5 lg:mt-14 text-center">
  <h2 class="text-[clamp(2rem,6vw,4.5rem)] font-black pb-8">
    Let's&nbsp<span class="text-accent">Emoji</span>
  </h2>
  <div class="join flex justify-center">
    <input
      type="text"
      placeholder="Search for..."
      bind:value={search}
      on:keyup={debounce}
      class="join-item input input-bordered input-accent w-7/12"
    />
    <select
      class="select select-accent join-item"
      bind:value={selectedVersion}
      on:change={clearSearch}
    >
      {#each versions as version}
        <option value={version}>{version}</option>
      {/each}
    </select>

    <button class="btn btn-accent join-item disabled">
      <IconSearch class="h-6 w-6" />
    </button>
  </div>
  <!-- 
  <p class="text-center font-bold py-4 text-4xl lg:text-8xl">
    Click emojis to copy
  </p> -->
</div>

<div class="mx-auto max-w-screen-xl px-4 pb-8 lg:pb-12">
  {#if search}
    <ul class="grid grid-cols-7 lg:grid-cols-16 gap-4">
      {#each filteredEmojis as emoji}
        <li>
          <button
            class="emoji"
            title={emoji.description}
            on:click={() => handleClick(emoji)}
          >
            <span class="sr-only">{emoji.description}</span>
            <span class="text-3xl sm:text-5xl">{emoji.emoji}</span>
          </button>
        </li>
      {/each}
    </ul>
  {:else}
    <ul>
      {#each Object.entries(groupedEmojis) as [category, emojis]}
        <li class="mt-8 md:mt-16">
          <h2 class="text-center text-lg font-bold text-gray-800 sm:text-xl">
            {category.toUpperCase()}
          </h2>
          <ul class="mt-4 md:mt-8 grid grid-cols-7 lg:grid-cols-16 gap-4">
            {#each emojis as emoji}
              <li>
                <button
                  class="emoji"
                  title={emoji.description}
                  on:click={() => handleClick(emoji)}
                >
                  <span class="sr-only">{emoji.description}</span>
                  <span class="text-3xl sm:text-5xl">{emoji.emoji}</span>
                </button>
              </li>
            {/each}
          </ul>
        </li>
      {/each}
    </ul>
  {/if}
</div>

{#if clickedEmoji}
  <dialog open class="modal flex items-center justify-center">
    <form
      method="dialog"
      class="modal-box flex flex-col items-center p-8 bg-white rounded-lg shadow-lg relative"
    >
      <button
        type="button"
        class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
        on:click={clearClicked}>✕</button
      >
      <div class="relative">
        <button
          class="text-9xl mb-4 cursor-pointer"
          use:copy={clickedEmoji?.emoji}
          on:svelte-copy={() => {
            alert(`Copied to clipboard: ${clickedEmoji?.emoji}`);
            clearClicked();
          }}
        >
          {clickedEmoji.emoji}
        </button>
        <div class="absolute top-2 right-0 badge badge-secondary">copy</div>
      </div>
      <table class="table-auto text-left w-full mb-2">
        <tr>
          <td class="font-bold">Description</td>
          <td>{clickedEmoji.description}</td>
        </tr>
        <tr>
          <td class="font-bold">Keywords</td>
          <td>{clickedEmoji.keywords?.join(', ') ?? 'emoji'}</td>
        </tr>
        <tr>
          <td class="font-bold">Category</td>
          <td>{clickedEmoji.category}</td>
        </tr>
        <tr>
          <td class="font-bold">Group</td>
          <td>{clickedEmoji.group}</td>
        </tr>
        <tr>
          <td class="font-bold">Subgroup</td>
          <td>{clickedEmoji.subgroup}</td>
        </tr>
        <tr>
          <td class="font-bold">Version</td>
          <td>{clickedEmoji.version}</td>
        </tr>
      </table>
    </form>
  </dialog>
{/if}
