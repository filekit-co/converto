import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


<div class="navbar bg-base-300 drop-shadow-lg"><div class="navbar-start"><div class="dropdown"><label tabindex="0" class="btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></label>

      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"><li><a href="/">Home</a></li>
        <li><a>Parent</a>
          <ul class="p-2"><li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li></ul></li>
        <li><a href="/remove">Remove</a></li></ul></div>
    <img src="/images/paper_folder.png" class="mr-3 h-10 hidden md:block" alt="Converto Logo">
    <a class="btn btn-ghost normal-case text-xl">Converto</a></div>
  <div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal px-1"><li><a href="/">Home</a></li>
      <li tabindex="0"><details><summary>Convert</summary>
          <ul class="p-2"><li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li></ul></details></li>
      <li><a href="/remove">Remove</a></li></ul></div>
  <div class="navbar-end"></div></div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="footer p-10 bg-base-200 text-base-content"><div><svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
    <p>ACME Industries Ltd.<br>Providing reliable tech since 1992</p></div>
  <div><span class="footer-title">Services</span>
    <a class="link link-hover">Branding</a>
    <a class="link link-hover">Design</a>
    <a class="link link-hover">Marketing</a>
    <a class="link link-hover">Advertisement</a></div>
  <div><span class="footer-title">Company</span>
    <a class="link link-hover">About us</a>
    <a class="link link-hover">Contact</a>
    <a class="link link-hover">Jobs</a>
    <a class="link link-hover">Press kit</a></div>
  <div><span class="footer-title">Legal</span>
    <a class="link link-hover">Terms of use</a>
    <a class="link link-hover">Privacy policy</a>
    <a class="link link-hover">Cookie policy</a></div></footer>`;
});
const app = "";
const isDragDropping = writable(false);
const DragDropBackground = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDragDropping, $$unsubscribe_isDragDropping;
  $$unsubscribe_isDragDropping = subscribe(isDragDropping, (value) => $isDragDropping = value);
  $$unsubscribe_isDragDropping();
  return `



${$isDragDropping ? `<div class="position: fixed z-100 w-full h-full bg-center bg-no-repeat bg-[url('/images/drag_background.png')] opacity-50 bg-error"></div>` : ``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
${validate_component(DragDropBackground, "DragDropBackground").$$render($$result, {}, {}, {})}
${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
