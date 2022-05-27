<script lang="ts">
  import List from "./List.svelte";
  import { todo_store } from "../Store/todo_store";
  $:arr = $todo_store.filter((item) => item.finish === true);
  const delete_all = () => {
    todo_store.update((item) => {
      return item.filter((item) => item.finish !== true);
    });
  };
  
</script>

<List btn_delete={true} {arr} />

<div class="btn-delete">
  <div class="delete_all" on:click={delete_all}>
    <span class="material-icons"> delete_outline </span>Delete
  </div>
</div>

<style>
    .btn-delete {
        margin-top: 1rem;
        display: flex;
        justify-content: end;
    }
  .delete_all {
    background-color: #eb5757;
    color: white;
    border: 0;
    width: fit-content;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 12px;
    padding: 0.75rem 2rem;
    border-radius: 4px;
  }
  span {
    margin-right: 0.25rem;
    font-size: 16px;
  }
</style>
