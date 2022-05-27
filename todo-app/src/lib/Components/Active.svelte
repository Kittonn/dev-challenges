<script lang="ts">
    import { todo_store } from "../Store/todo_store";
  import Input from "./input.svelte";
  import List from "./List.svelte";
  $:arr = $todo_store.filter(item=>item.finish === false)
</script>


<Input />
<List {arr} btn_delete={false} />
