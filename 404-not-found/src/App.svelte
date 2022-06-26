<script lang="ts">
  import Image from "./assets/Scarecrow.png";
</script>

<main class="min-h-screen container mx-auto">
  <div class="min-h-[10vh] p-5">
    <h3 class="text-[#333] mt-2 text-2xl uppercase">404 not found</h3>
  </div>
  <div
    class="flex flex-col  lg:flex-row lg:justify-between items-center min-h-[90vh] p-5"
  >
    <div class="max-w-[540px] lg:mr-4">
      <img class="w-full" src={Image} alt="" />
    </div>
    <div class="lg:ml-4">
      <h1
        class="text-[#333] mt-12 lg:mt-0 text-[48px] xl:text-[64px] max-w-[600px] font-bold"
      >
        I have bad news for you
      </h1>
      <p class="text-[#4F4F4F] mt-6 mb-10 text-lg xl:text-2xl max-w-[390px]">
        The page you are looking for might be removed or is temporarily
        unavailable
      </p>
      <button class="text-sm font-bold  bg-[#333] text-white py-6 px-12"
        >Back to homepage</button
      >
    </div>
  </div>
</main>
