<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>

</style>

<svelte:head>
  <title>Blog</title>
  <meta name="description" content="Josiah Jophlin's blog listing" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.josiahjophlin.dev/blog" />
  <meta property="og:title" content="Blog" />
  <meta property="og:description" content="Josiah Jophlin's blog listing" />
  <meta property="og:image" content="/images/portrait-josiah-jophlin.jpg" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://www.josiahjophlin.dev/blog" />
  <meta property="twitter:title" content="Blog" />
  <meta
    property="twitter:description"
    content="Josiah Jophlin's blog listing" />
  <meta
    property="twitter:image"
    content="/images/portrait-josiah-jophlin.jpg" />
</svelte:head>

<section>
  <div class="container-sm mx-auto">
    <h1 class="mb-8">Recent posts</h1>

    <ul>
      {#each posts as post}
        <li>
          <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
        </li>
      {/each}
    </ul>
  </div>
</section>
