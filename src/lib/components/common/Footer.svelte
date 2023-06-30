<!-- svelte-ignore a11y-missing-attribute -->
<script>
  import {_} from 'svelte-i18n';
  import {IconBrandGithub} from '@tabler/icons-svelte';
</script>

<footer class="footer p-10 bg-base-200 text-base-content">
  <div>
    <img src="/images/paper_folder.png" style="width: 100px" />
    <p>filekit.co<br />All Rights are reserved</p>
  </div>
  <div>
    <span class="footer-title">{@html $_('Services')}</span>
    <a class="link link-hover" href="/compress-pdf">Compress-PDF</a>
    <a class="link link-hover" href="/protect-pdf">Protect-PDF</a>
    <a class="link link-hover" href="/unlock-pdf">Unlock-PDF</a>
    <a class="link link-hover" href="/remove-background">Remove-Background</a>
  </div>
  <div>
    <span class="footer-title">Conversion</span>
    <a class="link link-hover" href="/pdf-to-doc">PDF to DOC</a>
    <a class="link link-hover" href="/pdf-to-docx">PDF to DOCX</a>
    <a class="link link-hover" href="/pdf-to-word">PDF to WORD</a>
    <a class="link link-hover" href="/xps-to-doc">XPS to DOC</a>
    <a class="link link-hover" href="/xps-to-docx">XPS to DOCX</a>
    <a class="link link-hover" href="/xps-to-pdf">XPS to PDF</a>
    <a class="link link-hover" href="/cbz-to-pdf">CBZ to PDF</a>
    <a class="link link-hover" href="/epub-to-doc">EPUB to DOC</a>
    <a class="link link-hover" href="/epub-to-docx">EPUB to DOCX</a>
    <a class="link link-hover" href="/epub-to-pdf">EPUB to PDF</a>
    <a class="link link-hover" href="/fb2-to-pdf">FB2 to PDF</a>
    <a class="link link-hover" href="/oxps-to-pdf">OXPS to PDF</a>
  </div>
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
