<script>
  import { fade } from "svelte/transition";

  export let titleText;
</script>

<main class="card">
  <div class="card-content" transition:fade>
    <span class="card-title">{titleText}</span>
    <slot />
  </div>
</main>
