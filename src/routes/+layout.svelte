<script>
  import { page } from "$app/stores";
  import { caughtMonsters } from "$lib/stores.js";
  import Icon from "@iconify/svelte";
</script>

<div class="navbar">
  <a href="/" class:active={$page.url.pathname == "/"}>
    <Icon
      icon="simple-icons:pokemon"
      style="color: white; font-size: 50px;"
    /></a
  >
  <a href="/my-monsters" class:active={$page.url.pathname == "/my-monsters"}
    >My Monsters ({$caughtMonsters.length})</a
  >
</div>

<div class="container"><slot /></div>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: #fff;
    padding: 10px 40px;
  }
  .navbar a {
    color: #fff;
    text-decoration: none;
    padding: 4px;
  }

  .navbar a:hover {
    color: #ccc;
  }
  .navbar a.active {
    border: solid 1px #ccc;
    border-radius: 4px;
  }
  :global(body) {
    margin: 0;
  }
  .container {
    max-width: 90%;
    margin: 0 auto;
    width: 1200px;
  }
</style>
