<script lang="ts">
  import type {Faq} from '$lib/types';

  export let faqs: Faq[];
</script>

<div
  class="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white"
>
  {#each faqs as faq}
    <details class="group p-6 [&_summary::-webkit-details-marker]:hidden" open>
      <summary
        class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
      >
        <h2 class="text-lg font-medium">
          Q: {faq.question}
        </h2>

        <span class="relative h-5 w-5 shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </summary>

      <p class="mt-4 leading-relaxed text-gray-700">
        A: {faq.answer}
      </p>
    </details>
  {/each}
</div>
