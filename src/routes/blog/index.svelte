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
  import Seo from "../../components/Seo.svelte";
  export let posts;
</script>

<svelte:head>
  <Seo
    title="Blog"
    description="Josiah Jophlin's blog listing"
    srcName="portrait-josiah-jophlin.jpg"
    url="https://www.josiahjophlin.dev/blog" />
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
