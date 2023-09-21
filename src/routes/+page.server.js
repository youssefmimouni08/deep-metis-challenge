export async function load({ fetch, url }) {
  const generationId = url.searchParams.get("generationId") || 1;
  let monsterList = [];
  let monsters = [];
  if (generationId == "all") {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=2000`);

    const json = await res.json();
    monsterList = json.results;
  } else {
    const generationResponse = await fetch(
      "https://pokeapi.co/api/v2/generation/" + generationId
    );
    const generation = await generationResponse.json();
    monsterList = generation.pokemon_species;
  }
  monsters = monsterList.map((monster) => {
    const id = monster.url.split("/")[6];
    return {
      name: monster.name,
      url: monster.url,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      id,
    };
  });

  return { monsters };
}
