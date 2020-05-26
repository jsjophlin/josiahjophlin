<script>
  import Fa from "svelte-fa";
  import IntersectionObserver from "./IntersectionObserver.svelte";

  let visible = true;

  export let titleItems, body, icon;
</script>

<style>
  .skill {
    transition: opacity var(--timing-sm) linear;
  }
  .active {
    @apply opacity-100;
  }

  .list-item > span:not(:last-child)::after {
    @apply inline-block px-1;
    content: "•";
  }
</style>

<IntersectionObserver let:intersecting top={-100}>
  <div
    class:active={intersecting}
    class="skill flex bg-gray-100 border border-gray-300 rounded p-2 opacity-0">
    {#if icon}
      <figure class="flex-shrink-0 mr-3">
        <Fa icon={icon.el} size="lg" class={icon.class} />
      </figure>
    {/if}
    <div>
      <h6 class="list-item">
        {#each titleItems as title}
          <span>{title}</span>
        {/each}
      </h6>
      <p class="mb-0">{body}</p>
    </div>
  </div>
</IntersectionObserver>
