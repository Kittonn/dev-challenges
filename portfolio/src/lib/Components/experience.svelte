<script lang="ts">
    let exper_arr = [
        {id:1,job:"Front-end developer",time:"Feb 2017 - Current",para:"Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",logo:"./adidas.jpg"},
        {id:2,job:"Full-stack developer",time:"Aug 2016 - Feb 2018",para:"Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",logo:"./hm.png"}
    ]
</script>

<div class="experience">
    <p class="title">Experiences</p>
    <div class="exper-content">
        {#each exper_arr as item (item.id)}
            <div class="box">
                <div class="box-left"><img src={item.logo} alt=""></div>
                <div class="box-right">
                    <p>{item.time}</p>
                    <h2>{item.job}</h2>
                    <p>{item.para}</p>
                </div>
            </div>
        {/each}
    </div>
</div>