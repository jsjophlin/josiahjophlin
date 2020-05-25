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
  const title = "Blog";
  const description = "Josiah Jophlin's blog listing";
  const url = "https://www.josiahjophlin.dev/blog";
  const urlBase = "https://res.cloudinary.com/dqeuiyobt/image/upload";
  const urlId = "v1590432733/josiahjophlin.dev";

  export let posts;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={url} />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
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
