<script>
  // import {t} fro../../store/i18n;
  import {_} from 'svelte-i18n';
  import logo from '$lib/assets/images/paper_folder.png';
</script>

<div class="hero min-h-screen py-32 bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={logo} class="rounded-lg sm:max-w-md" alt="hero" />

    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-black">File Kit</h1>
      <p class="py-6 font-title">
        {@html $_('Description')}
      </p>
      <a href="/menu" class="btn btn-accent btn-lg btn-wide px-12 normal-case">
        Let's kit
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 md:inline-block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </a>
    </div>
  </div>
</div>
