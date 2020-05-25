<script>
  import Tailwindcss from "../components/Tailwindcss.svelte";
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    & li {
      display: none;
    }
  }
</style>

<Tailwindcss />

<Nav {segment} />

<main>
  <p>Some test copy</p>
  <ul>
    <li>A list item</li>
  </ul>
  <slot />
</main>
