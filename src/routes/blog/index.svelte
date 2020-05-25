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
