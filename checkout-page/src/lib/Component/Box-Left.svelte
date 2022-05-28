<script lang="ts">
  import "../../Box-left.css";
</script>

<div class="box-left">
  <div class="contact">
    <h3>Contact Information</h3>
    <label for="">E-mail</label>
    <div class="input-container">
      <i class="fa fa-envelope"></i>
      <input required type="text" placeholder="Enter your email..." />
    </div>
    <label for="">Phone</label>
    <div class="input-container">
      <i class="fas fa-phone-alt"></i>
      <input required type="text" placeholder="Enter your phone..." />
    </div>
  </div>

  <div class="address">
    <h3>Shipping Address</h3>
    <label for="">Full name</label>
    <div class="input-container">
      <i class="fa fa-user"></i>
      <input required type="text" value="Rodney Cotton" />
    </div>
    <label for="">Address</label>
    <div class="input-container">
      <i class="fa fa-home"></i>
      <input required type="text" placeholder="Your address.." />
    </div>
    <label for="">City</label>
    <div class="input-container">
      <i class="fa fa-city"></i>
      <input required type="text" placeholder="Your city.." />
    </div>
    <div class="flex-input">
      <div class="country">
        <label for="">Country</label>
        <div class="input-container">
          <i id="icon-country" class="fa fa-globe"></i>
          <select name="" id="">
            <option value="" disabled selected hidden>Your country..</option>
            <option value="">Thailand</option>
            <option value="">Japan</option>
            <option value="">England</option>
          </select>
        </div>
      </div>
      <div class="code">
        <label for="">Postal code</label>
        <div class="input-container">
          <i class="fas fa-mail-bulk input-icon"></i>
          <input required type="text" placeholder="Your postal code.." />
        </div>
      </div>
    </div>
    <input type="checkbox" name="" id="" />
    <label id="chc-txt" for="">Save this information for next time</label>
    <p class="align-right">
        <button>Continue</button>
    </p>
  </div>
</div>
