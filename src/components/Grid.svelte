<script>
  import cn from "classnames";
  export let cols;
</script>

<style>

</style>

<div
  class={cn(`grid gap-4`, cols ? `grid-cols-1 sm:grid-cols-2 lg:grid-cols-${cols}` : '')}>
  <slot />
</div>
