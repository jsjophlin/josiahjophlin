<script>
  import Fa from "svelte-fa";
  import cn from "classnames";
  import IntersectionObserver from "./IntersectionObserver.svelte";

  let visible = true;

  export let titleItems, body, classname, icon;
</script>

<style>
  .list-item > span:not(:last-child)::after {
    @apply inline-block px-1;
    content: "•";
  }
</style>

<IntersectionObserver let:intersecting top={-100} once>
  <div
    class:active={intersecting}
    class={cn('flex bg-gray-100 border border-gray-300 rounded p-2 fade-in opacity-0', classname)}>
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
