<script lang="ts">
  import store from "../Store/store";
  let inputText;
  $: data = $store;
  const handleAdd = () => {
    store.update((item) => [...item, { text: inputText, completed: false }]);
    inputText = ""
  };
</script>

<div class="mt-3">
  <div class="form-container">
    <input class="" placeholder="add details" type="text" bind:value={inputText} />
    <button class="add" on:click={handleAdd}>Add</button>
  </div>

  <div>
    {#each data as item}
      <div class="mb-2">
        <input type="checkbox" name="" id="" bind:checked={item.completed} />
        <label for="">{item.text}</label>
      </div>
    {/each}
  </div>
</div>
