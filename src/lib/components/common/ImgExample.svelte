<script lang="ts">
  let buttonState = 'human';
  function handleClick(event: string) {
    buttonState = event;
  }
</script>

<div class="py-4 md:py-6 overflow-x-clip">
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

  <div class="mx-auto w-full px-8 max-w-5xl">
    <div class="relative group">
      <div class=" py-4 md:py-8">
        {#if buttonState === 'human'}
          <div
            class="mx-auto w-full h-full px-8 max-w-7xl overflow-x-scroll md:overflow-auto px-8 scroll-pl-8 md:scroll-p-0 flex flex-nowrap gap-6 md:grid md:grid-cols-2"
          >
            <img src="human-origin.jpg" />

            <img src="human-result.png" />
          </div>
        {/if}
        {#if buttonState === 'stuff'}
          <div
            class="mx-auto w-full px-8 max-w-7xl overflow-x-scroll md:overflow-auto px-8 scroll-pl-8 md:scroll-p-0 flex flex-nowrap gap-6 md:grid md:grid-cols-2"
          >
            <img src="stuff-origin.jpg" />

            <img src="stuff-result.png" />
          </div>
        {/if}
        {#if buttonState === 'animal'}
          <div
            class="mx-auto w-full px-8 max-w-7xl overflow-x-scroll md:overflow-auto px-8 scroll-pl-8 md:scroll-p-0 flex flex-nowrap gap-6 md:grid md:grid-cols-2"
          >
            <img src="animal-origin.jpg" />

            <img src="animal-result.png" />
          </div>
        {/if}
        {#if buttonState === 'character'}
          <div
            class="mx-auto w-full px-8 max-w-7xl overflow-x-scroll md:overflow-auto px-8 scroll-pl-8 md:scroll-p-0 flex flex-nowrap gap-6 md:grid md:grid-cols-2"
          >
            <img src="character-origin.jpg" />

            <img src="character-result.png" />
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  .checkerboard {
    --checkerboard-black-color: #f8f9f9;
    --checkerboard-white-color: transparent;
    background-image: linear-gradient(
        45deg,
        var(--checkerboard-black-color) 25%,
        var(--checkerboard-white-color) 25%
      ),
      linear-gradient(
        -45deg,
        var(--checkerboard-black-color) 25%,
        var(--checkerboard-white-color) 25%
      ),
      linear-gradient(
        45deg,
        var(--checkerboard-white-color) 75%,
        var(--checkerboard-black-color) 75%
      ),
      linear-gradient(
        -45deg,
        var(--checkerboard-white-color) 75%,
        var(--checkerboard-black-color) 75%
      );
    background-position: 0 0, 0 10px, 10px -10px, -10px 0;
    background-size: 20px 20px;
  }
  .prism-imagedragger input[type='range'] {
    margin-left: -1.5rem;
    position: relative;
    width: calc(100% + 3rem);
  }

  .prism-imagedragger input[type='range']:focus-visible::-webkit-slider-thumb {
    border: 6px solid #0f70e6;
  }

  .prism-imagedragger input[type='range']::-webkit-slider-runnable-track {
    background: transparent;
  }

  .prism-imagedragger input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: rgba(45, 45, 45, 0.75);
    background-image: url(/imagedragger-thumb-arrows.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    border: 2px solid #fff;
    border-radius: 9999px;
    box-shadow: 0 0 56px #45454533;
    cursor: -webkit-grab;
    cursor: grab;
    height: 3rem;
    -webkit-transition: ease-in-out;
    transition: ease-in-out;
    transition-duration: 0.1s;
    width: 3rem;
  }

  .prism-imagedragger input[type='range']::-moz-range-thumb {
    -webkit-appearance: none;
    background: rgba(45, 45, 45, 0.75);
    background-image: url(/imagedragger-thumb-arrows.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    border: 2px solid #fff;
    border-radius: 9999px;
    box-shadow: 0 0 56px #45454533;
    cursor: grab;
    height: 3rem;
    -moz-transition: ease-in-out;
    transition: ease-in-out;
    transition-duration: 0.1s;
    width: 3rem;
  }

  .prism-imagedragger input[type='range']::-ms-thumb {
    -webkit-appearance: none;
    background: rgba(45, 45, 45, 0.75);
    background-image: url(/imagedragger-thumb-arrows.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    border: 2px solid #fff;
    border-radius: 9999px;
    box-shadow: 0 0 56px #45454533;
    cursor: grab;
    height: 3rem;
    -ms-transition: ease-in-out;
    transition: ease-in-out;
    transition-duration: 0.1s;
    width: 3rem;
  }

  .prism-imagedragger input[type='range']::-webkit-slider-thumb:active,
  .prism-imagedragger input[type='range']::-webkit-slider-thumb:focus,
  .prism-imagedragger input[type='range']::-webkit-slider-thumb:hover {
    transform: scale(1.2);
    transform-origin: center center;
  }

  .prism-imagedragger input[type='range']::-webkit-slider-thumb:active,
  .prism-imagedragger input[type='range']::-webkit-slider-thumb:focus {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }

  .prism-imagedragger input[type='range'][disabled]::-webkit-slider-thumb {
    display: none;
  }

  .prism-imagedragger input[type='range'][disabled]::-moz-range-thumb {
    display: none;
  }

  .prism-imagedragger input[type='range'][disabled]::-ms-thumb {
    display: none;
  }
  .prism .animate-pulse {
    -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
</style>
