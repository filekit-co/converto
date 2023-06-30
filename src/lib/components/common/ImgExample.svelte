<script lang="ts">
  let buttonState = 'human';
  function handleClick(event: string) {
    buttonState = event;
  }
</script>

<div class="py-4 md:py-6 overflow-x-cli">
  <div class="mx-auto w-full px-8 max-w-5xl">
    <div class="py-4 md:py-8">
      <h2
        class="font-display font-bold text-typo m-0 text-4xl md:text-5xl text-center"
      >
        Removed Background Image Example
      </h2>
    </div>
  </div>
  <div
    role="tablist"
    aria-orientation="horizontal"
    class=" hide-scrollbars flex space-x-2 -my-2 py-2 justify-start md:justify-center overflow-x-scroll md:overflow-auto px-8 scroll-pl-8 md:scroll-p-0"
  >
    <button
      on:click={() => handleClick('human')}
      class="btn btn-primary btn-ghost">human</button
    >
    <button
      on:click={() => handleClick('stuff')}
      class="btn btn-primary btn-ghost">stuff</button
    >
    <button
      on:click={() => handleClick('animal')}
      class="btn btn-primary btn-ghost">animal</button
    >
    <button
      on:click={() => handleClick('character')}
      class="btn btn-primary btn-ghost">character</button
    >
  </div>

  <div class="mx-auto w-full px-8 max-w-5xl hide-scrollbars">
    <div class="relative group bg-gray-100 mb-8 rounded-2xl">
      <div class=" py-4 md:py-8">
        {#if buttonState === 'human'}
          <div
            class="mx-auto w-full h-full px-8 max-w-7xl overflow-x-scroll md:overflow-auto px-8 scroll-pl-8 md:scroll-p-0 flex flex-nowrap gap-6 md:grid md:grid-cols-2"
          >
            <img src="images/human-origin.jpg" class="rounded" />

            <img src="images/human-result.png" class="rounded" />
          </div>
        {/if}
        {#if buttonState === 'stuff'}
          <div
            class="mx-auto w-full px-8 max-w-7xl overflow-x-scroll md:overflow-auto px-8 scroll-pl-8 md:scroll-p-0 flex flex-nowrap gap-6 md:grid md:grid-cols-2"
          >
            <img src="images/stuff-origin.jpg" class="rounded" />

            <img src="images/stuff-result.png" class="rounded" />
          </div>
        {/if}
        {#if buttonState === 'animal'}
          <div
            class="mx-auto w-full px-8 max-w-7xl overflow-x-scroll md:overflow-auto px-8 scroll-pl-8 md:scroll-p-0 flex flex-nowrap gap-6 md:grid md:grid-cols-2"
          >
            <img src="images/animal-origin.jpg" class="rounded" />

            <img src="images/animal-result.png" class="rounded" />
          </div>
        {/if}
        {#if buttonState === 'character'}
          <div
            class="mx-auto w-full px-8 max-w-7xl overflow-x-scroll md:overflow-auto px-8 scroll-pl-8 md:scroll-p-0 flex flex-nowrap gap-6 md:grid md:grid-cols-2"
          >
            <img src="images/character-origin.jpg" class="rounded" />

            <img src="images/character-result.png" class="rounded" />
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
