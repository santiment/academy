<script lang="ts">
  import Button from 'san-webkit-next/ui/core/Button'
  import ProductsButton from 'san-webkit-next/ui/app/Products'
</script>

<ProductsButton>
  {#snippet children({ ref })}
    <Button
      {ref}
      size="auto"
      icon="products-toggle"
      iconSize={16}
      class="fill-waterloo hover:bg-transparent hover:fill-green-hover p-2 mr-[42px]"
    ></Button>
  {/snippet}
</ProductsButton>
