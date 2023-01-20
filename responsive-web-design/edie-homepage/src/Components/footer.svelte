<script lang="ts">
  import FaBrandsLinkedin from "svelte-icons-pack/fa/FaBrandsLinkedin";
  import FaBrandsInstagramSquare from "svelte-icons-pack/fa/FaBrandsInstagramSquare";
  import FaBrandsTwitterSquare from "svelte-icons-pack/fa/FaBrandsTwitterSquare";
  import Icon from "svelte-icons-pack/Icon.svelte";
  let navLink = [
    { name: "Home" },
    { name: "Services" },
    { name: "Our Works" },
    { name: "Clients" },
    { name: "Contact" },
  ];
</script>

<footer class="mt-[8rem] bg-[#100E1D] ">
  <div class="container mx-auto px-5 pt-8 pb-[4rem] flex flex-col md:flex-row justify-between">
    <div>
      {#each navLink as item}
        <p class="text-white cursor-pointer font-light text-lg mb-2">{item.name}</p>
      {/each}
    </div>
    <div class="my-12 md:my-0">
      <h1 class="text-[#f2f2f2] text-[36px]">Edie</h1>
      <div class="flex">
        <div class="mr-2 cursor-pointer">
          <Icon color="#f2f2f2" src={FaBrandsTwitterSquare} size="32" />
        </div>
        <div class="mr-2 cursor-pointer">
          <Icon color="#f2f2f2" src={FaBrandsLinkedin} size="32" />
        </div>
        <div class="mr-2 cursor-pointer">
          <Icon color="#f2f2f2" src={FaBrandsInstagramSquare} size="32" />
        </div>
      </div>
    </div>
    <div>
      <p class="text-[10px] md:text-sm text-[#f2f2f2] mb-2">Want us to contact you?</p>
      <div class="bg-[#f2f2f2] flex p-2 max-w-[300px]  rounded-xl ">
        <input
          type="text"
          class="p-2 w-full rounded-xl bg-transparent"
          placeholder="Email"
        />
        <button class="bg-[#2D9CDB] text-[#f2f2f2] py-2 px-4 right-2 rounded-xl">Join</button>
      </div>
    </div>
  </div>
</footer>
