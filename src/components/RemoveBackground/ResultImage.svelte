<script lang="ts">
  import {i} from '@inlang/sdk-js';

  export let fileName: string;
  export let imageURL: string;
  export let resultImage: string;
  export let resultFile: string;
  const progress = 100;
</script>

<ul class=" mt-6 bg-white rounded divide-y divide-gray-200 shadow">
  <li class="p-3 flex items-center justify-between">
    <div class="w-9 h-9 bg-gray-300">
      <img src={resultImage} alt="resultImage" />
    </div>
    {#if fileName}
      <div class="text-sm text-gray-700">{fileName}</div>
    {:else}
      <div class="text-sm text-gray-700">{imageURL}</div>
    {/if}

    <div
      class="w-40 bg-gray-200 rounded-full h-5 shadow-inner overflow-hidden relative flex items-center justify-center"
    >
      <div
        class="inline-block h-full bg-yellow-400 absolute top-0 left-0"
        style="width: {progress}%"
      />
      <div
        class=" relative z-10 text-xs font-semibold text-center text-white drop-shadow text-shadow"
      >
        {progress}%
      </div>
    </div>
    <button
      class="w-40 bg-cyan-200 rounded-full h-5 shadow-inner overflow-hidden relative flex items-center justify-center"
    >
      <div
        class=" relative z-10 text-xs font-semibold text-center text-white drop-shadow text-shadow"
      >
        <a
          target="_blank"
          rel="noopener"
          href={resultFile}
          download="Result_Image"
        >
          {i('Download')}
        </a>
      </div>
    </button>
  </li>
</ul>
