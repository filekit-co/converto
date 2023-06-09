<script>
  import {
    Navbar,
    NavBrand,
    NavHamburger,
    NavUl,
    NavLi,
    Chevron,
    MegaMenu,
  } from "flowbite-svelte";
  import Lang from "./utils/Lang.svelte";

  let menu2 = [
    {
      name: "Online Stores",
      help: "Connect with third-party tools that you're already using.",
    },
    {
      name: "Segmentation",
      help: "Connect with third-party tools that you're already using.",
    },
    {
      name: "Marketing CRM",
      help: "Connect with third-party tools that you're already using.",
    },

    {
      name: "Online Stores",
      help: "Connect with third-party tools that you're already using.",
    },
    {
      name: "Segmentation",
      help: "Connect with third-party tools that you're already using.",
    },
    {
      name: "Marketing CRM",
      help: "Connect with third-party tools that you're already using.",
    },

    {
      name: "Audience Management",
      help: "Connect with third-party tools that you're already using.",
    },
    {
      name: "Creative Tools",
      help: "Connect with third-party tools that you're already using.",
    },
    {
      name: "Marketing Automation",
      help: "Connect with third-party tools that you're already using.",
    },
  ];
</script>

<Navbar class="bg-base-300 drop-shadow-lg" let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="/images/paper_folder.png"
      class="mr-3 h-6 sm:h-9"
      alt="Converto Logo"
    />
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
      >Converto</span
    >
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/">Home</NavLi>
    <NavLi class="cursor-pointer"><Chevron aligned>Convert</Chevron></NavLi>
    <MegaMenu class="z-10" full items={menu2} let:item>
      <a
        href="/"
        class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 h-full"
      >
        <div class="font-semibold dark:text-white">{item.name}</div>
        <span class="text-sm font-light text-gray-500 dark:text-gray-400"
          >{item.help}</span
        >
      </a>
    </MegaMenu>
    <NavLi href="/services">OCR</NavLi>
    <NavLi href="/services">Help</NavLi>
  </NavUl>
  <Lang />
</Navbar>
