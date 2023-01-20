<script lang="ts">
  import Profile from "./lib/Components/profile.svelte";
  import Skill from "./lib/Components/skill.svelte";
  import Hobby from "./lib/Components/hobby.svelte";
  import Project from "./lib/Components/project.svelte";
  import Blog from "./lib/Components/blog.svelte";
  import Experience from "./lib/Components/experience.svelte";
  import ProjectCard from "./lib/Components/projectCard.svelte";
  import SelectTap from "./lib/Components/selectTap.svelte";
</script>

<div class="container">
  <Profile />
  <div class="content">
    <div class="content-left">
      <Skill />
      <Hobby />
    </div>
    <div class="content-right">
      <Blog />
      <Experience />
    </div>
  </div>

  <Project />
  <ProjectCard />
  <SelectTap />
</div>
