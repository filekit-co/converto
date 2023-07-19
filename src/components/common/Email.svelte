<script lang="ts">
  import {language} from '@inlang/sdk-js';

  $: status = '';
  const handleSubmit = async (data: any) => {
    status = 'Submitting...';
    const formData = new FormData(data.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: json
    });
    const result = await response.json();
    if (result.success) {
      status = result.message || 'Success';
    }
  };
</script>

<div class="flex min-h-screen items-center justify-start px-10 sm:px-2">
  <div class="mx-auto w-full max-w-lg">
    {#if status}
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-black">File Kit</h1>
        <p class="py-6 font-title">{status}</p>

        <button class="mt-5">
          <a
            href={`/${language}`}
            class="relative inline-block text-sm font-medium text-accent group active:text-accent-500 focus:outline-none focus:ring"
          >
            <span
              class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-accent group-hover:translate-y-0 group-hover:translate-x-0"
            />

            <span
              class="relative block px-8 py-3 bg-neutral-700 border border-current"
            >
              Go Home
            </span>
          </a>
        </button>
      </div>
    {:else}
      <h1 class="text-4xl font-medium">Contact us</h1>
      <p class="mt-3">Email us at filekitco@domain.com or message us here:</p>

      <form on:submit|preventDefault={handleSubmit} class="mt-10">
        <input
          type="hidden"
          name="access_key"
          value="546bac44-4630-441a-a1c3-979d149c30f7"
        />
        <div class="grid gap-6 sm:grid-cols-2">
          <div class="relative z-0">
            <input
              id="name"
              type="text"
              name="name"
              class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
              required
            />
            <label
              for="name"
              class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >Your name</label
            >
          </div>
          <div class="relative z-0">
            <input
              id="email"
              type="text"
              name="email"
              class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
              required
            />
            <label
              for="email"
              class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >Your email</label
            >
          </div>
          <div class="relative z-0 col-span-2">
            <textarea
              id="message"
              name="message"
              rows="5"
              class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
              required
            />
            <label
              for="message"
              class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >Your message</label
            >
          </div>
        </div>
        <div class="text-center sm:text-justify">
          <button
            type="submit"
            class="mt-10 rounded-md bg-black px-10 py-2 text-white"
            >Send Message</button
          >
        </div>
      </form>
    {/if}
  </div>
</div>
