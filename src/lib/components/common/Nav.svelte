<script>
  import {IconMenu2} from '@tabler/icons-svelte';
  import {_} from 'svelte-i18n';
  import Flags from '@components/common/Flags.svelte';
  import DrawSide from '@components/common/DrawSide.svelte';
  import {checked} from '@store/nav';

  const navId = 'filekit-nav';
</script>

<div class="drawer drawer-mobile z-10">
  <input
    id={navId}
    bind:checked={$checked}
    type="checkbox"
    class="drawer-toggle"
  />
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="w-full navbar bg-base-300 drop-shadow-lg">
      <div class="flex-none lg:hidden">
        <label for={navId} class="btn btn-square btn-ghost">
          <IconMenu2 class="inline-block w-6 h-6 stroke-current" />
        </label>
      </div>

      <a class="flex-none btn btn-ghost" href="/" title="filekit">
        <img src="/images/paper_folder.png" class="h-12" alt="Filekit Logo" />
        <span class="normal-case text-xl">Filekit</span>
      </a>

      <!-- Divider -->
      <div class="flex-1 px-2 mx-2">
        <ul class="invisible lg:visible menu menu-horizontal">
          <!-- Navbar menu content here -->
          <!-- TODO: link it -->
          <li><a href="/pdf">PDF</a></li>
          <li><a href="/img">Image</a></li>
          <li><a href="/convert">Convert</a></li>
        </ul>
      </div>

      <Flags />
    </div>
  </div>

  <DrawSide {navId} />
</div>
