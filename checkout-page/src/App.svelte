<script lang="ts">
  import Image1 from "./assets/photo1.png";
  import Image2 from "./assets/photo2.png";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import HiSolidMail from "svelte-icons-pack/hi/HiSolidMail";
  import FaSolidPhoneAlt from "svelte-icons-pack/fa/FaSolidPhoneAlt";
  import AiFillProfile from "svelte-icons-pack/ai/AiFillProfile";
  import AiFillHome from "svelte-icons-pack/ai/AiFillHome";
  import FaSolidCity from "svelte-icons-pack/fa/FaSolidCity";
  import IoEarth from "svelte-icons-pack/io/IoEarth";
  import RiBusinessInboxUnarchiveFill from "svelte-icons-pack/ri/RiBusinessInboxUnarchiveFill";
</script>

<main class="max-w-[1000px] mx-auto p-5 ">
  <h1 class="font-semibold text-[#4E5150] text-[24px] sm:text-[36px] mt-4 sm:mt-8 mb-4 sm:mb-12">Checkout</h1>
  <section class="flex flex-col-reverse sm:flex-row  justify-between items-center sm:items-start my-2">
    <article class="max-w-[470px] w-full sm:mr-8">
      <div>
        <h3 class="mb-1 mt-8 sm:mt-0">Contact infomation</h3>
        <label for="">E-mail</label>  
        <div class="inputBox">
          <div class="icon">
            <Icon size="20" color="#828282" src={HiSolidMail} />
          </div>
          <input type="text" placeholder="Enter your email..." />
        </div>
        <label for="">Phone</label>
        <div class="inputBox">
          <div class="icon">
            <Icon size="20" color="#828282" src={FaSolidPhoneAlt} />
          </div>
          <input type="text" placeholder="Enter your phone..." />
        </div>
      </div>
      <div>
        <h3 class="mt-8 mb-1">Shipping address</h3>
        <label for="">Full name</label>
        <div class="inputBox">
          <div class="icon">
            <Icon size="20" color="#828282" src={AiFillProfile} />
          </div>
          <input type="text" placeholder="Your name.." value="Rodney Cotton" />
        </div>
        <label for="">Address</label>
        <div class="inputBox">
          <div class="icon">
            <Icon size="20" color="#828282" src={AiFillHome} />
          </div>
          <input type="text" placeholder="Your address.." />
        </div>
        <label for="">City</label>
        <div class="inputBox">
          <div class="icon">
            <Icon size="20" color="#828282" src={FaSolidCity} />
          </div>
          <input type="text" placeholder="Your city.." />
        </div>
        <div class="flex">
          <div class="mr-2">
            <label for="">Country</label>
            <div class="inputBox">
              <div class="icon">
                <Icon size="20" color="#828282" src={IoEarth} />
              </div>
              <input type="text" placeholder="Your country.." />
            </div>
          </div>
          <div>
            <label for="">Postal code</label>
            <div class="inputBox">
              <div class="icon">
                <Icon
                  size="20"
                  color="#828282"
                  src={RiBusinessInboxUnarchiveFill}
                />
              </div>
              <input type="text" placeholder="Your postal code.." />
            </div>
          </div>
        </div>
        <input type="checkbox" name="" id="" />
        <label for="">Save this information for next time</label>
      </div>
      <div class="mt-4 flex justify-end">
        <button
          class="bg-[#F2994A] py-3 px-6 text-base  font-semibold text-white rounded-xl"
          >Continue</button
        >
      </div>
    </article>

    <article class="bg-[#f2f2f2] rounded-xl p-4">
      <div>
        <div class="flex ">
          <img src={Image1} alt="" />
          <div class="mr-4">
            <h5>Vintage Backbag</h5>
            <div class="flex items-center">
              <h6>$54.99</h6>
              <span>$94.99</span>
            </div>
            <div class="flex justify-between max-w-[120px] py-2 px-3 border-2 border-[#828282] rounded-xl items-center">
              <button class="btn-symbol">-</button>
              <h2>1</h2>
              <button class="btn-symbol">+</button>
            </div>
          </div>
        </div>
        <div class="flex mt-8">
          <img src={Image2} alt="" />
          <div class="mr-4">
            <h5>Vintage Backbag</h5>
            <div class="flex items-center">
              <h6>$54.99</h6>
              <span>$94.99</span>
            </div>
            <div class="flex justify-between max-w-[120px] py-2 px-3 border-2 border-[#828282] rounded-xl items-center">
              <button class="btn-symbol">-</button>
              <h2>1</h2>
              <button class="btn-symbol">+</button>
            </div>
          </div>
        </div>
      </div>
      <hr class="mt-12" />
      <div class="flex justify-between my-2">
        <h6 class="text-sm sm:text-lg text-[#333] font-semibold">Shipping</h6>
        <p class="text-[#333] text-sm font-semibold">$19</p>
      </div>
      <hr />
      <div class="flex justify-between my-2">
        <h6 class="text-sm sm:text-lg text-[#333] font-semibold">Total</h6>
        <p class="text-[#333] text-sm font-semibold">$148.98</p>
      </div>
    </article>
  </section>
</main>
