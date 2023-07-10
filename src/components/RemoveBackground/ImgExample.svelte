<script lang="ts">
  import humanOrigin from '$lib/assets/images/human-origin.jpg';
  import humanResult from '$lib/assets/images/human-result.png';
  import stuffOrigin from '$lib/assets/images/stuff-origin.jpg';
  import stuffResult from '$lib/assets/images/stuff-result.png';
  import animalOrigin from '$lib/assets/images/animal-origin.jpg';
  import animalResult from '$lib/assets/images/animal-result.png';
  import characterOrigin from '$lib/assets/images/character-origin.jpg';
  import characterResult from '$lib/assets/images/character-result.png';

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
        Sample Images
      </h2>
    </div>
  </div>
  <div class="flex lg:gap-2 sm:gap-0 justify-center">
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
            <img src={humanOrigin} alt="humanOrigin" class="rounded" />

            <img src={humanResult} alt="humanResult" class="rounded" />
          </div>
        {/if}
        {#if buttonState === 'stuff'}
          <div
            class="mx-auto w-full px-8 max-w-7xl overflow-x-scroll md:overflow-auto px-8 scroll-pl-8 md:scroll-p-0 flex flex-nowrap gap-6 md:grid md:grid-cols-2"
          >
            <img src={stuffOrigin} alt="stuffOrigin" class="rounded" />

            <img src={stuffResult} alt="stuffResult" class="rounded" />
          </div>
        {/if}
        {#if buttonState === 'animal'}
          <div
            class="mx-auto w-full px-8 max-w-7xl overflow-x-scroll md:overflow-auto px-8 scroll-pl-8 md:scroll-p-0 flex flex-nowrap gap-6 md:grid md:grid-cols-2"
          >
            <img src={animalOrigin} alt="animalOrigin" class="rounded" />

            <img src={animalResult} alt="animalResult" class="rounded" />
          </div>
        {/if}
        {#if buttonState === 'character'}
          <div
            class="mx-auto w-full px-8 max-w-7xl overflow-x-scroll md:overflow-auto px-8 scroll-pl-8 md:scroll-p-0 flex flex-nowrap gap-6 md:grid md:grid-cols-2"
          >
            <img src={characterOrigin} alt="characterOrigin" class="rounded" />

            <img src={characterResult} alt="characterResult" class="rounded" />
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
