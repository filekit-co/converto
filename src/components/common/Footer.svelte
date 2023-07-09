<script>
  import {pages} from '$lib/data';
  import logo from '$lib/assets/images/paper_folder.png';
  import {language} from '@inlang/sdk-js';
</script>

<footer class="footer p-10 bg-base-200 text-base-content">
  <div>
    <img src={logo} alt="logo" style="width: 100px" />
    <p>filekit.co<br />All Rights are reserved</p>
  </div>

  {#each pages as page}
    <div>
      <span class="footer-title">{page.key}</span>
      {#each page.value as link}
        <a class="link link-hover" href={`/${language}/${link.href}`}
          >{link.text}</a
        >
      {/each}
    </div>
  {/each}
</footer>
