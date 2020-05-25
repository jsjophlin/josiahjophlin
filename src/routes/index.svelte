<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`index.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { page: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let page;
  const { html, jobTitle, portrait, title } = page;

  function handleClick(e) {
    const target = document.getElementById("skip-to-content");
    const elDistanceToTop =
      window.pageYOffset + target.getBoundingClientRect().top;

    window.scrollTo({
      behavior: "smooth",
      top: elDistanceToTop
    });
  }
</script>

<style>
  .intro {
    transform: translateY(-50%);
  }
</style>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<section class="text-center h-screen flex flex-col justify-center items-center">
  <div class="intro">
    <h1>{title}</h1>
    <h3 class="mb-6">{jobTitle}</h3>
    <img
      class="w-48 mx-auto mb-8 rounded-full"
      src={portrait.src}
      alt={portrait.alt} />
    <div>
      <button on:click={handleClick}>Down arrow</button>
    </div>
  </div>
</section>

<section id="skip-to-content" class="container-sm mx-auto">
  {@html html}
</section>
