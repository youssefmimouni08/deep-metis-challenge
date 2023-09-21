import { writable } from "svelte/store";
import { browser } from "$app/environment";
export const caughtMonsters = writable(
  (browser && JSON.parse(localStorage.getItem("caughtMonsters"))) || []
);

caughtMonsters.subscribe((value) => {
  if (browser) {
    localStorage.setItem("caughtMonsters", JSON.stringify(value));
  }
});
