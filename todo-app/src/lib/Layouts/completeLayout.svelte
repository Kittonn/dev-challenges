<script lang="ts">
  import store from "../Store/store";
  import AiOutlineDelete from "svelte-icons-pack/ai/AiOutlineDelete";
  import Icon from "svelte-icons-pack/Icon.svelte";
  let inputText;
  $: data = $store.filter((item) => item.completed === true);

  const handleReset = () => {
    store.update((item) => item.filter((data) => data.completed !== true));
  };
  const handleDelete = (text) => {
    store.update((item) => item.filter((data) => data.text !== text));
  };
</script>

<div class="mt-3">
  <div>
    {#each data as item}
      <div class="mb-2 flex justify-between items-center">
        <div>
          <input type="checkbox" name="" id="" bind:checked={item.completed} />
          <label for="">{item.text}</label>
        </div>
        <button class="" on:click={() => handleDelete(item.text)}>
          <Icon src={AiOutlineDelete} size="22" color="#BDBDBD" />
        </button>
      </div>
    {/each}
  </div>
  <div class="flex justify-end mt-8">
    <button
      class="flex text-white items-center rounded  bg-[#EB5757] py-3 px-6"
      on:click={handleReset}
      ><Icon src={AiOutlineDelete} size="18" color="#fff" /> delete all</button
    >
  </div>
</div>
