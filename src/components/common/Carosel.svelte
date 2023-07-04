<script lang="ts">
  import {scrollIntoView} from './scrollView';
  import human from '$lib/assets/images/carosel/human.jpg';
  import humanResult from '$lib/assets/images/carosel/human-result.png';
  import animal from '$lib/assets/images/carosel/animal.jpg';
  import animalResult from '$lib/assets/images/carosel/animal-result.png';
  import stuff from '$lib/assets/images/carosel/stuff.jpg';
  import stuffResult from '$lib/assets/images/carosel/stuff-result.png';
  import car from '$lib/assets/images/carosel/car.jpg';
  import carResult from '$lib/assets/images/carosel/car-result.png';

  const images = [
    {title: 'Person Before', src: human},
    {title: 'Person After', src: humanResult},
    {title: 'Animal Before', src: animal},
    {title: 'Animal After', src: animalResult},
    {title: 'Stuff Before', src: stuff},
    {title: 'Stuff After', src: stuffResult},
    {title: 'Car Before', src: car},
    {title: 'Car After', src: carResult}
  ];

  let name = 'carosel';
  const getItemId = (index: number, carouselName = name) =>
    `${carouselName}-item-${index}`;
</script>

<div class="py-4 md:py-6 overflow-x-clip mb-8">
  <div class="mx-auto w-full px-8 max-w-5xl max-h-3xl">
    <div class="py-4 md:py-8">
      <h2
        class="font-display font-bold text-typo m-0 text-4xl md:text-5xl text-center"
      >
        Removed Background Image Example
      </h2>
    </div>

    <ul
      class="flex overflow-x-auto gap-6 snap-x snap-mandatory before:shrink-0 before:w-[30vw] after:shrink-0 after:w-[30vw] pb-6 bg-gray-100 rounded"
    >
      {#each images as { title, src }, index}
        <li id={getItemId(index)} class="shrink-0 snap-center shadow-lg">
          <img {src} alt={title} class="rounded" style="height: 500px" />
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          />
        </li>
      {/each}
    </ul>
  </div>
</div>
