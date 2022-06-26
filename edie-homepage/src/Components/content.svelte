<script lang="ts">
  import Icon from "svelte-icons-pack/Icon.svelte";
  import Banner from "../assets/heroImage.jpg";
  import BsArrowRight from "svelte-icons-pack/bs/BsArrowRight";
  import BiSolidPencil from "svelte-icons-pack/bi/BiSolidPencil";
  import FaSolidServer from "svelte-icons-pack/fa/FaSolidServer";
  import Person1 from "../assets/person1.png";
  import Person2 from "../assets/person2.png";
  import Person3 from "../assets/person3.png";
  import Person4 from "../assets/person4.png";
  import BiCode from "svelte-icons-pack/bi/BiCode";
  let text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.";

  let design_data = [
    {
      name: "Smart home dashboard",
      role: "Full stack application",
      path: "./assets/smarthome.jpg",
    },
    {
      name: "Onboard application",
      role: "UX/UI design",
      path: "./assets/onboard.png",
    },
    {
      name: "Booking system",
      role: "Mobile application",
      path: "./assets/booking.png",
    },
    {
      name: "Juice product homepage",
      role: "Front End application",
      path: "./assets/juice-product.png",
    },
  ];
</script>

<div class="container mx-auto p-5 pt-[6rem]">
  <div>
    <div class="ml-[1.5rem] md:ml-[8rem] mt-12 mb-8">
      <h6 class="text-[#2D9CDB] text-xs md:text-lg mb-2">Unhappy with your website?</h6>
      <h1 class="text-[#333] text-[24px] md:text-[48px]  max-w-[543px]">
        We create beautiful and fast web services
      </h1>
    </div>
    <img src={Banner} class="w-full rounded-[18px]" alt="" />
    <div class="ml-[1.5rem] md:ml-[8rem] max-w-[366px]">
      <h1 class="text-[#333] text-[24px] md:text-[48px] my-8 ">Story, emotion and purpose</h1>
      <p class="text-xs md:text-lg font-normal text-[#4F4F4F]">
        We help transform your ideas into real world applications that will
        outperform your toughest competition and help you achieve your strategic
        goals in short period of time.
      </p>
      <div class="mt-8">
        <p class="text-[#828282] mb-2 text-[10px] md:text-sm">Want us to contact you?</p>
        <div class="bg-[#F2F2F2] flex p-2 rounded-xl ">
          <input
            type="text"
            class="p-2 w-full rounded-xl bg-transparent"
            placeholder="Email"
          />
          <button
            class="bg-[#2D9CDB] py-2 px-4 text-[#f2f2f2]  right-2 rounded-xl"
            >Join</button
          >
        </div>
      </div>
    </div>
  </div>

  <div class="mt-[6rem]">
    <h1 class="max-w-[346px] text-[24px] md:text-[36px] font-medium text-[#333]">
      We offer high demand services
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      <div class="bg-white hover:shadow-xl rounded-3xl overflow-hidden p-6">
        <div class="bg-[#2D9CDB] p-3 rounded-2xl w-fit">
          <Icon src={BiSolidPencil} color="white" size="24" />
        </div>
        <h3 class="text-[#333] text-2xl mt-6 mb-4">UI/UX Design</h3>
        <p class="text-base font-normal text-[#4f4f4f]">{text}</p>
        <button
          class="text-[#828282] text-base font-medium bg-[#E0E0E0] hover:bg-[#2D9CDB] hover:text-white py-2 px-4 rounded-xl mt-4 mb-2"
          >Get started</button
        >
      </div>
      <div class="bg-white hover:shadow-xl rounded-3xl overflow-hidden p-6">
        <div class="bg-[#27AE60] p-3 rounded-2xl w-fit">
          <Icon src={BiCode} color="white" size="24" />
        </div>
        <h3 class="text-[#333] text-2xl mt-6 mb-4">Front End</h3>
        <p class="text-base font-normal text-[#4f4f4f]">{text}</p>
        <button
          class="text-[#828282] text-base font-medium bg-[#E0E0E0] hover:bg-[#2D9CDB] hover:text-white py-2 px-4 rounded-xl mt-4 mb-2"
          >Get started</button
        >
      </div>
      <div class="bg-white hover:shadow-xl rounded-3xl overflow-hidden p-6">
        <div class="bg-[#EB5757] p-3 rounded-2xl w-fit">
          <Icon src={FaSolidServer} color="white" size="24" />
        </div>
        <h3 class="text-[#333] text-2xl mt-6 mb-4">Back End</h3>
        <p class="text-base font-normal text-[#4f4f4f]">{text}</p>
        <button
          class="text-[#828282] text-base font-medium bg-[#E0E0E0] hover:bg-[#2D9CDB] hover:text-white py-2 px-4 rounded-xl mt-4 mb-2"
          >Get started</button
        >
      </div>
    </div>
  </div>

  <div class="mt-[6rem]">
    <h1 class="mb-8 sm:mb-0 text-[24px] md:text-[36px] font-medium text-[#333] max-w-[448px]">
      Good design means good business
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:relative">
      {#each design_data as item}
        <div class="grid-down">
          <img src={item.path} class="w-full rounded-xl" alt="" />
          <p class="text-[#828282] mt-4 text-xs sm:text-sm font-light">{item.role}</p>
          <h3 class="text-lg sm:text-2xl text-[#333] mt-1 font-medium">{item.name}</h3>
        </div>
      {/each}
      <button
        class="static sm:absolute right-0 bottom-0 flex items-center text-[#2D9CDB] text-lg sm:text-2xl font-medium"
        >see more&nbsp;<Icon
          color="#2D9CDB"
          size="24"
          src={BsArrowRight}
        /></button
      >
    </div>
  </div>

  <div class="flex flex-col md:flex-row md:items-center justify-between my-[8rem]">
    <div>
      <p class="text-[#EB5757] font-medium text-lg">Meet the team</p>
      <h1 class="max-w-[280px] text-[#333] text-[36px] font-medium">
        We are chilled and a laidback team
      </h1>
      <p class="font-light text-[#4f4f4f] font-base max-w-[273px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>

    <div class="mt-8 md:mt-0 grid grid-cols-2 gap-4">
      <img src={Person3} class="row-span-2 self-center rounded-3xl" alt="" />
      <img src={Person1} class="rounded-3xl" alt="" />
      <img src={Person2} class="rounded-3xl" alt="" />
    </div>
  </div>

  <div>
    <h1 class="text-[24px] md:text-[36px] font-medium text-[#333] max-w-[936px]">
      “Fast and outstanding resutls. Edie understands their customer’s needs.
      They have a young and talented team.”
    </h1>
    <div class="flex items-center mt-8">
      <div class="w-[82px] overflow-hidden mr-4  rounded-xl">
        <img src={Person4} class="w-full" alt="" />
      </div>
      <div>
        <h6 class="text-2xl text-[#333]">Carlos Tran</h6>
        <p class="text-[#828282] text-lg">The Decorate Gatsby</p>
      </div>
    </div>
  </div>
</div>
