<script>
  import { onMount } from "svelte";
  import Game from "./lib/Game";
  let canvas;
  onMount(async () => {
    let game = new Game(canvas);
    game.setup();
    game.run();
  });
</script>

<main>
  <canvas bind:this={canvas} id="app" />
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
  }
  canvas {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
