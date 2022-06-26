<script lang="ts">
  import Icon from "svelte-icons-pack/Icon.svelte";
  import Image from "./assets/photo1.png";
  import Profile from "./assets/photo2.png";
  import BsArrowRight from "svelte-icons-pack/bs/BsArrowRight";
  import AiOutlineMenu from "svelte-icons-pack/ai/AiOutlineMenu";
  import AiOutlineClose from "svelte-icons-pack/ai/AiOutlineClose";
  let navLink = [
    { name: "Home", isActive: true },
    { name: "Collection", isActive: false },
    { name: "About", isActive: false },
    { name: "Contact", isActive: false },
  ];
  let open = false;
</script>

<header class="text-white h-[10vh]">
  <nav class="container p-5 mx-auto md:flex md:justify-between">
    <div class="flex justify-between items-center">
      <div>
        <h1 class="text-sm border-2 border-white py-2 px-4">This Interior</h1>
      </div>
      <div on:click={() => (open = !open)} class="md:hidden z-30">
        {#if open}
          <Icon color="white" src={AiOutlineClose} size="24" />
        {:else}
          <Icon color="white" src={AiOutlineMenu} size="24" />
        {/if}
      </div>
    </div>
    <div
      class={`bg-[#181719] md:bg-transparent absolute z-20 md:static h-full w-full md:w-auto left-0 ${
        open ? "top-0" : "top-[-2000px]"
      }`}
    >
      <div
        class="flex flex-col justify-center items-center h-full md:flex-row md:justify-end"
      >
        {#each navLink as item}
          <p
            class:active={item.isActive}
            class="md:ml-9 md:mb-0 mb-8 text-lg font-medium"
          >
            {item.name}
          </p>
        {/each}
      </div>
    </div>
  </nav>
</header>

<section
  class="container text-white p-5 mx-auto mb-[6rem]  flex flex-col md:flex-row justify-between md:items-center  md:min-h-[70vh]"
>
  <article class="">
    <h1 class="font-['lora'] font-medium text-[36px] md:text-[48px]">
      Modern interior
    </h1>
    <p class="max-w-[410px] font-normal text-sm md:text-2xl my-8">
      A full-Service residential & commercial interior design and staging
      company offering professional organizing & eco-services.
    </p>
    <button class="text-sm md:text-lg font-bold flex items-center"
      >Readmore&nbsp;&nbsp;<Icon src={BsArrowRight} size="20" /></button
    >
  </article>
  <article class="relative md:my-0 my-12">
    <div class="max-w-[740px]">
      <img src={Image} class="w-full" alt="" />
    </div>

    <div
      class="bg-[#181719] py-6 px-8 shadow-lg absolute z-10 bottom-[-30%]  md:bottom-[-20%] right-[5%]"
    >
      <div class="flex items-center">
        <img class="w-[50px] mr-4 rounded-full" src={Profile} alt="" />
        <div>
          <h3 class="font-medium text-xs md:text-sm">Aliza Webber</h3>
          <p class="font-medium text-[10px] md:text-[12px] text-[#828282]">
            Interior designer
          </p>
        </div>
      </div>
      <h6 class="text-lg md:text-2xl font-['lora'] max-w-[290px] mt-8 mb-4">
        Designed in 2020 by Aliza Webber
      </h6>
    </div>
  </article>
</section>
