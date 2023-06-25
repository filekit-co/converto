<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-label-has-associated-control -->
<script>
  import {t, langs, setLang } from '../../i18n/i18n';
</script>

<div class="navbar bg-base-300 drop-shadow-lg">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          /></svg
        >
      </label>

      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a href="/">{@html $t("Home")}</a></li>
        <li>
          <a>Parent</a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a href="/remove">{@html $t("Remove")}</a></li>
      </ul>
    </div>
    <img
      src="/images/paper_folder.png"
      class="mr-3 h-10 hidden md:block"
      alt="Converto Logo"
    />
    <a class="btn btn-ghost normal-case text-xl">Converto</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/">{@html $t("Home")}</a></li>
      <li tabindex="0">
        <details>
          <summary>{@html $t("Convert")}</summary>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a href="/remove">{@html $t("Remove")}</a></li>
    </ul>
  </div>

  <div class="navbar-end">
    <details class="dropdown dropdown-end">
      <summary class="m-1 btn lang-button">
        <svg class="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
          <path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"></path>
          <path d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z"></path>
        </svg>
      </summary>

      {#each langs as lang}
      <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li>
          <button on:click={() => setLang('en')}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 36 36"><path fill="#00247D" d="M0 9.059V13h5.628zM4.664 31H13v-5.837zM23 25.164V31h8.335zM0 23v3.941L5.63 23zM31.337 5H23v5.837zM36 26.942V23h-5.631zM36 13V9.059L30.371 13zM13 5H4.664L13 10.837z"/><path fill="#CF1B2B" d="M25.14 23l9.712 6.801c.471-.479.808-1.082.99-1.749L28.627 23H25.14zM13 23h-2.141l-9.711 6.8c.521.53 1.189.909 1.938 1.085L13 23.943V23zm10-10h2.141l9.711-6.8c-.521-.53-1.188-.909-1.937-1.085L23 12.057V13zm-12.141 0L1.148 6.2C.677 6.68.34 7.282.157 7.949L7.372 13h3.487z"/><path fill="#EEE" d="M36 21H21v10h2v-5.836L31.335 31H32c1.117 0 2.126-.461 2.852-1.199L25.14 23h3.487l7.215 5.052c.093-.337.158-.686.158-1.052v-.058L30.369 23H36v-2zM0 21v2h5.63L0 26.941V27c0 1.091.439 2.078 1.148 2.8l9.711-6.8H13v.943l-9.914 6.941c.294.07.598.116.914.116h.664L13 25.163V31h2V21H0zM36 9c0-1.091-.439-2.078-1.148-2.8L25.141 13H23v-.943l9.915-6.942C32.62 5.046 32.316 5 32 5h-.663L23 10.837V5h-2v10h15v-2h-5.629L36 9.059V9zM13 5v5.837L4.664 5H4c-1.118 0-2.126.461-2.852 1.2l9.711 6.8H7.372L.157 7.949C.065 8.286 0 8.634 0 9v.059L5.628 13H0v2h15V5h-2z"/><path fill="#CF1B2B" d="M21 15V5h-6v10H0v6h15v10h6V21h15v-6z"/></svg>
            English
          </button>
        </li>
        <li>
          <button on:click={() => setLang('ch')}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 36 36"><path fill="#DE2910" d="M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z"/><path fill="#FFDE02" d="M11.136 8.977l.736.356.589-.566-.111.81.72.386-.804.144-.144.804-.386-.72-.81.111.566-.589zm4.665 2.941l-.356.735.566.59-.809-.112-.386.721-.144-.805-.805-.144.721-.386-.112-.809.59.566zm-.957 3.779l.268.772.817.017-.651.493.237.783-.671-.467-.671.467.236-.783-.651-.493.817-.017zm-3.708 3.28l.736.356.589-.566-.111.81.72.386-.804.144-.144.804-.386-.72-.81.111.566-.589zM7 10.951l.929 2.671 2.826.058-2.253 1.708.819 2.706L7 16.479l-2.321 1.615.819-2.706-2.253-1.708 2.826-.058z"/></svg>
            Chinese
          </button>
        </li>
        <li>
          <button on:click={() => setLang('in')}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 36 36" xml:space="preserve"><path fill="#138808" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-5H0v5z"/><path fill="#F93" d="M36 14V9a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v5h36z"/><path fill="#F7F7F7" d="M0 13.667h36v8.667H0z"/><circle fill="navy" cx="18" cy="18" r="4"/><circle fill="#F7F7F7" cx="18" cy="18" r="3.375"/><path d="m18.1 16.75-.1.65-.1-.65.1-1.95zm-.928-1.841.408 1.909.265.602-.072-.653zm-.772.32.888 1.738.412.513-.238-.613zm-.663.508 1.308 1.45.531.389-.389-.531zm-.508.663 1.638 1.062.613.238-.513-.412zm-.32.772 1.858.601.653.072-.602-.265zM14.8 18l1.95.1.65-.1-.65-.1zm.109.828 1.909-.408.602-.265-.653.072zm.32.772 1.738-.888.513-.412-.613.238zm.508.663 1.45-1.308.389-.531-.531.389zm.663.508 1.062-1.638.238-.613-.412.513zm.772.32.601-1.858.072-.653-.265.602zM18 21.2l.1-1.95-.1-.65-.1.65zm.828-.109-.408-1.909-.265-.602.072.653zm.772-.32-.888-1.738-.412-.513.238.613zm.663-.508-1.308-1.45-.531-.389.389.531zm.508-.663-1.638-1.062-.613-.238.513.412zm.32-.772-1.858-.601-.653-.072.602.265zM21.2 18l-1.95-.1-.65.1.65.1zm-.109-.828-1.909.408-.602.265.653-.072zm-.32-.772-1.738.888-.513.412.613-.238zm-.508-.663-1.45 1.308-.389.531.531-.389zm-.663-.508-1.062 1.638-.238.613.412-.513zm-.772-.32-.601 1.858-.072.653.265-.602z" fill="#6666B3"/><g fill="navy"><circle cx="17.56" cy="14.659" r=".2"/><circle cx="16.71" cy="14.887" r=".2"/><circle cx="15.948" cy="15.326" r=".2"/><circle cx="15.326" cy="15.948" r=".2"/><circle cx="14.887" cy="16.71" r=".2"/><circle cx="14.659" cy="17.56" r=".2"/><circle cx="14.659" cy="18.44" r=".2"/><circle cx="14.887" cy="19.29" r=".2"/><circle cx="15.326" cy="20.052" r=".2"/><circle cx="15.948" cy="20.674" r=".2"/><circle cx="16.71" cy="21.113" r=".2"/><circle cx="17.56" cy="21.341" r=".2"/><circle cx="18.44" cy="21.341" r=".2"/><circle cx="19.29" cy="21.113" r=".2"/><circle cx="20.052" cy="20.674" r=".2"/><circle cx="20.674" cy="20.052" r=".2"/><circle cx="21.113" cy="19.29" r=".2"/><circle cx="21.341" cy="18.44" r=".2"/><circle cx="21.341" cy="17.56" r=".2"/><circle cx="21.113" cy="16.71" r=".2"/><circle cx="20.674" cy="15.948" r=".2"/><circle cx="20.052" cy="15.326" r=".2"/><circle cx="19.29" cy="14.887" r=".2"/><circle cx="18.44" cy="14.659" r=".2"/><circle cx="18" cy="18" r=".9"/></g></svg>
            India
          </button>
        </li>
        <li>
          <button on:click={() => setLang('ja')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 36 36"><path fill="#EEE" d="M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z"/><circle fill="#ED1B2F" cx="18" cy="18" r="7"/></svg>
            Japan
          </button>
        </li>
        <li>
          <button on:click={() => setLang('ko')}>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28" height="28" viewBox="0 0 55.7 38.9" style="enable-background:new 0 0 55.7 38.9" xml:space="preserve"><style type="text/css">.st0{fill:#FEFEFE;stroke:#CCCCCC;stroke-width:0.5;stroke-miterlimit:2.6131;} .st1{fill:#252422;} .st2{fill:none;stroke:#252422;stroke-width:1.6002;} .st3{fill:none;stroke:#FEFEFE;stroke-width:0.7999;} .st4{fill:#C62631;} .st5{fill:#303C70;}</style><g><path class="st0" d="M3.28,38.65h49.13c1.67,0,3.03-1.37,3.03-3.03V3.28c0-1.67-1.36-3.03-3.03-3.03H3.28 c-1.67,0-3.03,1.36-3.03,3.03v32.33C0.25,37.29,1.61,38.65,3.28,38.65L3.28,38.65z"/><path class="st1" d="M12.54,15.01l5.32-7.99L12.54,15.01L12.54,15.01z M10.54,13.68l5.33-7.99L10.54,13.68L10.54,13.68z M8.55,12.35l5.33-7.99L8.55,12.35L8.55,12.35z"/><path class="st2" d="M12.54,15.01l5.32-7.99 M10.54,13.68l5.33-7.99 M8.55,12.35l5.33-7.99"/><path class="st1" d="M41.83,34.54l5.33-7.99L41.83,34.54L41.83,34.54z M39.83,33.21l5.33-7.99L39.83,33.21L39.83,33.21z M37.83,31.88l5.33-7.99L37.83,31.88L37.83,31.88z"/><path class="st2" d="M41.83,34.54l5.33-7.99 M39.83,33.21l5.33-7.99 M37.83,31.88l5.33-7.99"/><line class="st3" x1="39.17" y1="26.99" x2="45.82" y2="31.43"/><path class="st4" d="M19.86,14.13c2.94-4.41,8.9-5.6,13.31-2.66c4.41,2.94,5.6,8.9,2.66,13.31c-2.94,4.41-8.9,5.6-13.31,2.66 C18.11,24.5,16.92,18.54,19.86,14.13L19.86,14.13z"/><path class="st5" d="M19.86,14.13c-1.47,2.21-0.87,5.19,1.33,6.66c2.21,1.47,5.19,0.87,6.66-1.33c1.47-2.21,4.45-2.8,6.66-1.33 c2.21,1.47,2.8,4.45,1.33,6.66c-2.94,4.41-8.9,5.6-13.31,2.66C18.11,24.5,16.92,18.54,19.86,14.13L19.86,14.13z"/><path class="st1" d="M17.86,31.88l-5.32-7.99L17.86,31.88L17.86,31.88z M15.87,33.21l-5.33-7.99L15.87,33.21L15.87,33.21z M13.87,34.54l-5.33-7.99L13.87,34.54L13.87,34.54z"/><path class="st2" d="M17.86,31.88l-5.32-7.99 M15.87,33.21l-5.33-7.99 M13.87,34.54l-5.33-7.99"/><path class="st1" d="M47.15,12.35l-5.33-7.99L47.15,12.35L47.15,12.35z M45.16,13.68l-5.33-7.99L45.16,13.68L45.16,13.68z M43.16,15.01l-5.33-7.99L43.16,15.01L43.16,15.01z"/><path class="st2" d="M47.15,12.35l-5.33-7.99 M45.16,13.68l-5.33-7.99 M43.16,15.01l-5.33-7.99"/><path class="st1" d="M43.49,9.02l2-1.33L43.49,9.02L43.49,9.02z M39.17,11.91l2.33-1.55L39.17,11.91L39.17,11.91z M12.21,29.88 l2-1.33L12.21,29.88L12.21,29.88z"/><path class="st3" d="M43.49,9.02l2-1.33 M39.17,11.91l2.33-1.55 M12.21,29.88l2-1.33"/></g></svg>
            Korea
          </button>
        </li>
        <li>
          <button on:click={() => setLang('vi')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 36 36"><path fill="#DA251D" d="M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z"/><path fill="#FF0" d="M19.753 16.037L18 10.642l-1.753 5.395h-5.672l4.589 3.333-1.753 5.395L18 21.431l4.589 3.334-1.753-5.395 4.589-3.333z"/></svg>
            Vietnam
          </button>
        </li>
      </ul>
      {/each}

    </details>
  </div>
</div>

<style>
  .lang-button {
    background-color: none;
    border-color: transparent;
  }
</style>
