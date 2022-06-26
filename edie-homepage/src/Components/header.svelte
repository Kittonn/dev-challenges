<script lang="ts">
  import Menu from "../assets/menu.svg";
  import Close from "../assets/close.svg";
  let navLink = [
    { name: "Home" },
    { name: "Services" },
    { name: "Our Works" },
    { name: "Clients" },
    { name: "Contact" },
  ];
  let open = false;
</script>

<header class=" fixed w-full bg-white shadow-md z-50">
  <nav class="p-5 container mx-auto md:flex md:justify-between md:items-center">
    <div class="flex justify-between">
      <h1
        class="md:text-[36px] text-2xl z-20 font-['Heebo'] cursor-pointer pt-1 md:pt-0 font-extrabold leading-4 text-[#333]"
      >
        Edie
      </h1>
      <div on:click={() => (open = !open)} class="md:hidden z-20">
        {#if open}
          <img src={Close} class="w-6" alt="" />
        {:else}
          <img src={Menu} class="w-6" alt="" />
        {/if}
      </div>
    </div>

    <div
      class={`absolute md:static left-0 transition-all  ease-in duration-500 z-10 bg-white w-full ${
        open ? `top-[65px]` : `top-[-1000px]`
      }`}
    >
      <div class="container mx-auto md:flex justify-end md:p-0 p-5">
        {#each navLink as item}
          <p class="text-[#333] mb-4 md:mb-0 md:ml-12 cursor-pointer text-lg md:text-xl">
            {item.name}
          </p>
        {/each}
      </div>
    </div>
  </nav>
</header>
