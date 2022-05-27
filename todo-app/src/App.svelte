<script lang="ts">
  import "./App.css"
  import All from "./lib/Components/All.svelte";
  import Active from "./lib/Components/Active.svelte";
  import Completed from "./lib/Components/Completed.svelte";
  let btn_arr: string[] = ["All", "Active", "Completed"];
  let selected: string = "All";
</script>

<main>
  <h1 class="logo">#todo</h1>
  <div class="btn-group">
    {#each btn_arr as item}
      <button
        on:click={() => (selected = item)}
        class:active={item === selected}>{item}</button
      >
    {/each}
  </div>
  <div class="content">
    {#if selected === btn_arr[0]}
      <All />
    {:else if selected === btn_arr[1]}
      <Active />
    {:else}
      <Completed />
    {/if}
  </div>
</main>

<style>
  main {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
  }
  .logo {
    font-family: "Raleway";
    font-weight: 700;
    font-size: 36px;
    text-align: center;
    margin-top: 2rem;
  }
  .active {
    border-bottom: 3px solid #2F80ED;
  }
  .btn-group {
    margin-top: 2rem;
    display: flex;
    border-bottom: 1px solid #bdbdbd;
    text-align: center;
  }
  button {
    font-family: "Montserrat";
    border: 0;
    padding: 0.75rem 0;
    border-bottom: 2px solid transparent;
    background-color: transparent;
    font-weight: 600;
    font-size: 14px;
    width: 100%;
    cursor: pointer;
  }
  button:hover {
    background-color: #bdbdbd;
  }
</style>
