<script lang="ts">
  import All from "./lib/Components/All.svelte";
  import Active from "./lib/Components/Active.svelte";
  import Completed from "./lib/Components/Completed.svelte";
  let btn_arr: string[] = ["All", "Active", "Completed"];
  let selected: string = "All";
</script>

<main>
  <h1>#todo</h1>
  <div>
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
  .active {
    background-color: aqua;
  }
</style>
