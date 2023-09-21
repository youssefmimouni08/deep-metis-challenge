<script>
  import Icon from "@iconify/svelte";
  import { caughtMonsters } from "$lib/stores.js";
  export let monster;

  const catchMonster = () => {
    caughtMonsters.update((monsters) => {
      isCatachable = false;
      return [...monsters, monster];
    });
  };
  const releaseMonster = () => {
    caughtMonsters.update((monsters) => {
      isCatachable = true;
      return monsters.filter((m) => m.id !== monster.id);
    });
  };
  export let isCatachable = true;
</script>

<div class="monster">
  <!-- svelte-ignore a11y-click-events-have-key-events -->

  <a href={`/pokemon/${monster.id}`}>
    <div class="monster-content">
      <img src={monster.image} alt={monster.name} />
      {monster.name}
    </div>
    <div class="monster-id">
      #{monster.id}
    </div>
  </a>
  <div class="card-actions">
    <!-- svelte-ignore a11y-no-static-element-interactions -->

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    {#if isCatachable}
      <div class="catch-poke" on:click={catchMonster}>
        <Icon icon="ic:sharp-catching-pokemon" />
      </div>
    {:else}
      <div class="release-poke" on:click={releaseMonster}>
        <Icon icon="ic:sharp-check-circle" />
      </div>
    {/if}
  </div>
</div>

<style>
  .monster {
    width: 100px;
    margin: 10px;
    padding: 10px;
    background-color: #f5f5f5;
    border: solid 1px gray;
    border-radius: 5%;
    /* create cool box shadow*/
    box-shadow: 0 0 10px 0 rgba(113, 50, 50, 0.2);
    position: relative;
  }
  .monster:hover {
    box-shadow: 0 0 10px 0 rgba(113, 50, 50, 0.5);
    cursor: pointer;
    transform: scale(1.1);
    transition: ease-in-out 0.2s;
  }
  .monster-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .monster-id {
    font-size: 0.8em;
    color: gray;
    position: absolute;
    top: 8px;
    left: 8px;
  }

  .monster a {
    text-decoration: none;
    color: black;
  }
  .card-actions {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
  .catch-poke,
  .release-poke {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px gray;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
  .catch-poke:hover {
    background-color: red; /* Change to red when catching */
    cursor: pointer;
  }
  .release-poke:hover {
    background-color: blue; /* Change to blue when releasing */
    cursor: pointer;
  }
</style>
