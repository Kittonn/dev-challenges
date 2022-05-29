<script lang="ts">
  import { time } from "../data/time";
</script>

<div class="content-right">
  <div class="card">
    {#each time as item (item.id)}
      <div class="time-box" class:full={item.iconOr}>
        <div class="time-box-left">
          <i class:iconOr={item.iconOr} class="far fa-clock" />
        </div>
        <div class="time-box-right">
          <p>
            {item.text}
          </p>
          <h3 class:textOr={item.textOr}>
            {item.time}
          </h3>
        </div>
      </div>
    {/each}
  </div>
</div>
