<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  li {
    @apply mb-3;
  }
  h1 {
    @apply text-5xl;
  }
  h2 {
    @apply text-4xl;
  }
  h3 {
    @apply text-2xl;
  }
  h4 {
    @apply text-xl;
  }
  h5 {
    @apply text-lg;
  }
  h6 {
    @apply text-base;
  }

  a {
    color: var(--color-text-link);
    transition: color var(--timing-xs) linear;
  }
  a:hover {
    --color-text-link: #51d88a;
  }
</style>
