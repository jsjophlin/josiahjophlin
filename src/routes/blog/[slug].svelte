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
  const urlBase = "https://res.cloudinary.com/dqeuiyobt/image/upload";
  const urlId = "v1590432733/josiahjophlin.dev";

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
  <title>{post.seo.title || post.title}</title>
  {#if post.seo.description}
    <meta name="description" content={post.seo.description} />
  {/if}

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content={`https://www.josiahjophlin.dev${post.slug}`} />
  <meta property="og:title" content={post.seo.title || post.title} />
  {#if post.seo.description}
    <meta property="og:description" content={post.seo.description} />
  {/if}
  {#if post.seo.ogImage}
    <meta
      property="og:image"
      content={`${urlBase}/c_lfill,g_face,h_315,q_100,w_600,x_0/${urlId}/${post.seo.ogImage}`} />
  {/if}

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta
    property="twitter:url"
    content={`https://www.josiahjophlin.dev${post.slug}`} />
  <meta property="twitter:title" content={post.seo.title || post.title} />
  {#if post.seo.description}
    <meta property="twitter:description" content={post.seo.description} />
  {/if}
  {#if post.seo.ogImage}
    <meta
      property="twitter:image"
      content={`${urlBase}/c_fit,h_120,q_80,w_120/${urlId}/${post.seo.ogImage}`} />
  {/if}
</svelte:head>

<section class="content">
  <div class="container-sm mx-auto">
    {@html post.html}
  </div>
</section>
