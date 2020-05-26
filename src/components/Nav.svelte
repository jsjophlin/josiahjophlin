<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    @apply m-0 p-0;
  }

  /* clearfix */
  ul::after {
    @apply block clear-both;
    content: "";
  }

  li {
    @apply block float-left my-0;
  }

  [aria-current] {
    @apply relative inline-block;
  }

  [aria-current]::after {
    @apply absolute block;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    bottom: -1px;
  }

  a {
    @apply no-underline block;
    padding: 1em 0.5em;
  }
</style>

<nav class="mb-8">
  <ul>
    <li>
      <a
        aria-current={segment === undefined ? 'page' : undefined}
        class="no-link-style"
        href=".">
        home
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        class="no-link-style"
        href="blog">
        blog
      </a>
    </li>
  </ul>
</nav>
