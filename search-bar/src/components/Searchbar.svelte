<script>
  import { createEventDispatcher } from "svelte";

  export let term = null;

  function handleSubmit() {
    // do nothing and let 2-way binding do its thing
  }

  function handleClear() {
    term = null;
  }
</script>

<style>
  .layout {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
  }
  .flex-1 {
    flex-grow: 1;
  }
</style>

<main>
  <form class="layout" on:submit|preventDefault={handleSubmit}>
    <div class="input-field flex-1">
      <i class="material-icons prefix">search</i>
      <input
        autocomplete="off"
        bind:value={term}
        id="search"
        type="text"
        placeholder="Search" />
    </div>

    <div class="input-field">
      <button
        class="btn waves-effect waves-light"
        on:click|preventDefault={handleClear}>
        Clear
      </button>
    </div>

  </form>
</main>
