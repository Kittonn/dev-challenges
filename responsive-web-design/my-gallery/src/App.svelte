<script lang="ts">
  let pic = [
    { path: "./assets/photo1.png" },
    { path: "./assets/photo2.png" },
    { path: "./assets/photo3.png" },
    { path: "./assets/photo4.png" },
    { path: "./assets/photo5.png" },
    { path: "./assets/photo6.png" },
  ];

  let data = [
    { text: "Posts", count: "100" },
    { text: "Follower", count: "2,422" },
    { text: "Following", count: "1,432" },
  ];
</script>

<main class="min-h-screen p-5 container mx-auto">
  <div class="flex flex-col justify-center items-center">
    <img class="max-w-[100px] md:max-w-[156px] rounded-2xl mt-4" src="./assets/profilePhoto.png" alt="" />
    <h1 class="font-semibold text-sm md:text-2xl text-[#4E5150] mt-2 mb-1">Rodney Cotton</h1>
    <p class="md:text-sm font-semibold text-[10px] text-[#A9A9A9] mb-4">Helsinki, Finland</p>
    <div class="grid grid-cols-3 gap-3 md:gap-6">
      {#each data as item}
        <div class="text-center bg-[#E5E5E5] rounded-xl py-3 px-4">
          <h5 class="font-semibold text-[#4E5150] text-xs md:text-lg leading-5">{item.count}</h5>
          <p class="text-xs md:text-sm font-semibold text-[#BDBDBD]">{item.text}</p>
        </div>
      {/each}
    </div>
  </div>
  <div class="grid grid-cols-3 max-w-[800px] mx-auto md:gap-6 gap-4 my-8 md:my-12">
    <div>
      <img src={pic[0].path} alt="" />
    </div>
    <div class="col-span-2">
      <img src={pic[1].path} alt="" />
    </div>
    <div class="col-span-2">
      <img src={pic[2].path} alt="" />
    </div>
    <div class="row-span-2">
      <img src={pic[3].path} alt="" />
    </div>
    <div>
      <img src={pic[4].path} alt="" />
    </div>
    <div>
      <img src={pic[5].path} alt="" />
    </div>
  </div>
</main>
