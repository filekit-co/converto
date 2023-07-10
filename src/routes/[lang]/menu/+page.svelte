<script lang="ts">
  import {pages} from '$lib/data';
  import {i} from '@inlang/sdk-js';
</script>

<div class="w-full px-2 py-20 sm:px-20 lg:px-32 text-center mx-auto">
  <h2 class="text-[clamp(2rem,6vw,4.5rem)] font-black join-item">
    Let's&nbsp<span class="text-secondary">Kit</span>
  </h2>

  <p
    class="text-base-content/60 font-title py-4 font-light md:text-xl lg:text-2xl"
  >
    {i(
      'Your all-in-one file toolkit for seamless file management, including format     conversions, image editing, compression, and protection.'
    )}
  </p>

  <div class="mx-auto max-w-screen-xl px-4 pt-10 pb-8 lg:pb-12">
    <ul class="space-y-8">
      {#each pages as page}
        <li class="space-y-4">
          <h2 class="text-lg font-bold text-gray-900 sm:text-xl">
            {page.key}
          </h2>
          <ul
            class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {#each page.value as item}
              <li>
                <a href={item.href}
                  ><div
                    class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900"
                  >
                    <div
                      class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2"
                    >
                      <div class="p-4 sm:p-6">
                        <div class="flex flex-col items-center">
                          <span
                            aria-hidden="true"
                            role="img"
                            class="text-lg sm:text-xl">{item.icon}</span
                          >
                          <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">
                            {item.text}
                          </h2>
                          <p class="mt-1 text-xs text-gray-700">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            {/each}
          </ul>
        </li>
      {/each}
    </ul>
  </div>
</div>
