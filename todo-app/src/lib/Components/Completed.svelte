<script lang="ts">
    import { todo_store } from "../Store/todo_store";
    let completed_arr = $todo_store.filter(item=>item.finish === true)
</script>
<h1>Completed</h1>
<button on:click={()=>todo_store.set([])}>Delete</button>