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
  {#if post.seo.description}
    <meta name="description" content={post.seo.description} />
  {/if}

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content={`https://www.josiahjophlin.dev/blog/${post.slug}`} />
  <meta property="og:title" content={post.title} />
  {#if post.seo.description}
    <meta property="og:description" content={post.seo.description} />
  {/if}
  {#if post.seo.ogImage}
    <meta property="og:image" content={post.seo.ogImage} />
  {/if}

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta
    property="twitter:url"
    content={`https://www.josiahjophlin.dev/blog/${post.slug}`} />
  <meta property="twitter:title" content={post.title} />
  {#if post.seo.description}
    <meta property="twitter:description" content={post.seo.description} />
  {/if}
  {#if post.seo.ogImage}
    <meta property="twitter:image" content={post.seo.ogImage} />
  {/if}
</svelte:head>

<section class="content">
  <div class="container-sm mx-auto">
    {@html post.html}
  </div>
</section>
