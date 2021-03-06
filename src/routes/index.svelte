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
  import Fa from "svelte-fa";
  import zenscroll from "zenscroll";
  import {
    faAngleDoubleDown,
    faCloud,
    faCode,
    faDatabase
  } from "@fortawesome/free-solid-svg-icons";
  import {
    faAdobe,
    faHtml5,
    faGitAlt
  } from "@fortawesome/free-brands-svg-icons";
  import IntersectionObserver from "../components/IntersectionObserver.svelte";
  import ShellTypewriter from "../components/ShellTypewriter.svelte";
  import Grid from "../components/Grid.svelte";
  import Skill from "../components/Skill.svelte";

  export let page;

  const { html, jobTitle, portrait, seo } = page;
  const title = seo.title || page.title;
  const ogImage = seo.ogImage || portrait.src;
  const urlBase = "https://res.cloudinary.com/dqeuiyobt/image/upload";
  const urlId = "v1590432733/josiahjophlin.dev";

  function handleClick(e) {
    const target = document.getElementById("skip-to-content");
    zenscroll.to(target);
  }
</script>

<style>
  .full-page {
    height: calc(100vh - 89px);
  }

  .intro button :global(.icon) {
    transition: transform var(--timing-xs) ease-in-out,
      color var(--timing-xs) linear;
  }
  .intro button:hover :global(.icon) {
    transform: translateY(7px) scale3d(1.25, 1.25, 1.25);
  }
  .intro button:hover :global(.icon),
  .intro button:focus :global(.icon) {
    @apply text-blue-600;
  }
</style>

<svelte:head>
  <title>{title}</title>
  {#if seo.description}
    <meta name="description" content={seo.description} />
  {/if}

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.josiahjophlin.dev" />
  <meta property="og:title" content={title} />
  {#if seo.description}
    <meta property="og:description" content={seo.description} />
  {/if}
  {#if ogImage}
    <meta
      property="og:image"
      content={`${urlBase}/c_lfill,g_face,h_315,q_100,w_600,x_0/${urlId}/${ogImage}`} />
  {/if}

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://www.josiahjophlin.dev" />
  <meta property="twitter:title" content={title} />
  {#if seo.description}
    <meta property="twitter:description" content={seo.description} />
  {/if}
  {#if ogImage}
    <meta
      property="twitter:image"
      content={`${urlBase}/c_fit,h_120,q_80,w_120/${urlId}/${ogImage}`} />
  {/if}
</svelte:head>

<section
  class="full-page text-center flex flex-col justify-center items-center">
  <div class="intro">
    <h1 class="mb-8">{title}</h1>
    <button
      on:click={handleClick}
      class="btn--skip-to-content flex flex-col justify-center items-center
      focus:outline-none mx-auto">
      <img
        class="w-48 mx-auto mb-4 rounded-full"
        src={`https://res.cloudinary.com/dqeuiyobt/image/upload/c_scale,w_200/v1590432733/josiahjophlin.dev/${portrait.src}`}
        alt={portrait.alt} />
      <Fa icon={faAngleDoubleDown} size="lg" class="icon" />
    </button>
    <div class="mt-20">
      <ShellTypewriter body={jobTitle} />
    </div>
  </div>
</section>

<section id="skip-to-content" class="smooth-container mb-12">
  <IntersectionObserver let:intersecting top={-100} once>
    <div
      class:active={intersecting}
      class="container-sm mx-auto fade-in opacity-0">
      {@html html}
    </div>
  </IntersectionObserver>
</section>

<section class="mb-12">
  <div class="container-sm mx-auto">
    <IntersectionObserver let:intersecting top={-100} once>
      <h2 class:active={intersecting} class="fade-in opacity-0 mb-6">
        Here are some things I know...
      </h2>
    </IntersectionObserver>
    <Grid cols="3">
      <Skill
        titleItems={['HTML', 'CSS', 'Javascript']}
        body="Fundamental web development"
        icon={{ el: faHtml5, class: 'text-red-600' }}
        classname="h-full" />
      <Skill
        titleItems={['ReactJS', 'Svelte', 'Drupal', 'Wordpress']}
        body="Frontend web development"
        icon={{ el: faCode, class: 'text-green-500' }}
        classname="h-full" />
      <Skill
        titleItems={['AWS', 'Google Cloud']}
        body="Cloud computing services"
        icon={{ el: faCloud, class: 'text-gray-600' }}
        classname="h-full" />
      <Skill
        titleItems={['Git']}
        body="Version control (VCS)"
        icon={{ el: faGitAlt, class: 'text-red-600' }}
        classname="h-full" />
      <Skill
        titleItems={['MongoDB', 'MySQL']}
        body="Database management systems"
        icon={{ el: faDatabase, class: 'text-indigo-800' }}
        classname="h-full" />
      <Skill
        titleItems={['Adobe CC']}
        body="'UI design"
        icon={{ el: faAdobe, class: 'text-red-600' }}
        classname="h-full" />
    </Grid>
  </div>
</section>
