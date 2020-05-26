<script>
  import IntersectionObserver from "./IntersectionObserver.svelte";
  import cn from "classnames";

  export let body, classname;

  function typewriter(node, { speed = 50 }) {
    const valid =
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
      throw new Error(
        `This transition only works on elements with a single text node child`
      );
    }

    const text = node.textContent;
    const duration = text.length * speed;

    return {
      duration,
      tick: t => {
        const i = ~~(text.length * t);
        node.textContent = text.slice(0, i);
      }
    };
  }
</script>

<style>
  .shell-top {
    & > span {
      @apply block w-3 h-3 rounded-full mr-1;
    }
    & > span:first-child {
      @apply bg-red-600;
    }
    & > span:nth-child(2) {
      @apply bg-yellow-500;
    }
    & > span:last-child {
      @apply bg-green-400;
    }
  }
  .shell-typewriter {
    min-height: 6rem;
  }
</style>

<span
  class="shell-top w-full flex justify-start items-center bg-black border
  rounded-t border-gray-700 h-6 p-1">
  <span />
  <span />
  <span />
</span>
<code
  class={cn('shell-typewriter flex justify-end items-end p-2 text-green-500 bg-black border border-gray-700 rounded-b', classname)}>
  <IntersectionObserver let:intersecting top={-100}>
    {#if intersecting}
      <pre in:typewriter>{`> ${body}`}</pre>
    {/if}
  </IntersectionObserver>
</code>
