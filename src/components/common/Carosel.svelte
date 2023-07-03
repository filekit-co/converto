<script lang="ts">
  import {scrollIntoView} from './scrollView';

  const images = [
    {title: 'Person Before', src: '/images/carosel/human.jpg'},
    {title: 'Person After', src: '/images/carosel/human-result.png'},
    {title: 'Animal Before', src: '/images/carosel/animal.jpg'},
    {title: 'Animal After', src: '/images/carosel/animal-result.png'},
    {title: 'Stuff Before', src: '/images/carosel/stuff.jpg'},
    {title: 'Stuff After', src: '/images/carosel/stuff-result.png'},
    {title: 'Car Before', src: '/images/carosel/car.jpg'},
    {title: 'Car After', src: '/images/carosel/car-result.png'}
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
