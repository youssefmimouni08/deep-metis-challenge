<script>
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import Monster from "./Monster.svelte";
  import { generations } from "./generations.js";
  export let data;

  $: monsterId = $page.url.searchParams.get("monsterId");
  $: monster = data.monsters.find((m) => m.id === monsterId);

  const monsterClick = (monster) => {
    monsterId = monster.id;

    goto(`?monsterId=${monsterId}`);
  };

  const updateSearchParams = (key, value) => {
    const searchParams = new URLSearchParams($page.url.search);
    searchParams.set(key, value);
    goto(`?${searchParams.toString()}`);
  };

  let form = {
    searchString: "",
  };
  let searchString = "";
  $: selectedMonsters = data.monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchString.toLowerCase());
  });

  const submitSearch = () => {
    searchString = form.searchString;
  };

  $: selectedGenerationId = $page.url.searchParams.get("generationId");
</script>

<div class="generations">
  <button
    class="gen"
    class:active={selectedGenerationId === "all"}
    on:click={() => updateSearchParams("generationId", "all")}
  >
    All
  </button>
  {#each generations as gen}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <button
      class="gen"
      class:active={selectedGenerationId === gen.id.toString()}
      on:click={() => updateSearchParams("generationId", gen.id)}
    >
      {gen.main_region}
    </button>
  {/each}
</div>
<form class="search-form" on:submit|preventDefault={() => submitSearch()}>
  <input
    class="searchField"
    type="text"
    bind:value={form.searchString}
    placeholder="Pokemon name"
  />
  <input type="submit" value="Search" />
</form>

<div class="monsters">
  {#each selectedMonsters as monster (monster.id)}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <Monster {monster} isCatachable="true" />
  {/each}
</div>

<style>
  .monsters {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
  }

  .generations {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .gen {
    display: flex;
    border: solid 1px gray;
    border-radius: 10px;
    width: 70px;
    height: 30px;
    margin: 10px;
    align-items: center;
    justify-content: center;
  }
  .gen:hover {
    background-color: #d1d1d1;
    cursor: pointer;
  }
  .gen.active {
    background-color: #333;
    color: #fff;
  }
  .gen.active:hover {
    background-color: #444;
  }

  .search-form {
    display: flex;
    justify-content: center;
    margin: 20px 0px;
  }
  .search-form input[type="text"] {
    border: solid 1px gray;
    border-radius: 5px;
    width: 200px;
  }
  .search-form input[type="submit"] {
    border: solid 1px gray;
    border-radius: 5px;
    margin-left: 10px;
    background-color: #333;
    color: #fff;
  }
</style>
