<script>
  export let items = [];
  import Card from "./Card.svelte";
</script>

<style>
  .inline-list .inline-list-item:after {
    content: ", ";
  }
  .inline-list .inline-list-item:last-child:after {
    content: "";
  }
</style>

<main>
  <h6>Items Found: {items.length}</h6>

  {#each items as item}
    <Card titleText={item.title}>
      <p class="inline-list">
        Ingredients:
        {#each item.ingredients as ingredient}
          <span class="inline-list-item">{ingredient}</span>
        {/each}
      </p>
      {#if item.tags}
        <p>
          Tags:
          {#each item.tags as tag}
            <span class="inline-list-item">{tag}</span>
          {/each}
        </p>
      {/if}
      <p>Category: {item.category}</p>
    </Card>
  {/each}
</main>
