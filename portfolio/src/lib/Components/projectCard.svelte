<script lang="ts">
    let para = "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with instagram profile page. The design is from devchallenge.io"
    let tag = ["#HTML","#CSS","#responsive"]
    let proj_arr = [
        {id:1,para,name:"Recipe Blog",tag,img:"./todo-app.jpeg"},
        {id:2,para,name:"My Gallery",tag,img:"./checkout-page.jpeg"},
        {id:3,para,name:"Checkout",tag,img:"./404-not-found.jpeg"}
    ]
</script>
<div class="proj-card">
    {#each proj_arr as item (item.id)}
        <div class="card">
            <img src={item.img} alt="">
            <div class="tag">
                {#each item.tag as tag}
                    <p>{tag}</p>
                {/each}
            </div>
            <p class="title">{item.name}</p>
            <p>{item.para}</p>
            <div class="btn">
                <div class="btn-primary">Demo</div>
                <div class="btn-outline">Code</div>
            </div>
        </div>
    {/each}

</div>