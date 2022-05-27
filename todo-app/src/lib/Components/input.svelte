<script lang="ts">
  import { todo_store } from "../Store/todo_store";
  let text: string;
  const handleAdd = () => {
    todo_store.update((item) => {
      return [...item, { todo: text, finish: false }];
    });
    text = "";
  };
</script>

<input type="text" bind:value={text} />
<button on:click={handleAdd}>Add</button>
