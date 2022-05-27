<script lang="ts">
  export let arr;
  export let btn_delete;
  import { todo_store } from "../Store/todo_store";
  const delete_btn = (todo) => {
    todo_store.update((item) => {
      return item.filter((item) => item.todo !== todo);
    });
  };
</script>

<div class="list">
  {#each arr as item}
    {#if btn_delete}
      <div id="item-completed" class="item">
        <div class="item-left">
          <input class="checkbox" type="checkbox" bind:checked={item.finish} />
          <label for="" class:finish={item.finish}>{item.todo}</label>
        </div>
        <div class="item-right">
          <button on:click={() => delete_btn(item.todo)}>
            <span class="material-icons"> delete_outline </span>
          </button>
        </div>
      </div>
    {:else}
      <div class="item">
        <input class="checkbox" type="checkbox" bind:checked={item.finish} />
        <label for="" class:finish={item.finish}>{item.todo}</label>
      </div>
    {/if}
  {/each}
</div>

<style>
  .list {
    margin-top: 1rem;
  }
  .finish {
    text-decoration: line-through;
  }
  label {
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 18px;
    margin-left: 0.5rem;
  }
  .item {
    margin-bottom: 0.5rem;
  }
  #item-completed {
    display: flex;
    justify-content: space-between;
  }
  .checkbox {
    accent-color: #2f80ed;
    transform: scale(1.5);
  }
  span {
    color: #bdbdbd;
  }
  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
</style>
