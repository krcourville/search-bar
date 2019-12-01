<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let term = null;

  function onTermChanged() {
    dispatch("change", { term });
  }

  function handleSubmit() {
    onTermChanged();
  }

  function handleClear() {
    term = null;
    onTermChanged();
  }
</script>

<main>
  <form class="col s5" on:submit|preventDefault={handleSubmit}>
    <div class="row">
      <div class="input-field col-s12">
        <i class="material-icons prefix">search</i>
        <input
          autocomplete="off"
          bind:value={term}
          id="search"
          type="text"
          placeholder="Search" />

      </div>
    </div>
    <div class="row center">
      <button type="submit" class="btn waves-effect waves-light">Search</button>
      <button
        class="btn waves-effect waves-light"
        on:click|preventDefault={handleClear}>
        Clear
      </button>
    </div>
  </form>
</main>
