<script lang="ts">
    let hobby_arr = [
        {id:1,name:"Gaming",para:"Quisque feugiat malesuada molestie.",img:"./gaming.jfif"},
        {id:2,name:"Cooking",para:"Quisque feugiat malesuada molestie.",img:"./cooking.png"},
        {id:3,name:"Biking",para:"Quisque feugiat malesuada molestie.",img:"./biking.jfif"}
    ]
</script>

<div class="hobby">
  <h2>Hobbies</h2>
  <div class="hobby-content">
      <div class="hobby-box">
          {#each hobby_arr as item (item.id)}
              <img src={item.img} alt="">
              <h2>{item.name}</h2>
              <p>{item.para}</p>
          {/each}
      </div>
  </div>
</div>

