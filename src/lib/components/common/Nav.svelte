<script>
  import {IconMenu2} from '@tabler/icons-svelte';
  import {_} from 'svelte-i18n';
  import Flags from '@components/common/Flags.svelte';

  const navId = 'filekit-nav';
</script>

<div class="drawer z-10">
  <input id={navId} type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="w-full navbar bg-base-300">
      <a class="flex-none btn btn-ghost" href="/" title="filekit">
        <img src="/images/paper_folder.png" class="h-12" alt="Filekit Logo" />
        <span class="normal-case text-xl">Filekit</span>
      </a>

      <div class="flex-1">
        <Flags />
      </div>
      <!-- Divider -->
      <div class="flex-1 px-2 mx-2" />
      <div class="flex-none md:hidden">
        <label for={navId} class="btn btn-square btn-ghost">
          <IconMenu2 class="inline-block w-6 h-6 stroke-current" />
        </label>
      </div>

      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
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

  <!-- TODO: fill sidebar -->
  <!-- drawer side content -->
  <div class="drawer-side">
    <label for={navId} class="drawer-overlay" />
    <ul class="menu p-4 w-80 h-full bg-base-200">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
