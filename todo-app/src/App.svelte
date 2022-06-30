<script lang="ts">
  let tab = [
    { id: 1, name: "All" },
    { id: 2, name: "Active" },
    { id: 3, name: "Complete" },
  ];
  let activeTab = 1;
  import ActiveLayout from "./lib/Layouts/activeLayout.svelte";
  import AllLayout from "./lib/Layouts/allLayout.svelte";
  import CompleteLayout from "./lib/Layouts/completeLayout.svelte";
</script>

<div class="container p-5 mx-auto">
  <h1 class="font-['Raleway'] text-[36px] font-bold text-[#333] text-center">#todo</h1>
  <div class="max-w-[608px] mx-auto ">
    <div class="border-b-2 border-b-[#BDBDBD] flex justify-between mt-8">
      {#each tab as item (item.id)}      
          <button class:active={activeTab===item.id} class="py-2 border-b-white px-12 border-b-4 font-['Montserrat'] font-normal text-sm" on:click={() => (activeTab = item.id)}>{item.name}</button>
      {/each}
    </div>
    <div>
      {#if activeTab === 1}
        <AllLayout />
      {:else if activeTab === 2}
        <ActiveLayout />
      {:else}
        <CompleteLayout />
      {/if}
    </div>
  </div>
</div>


