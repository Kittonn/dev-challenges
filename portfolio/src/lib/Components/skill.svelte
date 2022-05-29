<script lang="ts">
  let skill_arr = [
    { id: 1, name: "React", level: 60 },
    { id: 2, name: "Javascript", level: 80 },
    { id: 3, name: "CSS", level: 90 },
    { id: 4, name: "Vue", level: 60 },
    { id: 5, name: "Redux", level: 80 },
    { id: 6, name: "React Native", level: 90 },
  ];
</script>

<div class="skill">
  <h1>Front End</h1>
  <div class="skill-level">
    {#each skill_arr as item (item.id)}
      <div class="skill-container">
        <p>{item.name}</p>
        <div class="skill-box">
          <div style={`width: ${item.level}%;`} class="skill-length" />
        </div>
      </div>
    {/each}
  </div>
</div>

