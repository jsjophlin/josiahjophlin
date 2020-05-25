<script>
  import cn from "classnames";
  export let cols;
</script>

<style>

</style>

<div class={cn(`grid gap-4`, cols ? `grid-cols-${cols}` : '')}>
  <slot />
</div>
