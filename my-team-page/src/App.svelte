<script lang="ts">
  let data = [
    {
      name: "Bill Mahoney",
      role: "Product owner",
      path: "./assets/photo1.png",
    },
    { name: "Saba Cabrera", role: "Art director", path: "./assets/photo2.png" },
    { name: "Shae Le", role: "Tech Lead", path: "./assets/photo3.png" },
    { name: "Skylah Lu", role: "UX Designer", path: "./assets/photo4.png" },
    { name: "Griff Richards", role: "Developer", path: "./assets/photo5.png" },
    { name: "Stan John", role: "DEverloper", path: "./assets/photo6.png" },
  ];
</script>

<main class="max-w-[1000px] min-h-screen mx-auto p-5">
  <div class="flex md:flex-row flex-col justify-between items-start mt-10 mb-12">
    <div>
      <h1 class="font-bold text-[36px]">The creative crew</h1>
    </div>
    <div class="mt-8 md:mt-0">
      <h3 class="font-semibold text-[Poppins] uppercase text-lg">Who we are</h3>
      <p class="max-w-[440px] text-sm md:text-lg text-[Poppins] mt-2">
        We are team of creatively diverse. driven. innovative individuals
        working in various locations from the world.
      </p>
    </div>
  </div>
  <div class="grid justify-items-center gap-8 grid-cols-2 md:grid-cols-3">
    {#each data as item}
      <div class="grid-item">
        <div class="flex">
          <img class="max-w-[240px]  w-full" src={item.path} alt="" />
          <p class="uppercase text-rl text-[10px] md:text-xs text-pt">{item.role}</p>
        </div>
        <h2 class="text-[Poppins] mt-2 font-semibold text-sm md:text-lg">{item.name}</h2>
      </div>
    {/each}
  </div>
</main>
