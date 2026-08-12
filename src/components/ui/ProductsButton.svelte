<script lang="ts">
  import Button from 'san-webkit-next/ui/core/Button'
  import ProductsButton from 'san-webkit-next/ui/app/Products'
</script>

<ProductsButton class="md:hidden" align="start" isCompact>
  {#snippet children({ props })}
    <Button
      {...props}
      aria-label="Products menu"
      size="auto"
      icon="products-toggle"
      class="fill-waterloo hover:bg-transparent hover:fill-green-hover p-2 mr-[42px] md:hidden"
    ></Button>
  {/snippet}
</ProductsButton>
