<script lang="ts">
  import {i} from '@inlang/sdk-js';

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
        {i('Sample Images')}
      </h2>
    </div>
  </div>
  <div class="flex lg:gap-2 sm:gap-0 justify-center">
    <button
      on:click={() => handleClick('human')}
      class="btn btn-primary btn-ghost">{i('Human')}</button
    >
    <button
      on:click={() => handleClick('stuff')}
      class="btn btn-primary btn-ghost">{i('Stuff')}</button
    >
    <button
      on:click={() => handleClick('animal')}
      class="btn btn-primary btn-ghost">{i('Animal')}</button
    >
    <button
      on:click={() => handleClick('character')}
      class="btn btn-primary btn-ghost">{i('Character')}</button
    >
  </div>

  <div class="carousel rounded-box mx-auto w-full px-8 max-w-5xl">
    {#if buttonState === 'human'}
      <div class="carousel-item w-1/2">
        <img src={humanOrigin} alt="humanOrigin" class="rounded-2xl" />
      </div>
      <div class="carousel-item w-1/2">
        <img src={humanResult} alt="humanResult" class="rounded-2xl" />
      </div>
    {/if}
    {#if buttonState === 'stuff'}
      <div class="carousel-item w-1/2">
        <img src={stuffOrigin} alt="stuffOrigin" class="rounded-2xl" />
      </div>
      <div class="carousel-item w-1/2">
        <img src={stuffResult} alt="stuffResult" class="rounded-2xl" />
      </div>
    {/if}
    {#if buttonState === 'animal'}
      <div class="carousel-item w-1/2">
        <img src={animalOrigin} alt="animalOrigin" class="rounded-2xl" />
      </div>
      <div class="carousel-item w-1/2">
        <img src={animalResult} alt="animalResult" class="rounded-2xl" />
      </div>
    {/if}
    {#if buttonState === 'character'}
      <div class="carousel-item w-1/2">
        <img
          src={characterOrigin}
          alt="characterOrigin"
          class="w-full rounded"
        />
      </div>
      <div class="carousel-item w-1/2">
        <img
          src={characterResult}
          alt="characterResult"
          class="w-full rounded"
        />
      </div>
    {/if}
  </div>
</div>
