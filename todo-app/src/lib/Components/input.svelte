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

<div class="input-section">
    <input type="text" bind:value={text} />
<button on:click={handleAdd}>Add</button>
</div>

<style>
    .input-section{
      margin-top: 0.75rem;
        display: flex;
        justify-content: space-between;
    }
    input {
        max-width: 476px;
        width: 100%;
        font-size: 18px;
        padding: 0.5rem 1rem;
        border-radius: 12px;
        border: 1px solid #bdbdbd;
    }
    button {
        background-color: #2F80ED;
        border: 0;
        padding: 0.75rem 2rem;
        color: white;
        font-family: "Montserrat";
        font-weight: 600;
        font-size: 14px;
        border-radius: 12px;
        cursor: pointer;
    }
</style>