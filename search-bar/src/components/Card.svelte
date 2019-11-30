<script>
  export let titleText;
</script>

<main class="card">
  <div class="card-content">
    <span class="card-title">{titleText}</span>
    <slot />
  </div>
</main>
