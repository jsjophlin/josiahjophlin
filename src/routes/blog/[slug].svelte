<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<style>
  .content :global(h1) {
    @apply mb-8;
  }

  .content :global(ul) {
    @apply pl-8 mb-6;
  }
  .content :global(li) {
    @apply list-disc;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<section class="content">
  <div class="container-sm mx-auto">
    {@html post.html}
  </div>
</section>
