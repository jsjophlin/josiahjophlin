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
  import Grid from "../components/Grid.svelte";
  import Skill from "../components/Skill.svelte";
  import Seo from "../components/Seo.svelte";

  export let page;

  const { html, jobTitle, portrait, seo } = page;
  const title = seo.title || page.title;
  const ogImage = seo.ogImage || portrait.src;
  const seoProps = {
    title,
    url: "https://www.josiahjophlin.dev",
    srcName: ogImage
  };

  if (seo.description) {
    seoProps.description = seo.description;
  }

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
  <Seo {...seoProps} />
</svelte:head>

<section class="text-center h-screen flex flex-col justify-center items-center">
  <div class="intro">
    <h1>{title}</h1>
    <h3 class="mb-6">{jobTitle}</h3>
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
  </div>
</section>

<section id="skip-to-content" class="mb-12">
  <div class="container-sm mx-auto">
    {@html html}
  </div>
</section>

<section class="mb-12">
  <div class="container-sm mx-auto">
    <h2>Here are some things I know...</h2>
    <Grid cols="3">
      <Skill
        titleItems={['HTML', 'CSS', 'Javascript']}
        body="Fundamental web development"
        icon={{ el: faHtml5, class: 'text-red-600' }} />
      <Skill
        titleItems={['ReactJS', 'Svelte', 'Drupal', 'Wordpress']}
        body="Frontend web development"
        icon={{ el: faCode, class: 'text-green-500' }} />
      <Skill
        titleItems={['AWS', 'Google Cloud']}
        body="Cloud computing services"
        icon={{ el: faCloud, class: 'text-gray-600' }} />
      <Skill
        titleItems={['Git']}
        body="Version control (VCS)"
        icon={{ el: faGitAlt, class: 'text-red-600' }} />
      <Skill
        titleItems={['MongoDB', 'MySQL']}
        body="Database management systems"
        icon={{ el: faDatabase, class: 'text-indigo-800' }} />
      <Skill
        titleItems={['Adobe CC']}
        body="'UI design"
        icon={{ el: faAdobe, class: 'text-red-600' }} />
    </Grid>
  </div>
</section>
