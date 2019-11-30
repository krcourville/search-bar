<script>
  import { onMount } from "svelte";
  import Card from "./components/Card.svelte";
  import LightRope from "./components/LightRope.svelte";

  export let menuItemsRepo;

  let searchTerm = null;

  let searchResults = [];

  function doSearch() {
    searchResults = menuItemsRepo.search(searchTerm);
  }

  function handleSubmit() {
    doSearch();
  }

  function handleClear() {
    searchTerm = null;
    doSearch();
  }

  onMount(() => {
    doSearch();
  });
</script>

<style>
  #header {
    background-image: "./images/cocktail_icon.png";
  }

  .inline-list .inline-list-item:after {
    content: ", ";
  }
  .inline-list .inline-list-item:last-child:after {
    content: "";
  }
</style>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet" />
  <!-- Compiled and minified CSS -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />

  <!-- Compiled and minified JavaScript -->
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js">

  </script>
</svelte:head>

<main class="section no-pad-bot">
  <LightRope />
  <div class="container" id="header">

    <h1 class="header center">
      The Search Bar
      <img
        alt="cocktail icon"
        src="./images/cocktail_icon.png"
        height="64"
        width="64" />
    </h1>

    <form class="col s5" on:submit|preventDefault={handleSubmit}>
      <class class="row">
        <div class="input-field col-s12">
          <i class="material-icons prefix">search</i>
          <input
            autocomplete="off"
            bind:value={searchTerm}
            id="search"
            type="search"
            placeholder="Search" />
          <button type="submit" class="btn waves-effect waves-light">
            Search
          </button>
          <button
            class="btn waves-effect waves-light"
            on:click|preventDefault={handleClear}>
            Clear
          </button>
        </div>
      </class>
    </form>

    <h6>Items Found: {searchResults.length}</h6>

    {#each searchResults as item}
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

  </div>
</main>
