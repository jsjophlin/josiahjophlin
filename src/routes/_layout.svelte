<script>
  import Tailwindcss from "../components/Tailwindcss.svelte";
  import Nav from "../components/Nav.svelte";
  import IntersectionObserver from "../components/IntersectionObserver.svelte";

  export let segment;
</script>

<style>
  /* Global styling to force footer to be sticky on pages */
  :global(html),
  :global(body),
  :global(body > #sapper) {
    @apply h-full;
  }
  :global(body > #sapper) {
    @apply flex flex-col;
  }

  /* Global styling for smooth-scrolling */
  /* ENABLE FOR NATIVE SUPPORT IF AVAILABLE, BUT LOSE FINER CONTROL OVER LIBRARY */
  :global(body),
  :global(.smooth-container) {
    scroll-behavior: smooth;
  }

  /* Global styling for fade-ins */
  :global(.fade-in) {
    transition: opacity var(--timing-sm) linear;
  }
  :global(.fade-in.active) {
    @apply opacity-100;
  }
</style>

<Tailwindcss />

<Nav {segment} />

<main class="mb-20 flex-grow">
  <slot />
</main>

<IntersectionObserver let:intersecting top={-100} once>
  <footer class="mb-20 flex-shrink-0">
    <div
      class:active={intersecting}
      class="container-sm mx-auto text-center fade-in opacity-0">
      <h2>Come say hello!</h2>
      <p>
        Get in touch with me by e-mailing me at:
        <a href="mailto:jsjophlin@gmail.com">jsjophlin@gmail.com</a>
      </p>
    </div>
  </footer>
</IntersectionObserver>
