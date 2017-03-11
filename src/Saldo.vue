<template lang="html">
  <div class="">
    <table class="table table-bordered">

      <!-- Top row with city-selectors -->

      <tr>
        <td class="col-md-2 active">
          <label class="field-label">SALDO</label>
        </td>
        <city v-for="city in cities" :key="city.name" :city="city" @cityToggled="city.checked = $event"></city>
        <td class="col-md-2 active">
          <label class="field-label">Summa (markerade)</label>
        </td>
      </tr>

      <!-- Mid rows product-selectors, amounts and sums -->

      <tr v-for="(product, pindex) in products">
        <product :key="products[pindex].name" :product="products[pindex]" @productToggled="products[pindex].checked = $event"></product>
        <td v-for="(city, cindex) in cities" class="col-md-2">
          <span v-show="balance(pindex, cindex)">{{balances[3*pindex+cindex].amount}}</span>
        </td>
        <td class="col-md-2">
          <span v-show="balance(pindex,-1)">{{balances[3*pindex].amount + balances[3*pindex+1].amount + balances[3*pindex+2].amount}}</span>
        </td>
      </tr>

      <!--  Bottom row with only sums -->

      <tr>
        <td class="field-label col-md-2 active">
          <label>Summa (markerade)</label>
        </td>

        <td v-for="(city, cindex) in cities" class="col-md-2">
          <span v-show="balance(-1, cindex)">{{balances[cindex].amount + balances[cindex+3].amount + balances[cindex+6].amount}}</span>
        </td>

        <td class="col-md-2">
          <span v-show="balance(-1, -1)">
            {{ balances[0].amount + balances[1].amount + balances[2].amount +
            balances[3].amount + balances[4].amount + balances[5].amount +
            balances[6].amount + balances[7].amount + balances[8].amount}}
          </span>
        </td>

      </tr>
    </table>
  </div>
</template>

<script>

import City from './City.vue'
import Product from './Product.vue'

export default {

  data () {
    return {
      balances: [],
      balancesLocation: '../balances.json',

      cities: [
        {name:'cupertino', checked : true },
        {name: 'norrkoping', checked: true },
        {name:'frankfurt', checked: true }
      ],
      products: [
        {name:'phone', checked: true},
        {name:'pad', checked: true},
        {name:'watch', checked: true}
      ]
    }
  },

  components: {
    'city': City,
    'product': Product
  },

  computed: {
    phoneTotal: function() {
      let total = 0;
      for(let i = 0; i < this.balances.length; i++) {
        if(this.balances[i].product === "Telephone") {
          total+= this.balances[i].amount;
        }
      }
      return total;
    },
    norrkopingTotal: function() {
      const norrkopingBalances = this.balances.filter(balance => balance.place === "Norrkoping");
      return norrkopingBalances.reduce((total, balance) => total += balance.amount, 0);
    }
  },

  methods: {
    balance(productIndex, cityIndex) {
      if(this.balances) {
        if((productIndex === -1 || this.products[productIndex].checked) && (cityIndex === -1 || this.cities[cityIndex].checked)) {
          return true;
        }
      }
      return false;
    },
    fetchBalances() {
      fetch(this.balancesLocation)
          .then(blob => blob.json())
          .then(data => this.balances.push(...data));
    }
  },

  beforeMount() {
    this.fetchBalances()
  }
}
</script>

<style lang="css">
</style>
