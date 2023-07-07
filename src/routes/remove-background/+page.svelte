<script lang="ts">
  import ImageUploader from '@components/common/ImageUploader.svelte';
  import Feature from '@components/home/Feature.svelte';
  import ImgExample from '@components/common/ImgExample.svelte';
  import {i} from '@inlang/sdk-js';
</script>

<div class="w-full px-2 py-32 lg:px-10">
  <div class="text-center">
    <h2
      class="mx-auto text-[clamp(2rem,6vw,4.5rem)] font-black leading-none max-[1280px]:!tracking-normal"
    >
      {i('Remove Background')}

      <h2
        class="my-5 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text [-webkit-text-fill-color:transparent] max-[1280px]:!tracking-normal [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)]"
      >
        {i('Remove Background of your Image')}
      </h2>
    </h2>
    <p class="text-base-content/60 font-title py-4 font-light md:text-2xl">
      {i(
        'Please drag & drop files anywhere on the screen or click the dropzone below.'
      )}
    </p>

    <div class="mx-10 py-12 px-4">
      <ImageUploader />
    </div>
    <ImgExample />

    <!-- <Carosel /> -->
    <Feature />
  </div>
</div>
