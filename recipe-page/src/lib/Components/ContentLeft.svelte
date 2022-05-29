<script lang="ts">
    import { instruction } from "../data/instruction";
    import { cake } from "../data/cake";
    import { cracker } from "../data/cracker";
</script>
<div class="content-left">
    <div class="ingredients">
        <h1>Ingredients</h1>
        <div class="cracker">
            <h2>Graham Cracker Crust</h2>
            {#each cracker as item (item.id)}
                <div class="chcbox-container">
                    <input type="checkbox" name="" id="">
                    <label for="">{item.text1}<span>{item.textBold}</span>{item.text2}</label>
                </div>
            {/each} 
        </div>
        <div class="cake">
            <h2>Cheesecake</h2>
            {#each cake as item (item.id)}
                <div class="chcbox-container">
                    <input type="checkbox" name="" id="">
                    <label for="">{item.text1}<span>{item.textBold}</span>{item.text2}</label>
                </div>
            {/each} 
        </div>
    </div>
    <div class="instruction">
        <h1>Instructions</h1>
        {#each instruction as item (item.id)}
        <div class="instruction-box">
            <h6>{item.id}</h6>
            <p><span>{item.textBold}</span>{item.text}</p>
        </div>
        {/each}
    </div>
</div>