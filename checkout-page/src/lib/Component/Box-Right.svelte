<script lang="ts">
  import "../../Box-right.css";
  let count1: number = 1;
  let count2: number = 1;
</script>

<div class="box-right">
  <div class="card">
    <div class="cart">
      <div class="cart-item">
        <div class="cart-item-left">
          <img src="./photo1.png" alt="" />
        </div>
        <div class="card-item-right">
          <h5>Vintage Backbag</h5>
          <div class="price">
            <p id="price-orange">$54.99</p>
            <p>$94.99</p>
          </div>
          <div class="count">
            <button on:click={() => (count1 -= 1)}>-</button>
            <h5>{count1}</h5>
            <button on:click={() => (count1 += 1)}>+</button>
          </div>
        </div>
      </div>
      <div class="cart-item">
        <div class="cart-item-left">
          <img src="./photo2.png" alt="" />
        </div>
        <div class="card-item-right">
          <h5>Levi Shoes</h5>
          <div class="price">
            <p id="price-orange">$74.99</p>
            <p>$124.99</p>
          </div>
          <div class="count">
            <button on:click={() => (count2 -= 1)}>-</button>
            <h5>{count2}</h5>
            <button on:click={() => (count2 += 1)}>+</button>
          </div>
        </div>
      </div>
    </div>
    <div class="cost-box">
      <h1>Shipping</h1>
      <p>$19</p>
    </div>
    <div class="cost-box">
      <h1>Total</h1>
      <p>$148.98</p>
    </div>
  </div>
</div>
