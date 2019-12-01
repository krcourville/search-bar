<script>
  import { onMount } from "svelte";
  import debounce from "lodash.debounce";

  import Card from "./components/Card.svelte";
  import LightRope from "./components/LightRope.svelte";
  import Searchbar from "./components/Searchbar.svelte";
  import Searchresults from "./components/Searchresults.svelte";
  import Searchheader from "./components/Searchheader.svelte";

  export let menuItemsRepo;

  let searchTerm = null;

  let searchResults = [];

  const doSearch = debounce((term = null) => {
    searchResults = menuItemsRepo.search(term);
  }, 400);

  $: doSearch(searchTerm);

  onMount(() => {
    doSearch();
  });
</script>

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

<main class="section">
  <LightRope />

  <div class="container">

    <Searchheader />

    <Searchbar bind:term={searchTerm} />

    <Searchresults bind:items={searchResults} />

  </div>
</main>
