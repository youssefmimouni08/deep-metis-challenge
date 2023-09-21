<script>
  export let data;
  const { pokemon } = data;
</script>

<div class="container">
  <div class="title">
    <h1>{pokemon.name}</h1>

    <h1>#{pokemon.id}</h1>
  </div>

  <div class="pokemon-detail">
    <div class="img-container">
      <img class="monster-image" src={pokemon.image} alt={pokemon.name} />
    </div>
    <div class="poke-info">
      <p>Types : {pokemon.types}</p>
      <p>Abilities : {pokemon.abilities}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight : {pokemon.weight}</p>
    </div>
  </div>

  <div>
    <h2 style="display: flex; justify-content: center;">Stats</h2>
    <div class="poke-stats">
      {#each pokemon.stats as { name, value }}
        <div class="stat-bar">
          <p>{name}</p>
          <div class="bar">
            <div class="fill" style="width: {value}%" />
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .title h1 {
    margin: 20px;
  }
  .img-container {
    display: block;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pokemon-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 50%;
    margin: 0 auto;
    width: 1200px;
  }
  .poke-info {
    border: solid 1px gray;
    padding: 10px;
    border-radius: 5px;
    background-color: skyblue;
  }
  .poke-stats {
    max-width: 50%;
    margin: 0 auto;
    width: 1200px;
  }

  .stat-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .stat-bar p {
    margin-right: 10px;
  }

  .bar {
    flex-grow: 1;
    height: 20px;
    background-color: #f0f0f0;
    border-radius: 5px;
  }

  .fill {
    height: 100%;
    border-radius: 5px;
    background-color: #007bff; /* Change the bar color here */
  }
</style>
