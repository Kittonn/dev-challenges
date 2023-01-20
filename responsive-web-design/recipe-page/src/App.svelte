<script lang="ts">
  import Icon from "svelte-icons-pack/Icon.svelte";
  import BiTime from "svelte-icons-pack/bi/BiTime";
  import ImSpoonKnife from "svelte-icons-pack/im/ImSpoonKnife";
  import Image from "./assets/photo1.png";
  import Dot from "./assets/6dots.svg";
  import { cracker } from "./lib/data/cracker";
  import { cake } from "./lib/data/cake";
  import { instruction } from "./lib/data/instruction";
  import { time } from "./lib/data/time";
</script>

<div class="container mx-auto p-5">
  <h1 class="mt-4 text-[24px] md:text-[48px] font-bold">Classic Cheesecake Recipe</h1>
  <div class="flex items-start mt-2">
    <img class="pt-1" src={Dot} alt="" />
    <p class="ml-2 text-xs md:text-sm font-medium text-[#4f4f4f] italic max-w-[592px]">
      Look no further for a creamy and ultra smooth classic cheesecake recipe!
      Paired with a buttery graham cracker crust, no one can deny its simple
      decadence. For the best results, bake in a water bath.
    </p>
  </div>
  <img src={Image} class="rounded-xl max-h-[444px] w-full mt-8" alt="" />
  <div class="mt-8 flex md:justify-between flex-col-reverse md:flex-row">
    <div class="md:mr-8">
      <h2>Ingredients</h2>
      <h3 class="my-6">Graham Cracker Crust</h3>
      <div>
        {#each cracker as item}
          <div class="flex mb-1">
            <input type="checkbox" name="" id="" />
            <label for=""
              >{item.text1}
              <span>{item.textBold}</span>{item.text2}</label
            >
          </div>
        {/each}
      </div>
      <h3 class="my-6">Cheesecake</h3>
      <div>
        {#each cake as item}
          <div class="flex mb-1">
            <input type="checkbox" name="" id="" />
            <label for=""
              >{item.text1}
              <span>{item.textBold}</span>{item.text2}</label
            >
          </div>
        {/each}
      </div>
      <h2 class="text-2xl my-6">Instructions</h2>
      <div>
        {#each instruction as item}
          <div class="flex items-start mb-3">
            <h4>{item.id}</h4>
            <label for=""><span>{item.textBold}</span>{item.text}</label>
          </div>
        {/each}
      </div>
    </div>
    <div>
      <div
        class="md:bg-white min-w-[216px] md:shadow-lg md:px-8 md:py-4 rounded-xl mb-8 grid grid-cols-3 md:grid-cols-1"
      >
        {#each time as item}
          <div class:spanCol={item.textOr} class="flex items-center my-4 md:my-8">
            <div class="mr-3">
              <Icon
                src={BiTime}
                size="28"
                color={item.iconOr ? "#F2994A" : "#4F4F4F"}
              />
            </div>
            <div>
              <h5 class="text-[8px] md:text-[10px] font-bold text-[#bdbdbd]">
                {item.text}
              </h5>
              <h6 class:textOrange={item.textOr} class="font-medium text-[10px] md:text-[14px] text-[#333]">{item.time}</h6>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
