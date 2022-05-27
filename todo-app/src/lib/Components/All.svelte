<script lang="ts">
    import { todo_store } from "../Store/todo_store";
  import Input from "./input.svelte";
  import List from "./List.svelte";
</script>

<Input />
<List btn_delete={false} arr={$todo_store} />
