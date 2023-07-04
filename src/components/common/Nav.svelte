<script>
  import {IconMenu2} from '@tabler/icons-svelte';
  import {_} from 'svelte-i18n';
  import Flags from '@components/common/Flags.svelte';
  import Sidebar from '@components/common/Sidebar.svelte';
  import {checked} from '@store/nav';
  import logo from '$lib/assets/images/paper_folder.png';
  import {currentLang} from '@store/i18n';
  let lang = '';
  currentLang.subscribe(value => {
    lang = value;
  });

  const navId = 'filekit-nav';
</script>

<div class="drawer z-10">
  <input
    id={navId}
    bind:checked={$checked}
    type="checkbox"
    class="drawer-toggle"
  />
  <div class="drawer-content">
    <!-- Navbar -->
    <nav class="navbar w-full bg-base-300 drop-shadow-lg">
      <div class="flex-none">
        <label for={navId} class="btn btn-square btn-ghost">
          <IconMenu2 class="inline-block w-6 h-6 stroke-current" />
        </label>
      </div>
      <a class="flex-none btn btn-ghost" href={`/${lang}/`} title="filekit">
        <img src={logo} class="h-12" alt="Filekit Logo" />
        <span class="normal-case text-xl">Filekit</span>
      </a>
      <div id="divider" class="flex-1 px-2 mx-2" />
      <Flags />
    </nav>
  </div>
  <Sidebar {navId} />
</div>
