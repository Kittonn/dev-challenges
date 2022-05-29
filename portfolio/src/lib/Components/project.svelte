<script lang="ts">
    let project_arr = [
        {id:1,name:"React",active:false},
        {id:2,name:"Vue",active:false},
        {id:3,name:"Responsive",active:true},
    ]
</script>

<div class="project">
    <p>Projects ({project_arr.length})</p>
    <div class="project-content">
        <div class="project-box">
            {#each project_arr as item (item.id)}
                <p class:active={item.active}>{item.name}</p>
            {/each}
        </div>
    </div>
</div>


