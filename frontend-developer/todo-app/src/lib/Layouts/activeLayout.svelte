<script lang="ts">
  import store from "../Store/store";
  let inputText;
  $: data = $store.filter(item=>item.completed === false);
  const handleAdd = () => {
    if (inputText === '' || inputText === undefined) {
      console.log("No text!!!");
    } else {
    store.update((item) => [...item, { text: inputText, completed: false,id: new Date().getTime() }]);
    }
    inputText = ""
  };
</script>


<div class="mt-3">
  <div class="form-container">
    <input placeholder="add details" type="text" bind:value={inputText} />
    <button class="add" on:click={handleAdd}>Add</button>
  </div>
  
  <div>
    {#each data as item}
      <div class="mb-2">
        <input type="checkbox" name="" id="" bind:checked={item.completed} />
        <label for="" class:textCompleted={item.completed}>{item.text}</label>
      </div>
    {/each}
  </div>  
</div>