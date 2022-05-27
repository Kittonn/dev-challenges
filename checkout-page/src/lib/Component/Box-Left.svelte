<script lang="ts">
  import "../../Box-left.css";
</script>

<div class="box-left">
  <div class="contact">
    <h3>Contact Information</h3>
    <label for="">E-mail</label>
    <input type="text" placeholder="Enter your email..." />
    <label for="">Phone</label>
    <input type="text" placeholder="Enter your phone..." />
  </div>

  <div class="address">
    <h3>Shipping Address</h3>
    <label for="">Full name</label>
    <input type="text" value="Rodney Cotton" />
    <label for="">Address</label>
    <input type="text" placeholder="Your address.." />
    <label for="">City</label>
    <input type="text" placeholder="Your city.." />
    <div class="flex-input">
      <div class="country">
        <label for="">Country</label>
        <select name="" id="">
          <option value="" disabled selected hidden>Your country..</option>
          <option value="">Thailand</option>
          <option value="">Japan</option>
          <option value="">England</option>
        </select>
      </div>
      <div class="code">
        <label for="">Postal code</label>
        <input type="text" placeholder="Your postal code.." />
      </div>
    </div>
    <input type="checkbox" name="" id="" />
    <label id="chc-txt" for="">Save this information for next time</label>
    <p class="align-right">
        <button>Continue</button>
    </p>
  </div>
</div>
