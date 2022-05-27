<script lang="ts">
    import { todo_store } from "../Store/todo_store";
</script>

{#each $todo_store as item}
    <div>
        <input type="checkbox" bind:checked={(item.finish)}>
        <label for="" class:finish={item.finish}>{item.todo}</label>
    </div>
    
{/each}


<style>
    .finish {
        text-decoration: line-through;
    }
</style>