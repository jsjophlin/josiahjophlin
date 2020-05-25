<script>
  import Tailwindcss from "../components/Tailwindcss.svelte";
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>

</style>

<Tailwindcss />

<Nav {segment} />

<main class="mb-20 mt-12">
  <slot />
</main>

<footer class="mb-20">
  <div class="container-sm mx-auto text-center">
    <h2>Come say hello!</h2>
    <p>
      Get in touch with me by e-mailing me at:
      <a href="mailto:jsjophlin@gmail.com">jsjophlin@gmail.com</a>
    </p>
  </div>
</footer>
