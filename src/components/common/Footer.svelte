<!-- svelte-ignore a11y-missing-attribute -->
<script>
  import {_} from 'svelte-i18n';
  import {pages} from '$lib/data';
</script>

<footer class="footer p-10 bg-base-200 text-base-content">
  <div>
    <img src="/images/paper_folder.png" style="width: 100px" />
    <p>filekit.co<br />All Rights are reserved</p>
  </div>

  {#each pages as page}
    <div>
      <span class="footer-title">{page.key}</span>
      {#each page.value as link}
        <a class="link link-hover" href={link.href}>{link.text}</a>
      {/each}
    </div>
  {/each}

  <!-- TODO: update company info -->
  <div>
    <span class="footer-title">{@html $_('Company')}</span>
    <a class="link link-hover">{@html $_('About us')}</a>
    <a class="link link-hover">{@html $_('Contact')}</a>
    <a class="link link-hover">{@html $_('Jobs')}</a>
    <a class="link link-hover">{@html $_('Press kit')}</a>
  </div>
  <div>
    <span class="footer-title">{@html $_('Legal')}</span>
    <a class="link link-hover">{@html $_('Terms of use')}</a>
    <a class="link link-hover">{@html $_('Privacy policy')}</a>
    <a class="link link-hover">{@html $_('Cookie policy')}</a>
  </div>
</footer>
