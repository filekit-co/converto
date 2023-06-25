<script lang="ts">
    import { _ } from '@store/i18n';
  import FileUploader from '@components/common/FileUploader.svelte';
</script>

<div class="w-full px-2 py-32 lg:px-10">
  <div class="text-center">
    <h2
      class="mx-auto text-[clamp(2rem,6vw,4.5rem)] font-black leading-none max-[1280px]:!tracking-normal"
    >
      {@html $_('File Converter')}
      <br />
      <h2
        class="bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text [-webkit-text-fill-color:transparent] max-[1280px]:!tracking-normal [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)]"
      >
        {@html $_('Convert your files to any format')}
      </h2>
    </h2>
    <p class="text-base-content/60 font-title py-4 font-light md:text-2xl">
      {@html $_('Please')} <span class="underline underline-offset-4">{@html $_('drag & drop')}</span> {@html $_('files')}
      {@html $_('anywhere on the screen or click the')}
      <span class="underline underline-offset-4">{@html $_('dropzone')}</span>
      {@html $_('below.')}
    </p>

    <div class="h-12" />

    <div class="mx-10">
      <FileUploader />
    </div>
  </div>
</div>
