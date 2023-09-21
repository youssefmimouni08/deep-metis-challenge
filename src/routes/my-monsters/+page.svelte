<script>
  import { caughtMonsters } from "$lib/stores.js";
  import Monster from "../Monster.svelte";
</script>

<h1 style="display:flex;justify-content: center;">My Monsters</h1>
<div class="monsters">
  {#if $caughtMonsters.length === 0}
    <h1>Go catch some Pokemons !</h1>
  {:else}
    {#each $caughtMonsters as monster}
      <Monster {monster} isCatachable={false} />
    {/each}
  {/if}
</div>

<style>
  .monsters {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
  }
</style>
