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
          <span v-if="balanceExists(pindex, cindex)">{{ displaySum(pindex, cindex) }}</span>
        </td>
        <td class="col-md-2">
          <span v-if="balanceExists(pindex,-1)">{{ displaySum(pindex, -1) }}</span>
        </td>
      </tr>

      <!--  Bottom row with only sums -->

      <tr>
        <td class="field-label col-md-2 active">
          <label>Summa (markerade)</label>
        </td>

        <td v-for="(city, cindex) in cities" class="col-md-2">
          <span v-if="balanceExists(-1, cindex)">{{ displaySum(-1, cindex) }}</span>
        </td>

        <td class="col-md-2">
          <span v-if="balanceExists(-1, -1)">
            {{ displaySum(-1,-1) }}
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

      // cities: [],
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

  },

  methods: {
    addCommas(nStr) {
      nStr += '';
      const x = nStr.split('.');
      let x1 = x[0];
      const x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
      }
      return x1 + x2;
    },
    balanceExists(productIndex, cityIndex) {
      if(this.balances) {
        if((productIndex === -1 || this.products[productIndex].checked) && (cityIndex === -1 || this.cities[cityIndex].checked)) {
          return true;
        }
      }
      return false;
    },
    displaySum(pindex, cindex) {
      let result = 0;
      if(cindex === -1 && pindex === -1) {
        const checkedCityNames = this.cities.filter(city => city.checked).map(city => city.name);
        const checkedProductNames = this.products.filter(product => product.checked).map(product => product.name);
        const rightBalances = this.balances.filter(balance => checkedCityNames.indexOf(balance.city) !== -1 && checkedProductNames.indexOf(balance.product) !== -1);
        result = rightBalances.reduce((total, balance) => total + balance.amount, 0);
      }
      else if(cindex === -1) {
        const balancesWithRightProduct = this.balances.filter(balance => balance.product === this.products[pindex].name);
        const checkedCityNames = this.cities.filter(city => city.checked).map(city => city.name);
        const rightBalances = balancesWithRightProduct.filter(balance => checkedCityNames.indexOf(balance.city) !== -1);
        result = rightBalances.reduce((total, balance) => total + balance.amount, 0);
      }
      else if(pindex === -1) {
        const balancesWithRightCity = this.balances.filter(balance => balance.city === this.cities[cindex].name);
        const checkedProductNames = this.products.filter(product => product.checked).map(product => product.name);
        const rightBalances = balancesWithRightCity.filter(balance => checkedProductNames.indexOf(balance.product) !== -1);
        result = rightBalances.reduce((total, balance) => total + balance.amount, 0);
      }
      else {
        result = this.balances[cindex+this.cities.length*pindex].amount;
      }
      return this.addCommas(result);
    },
    fetchBalances() {
      fetch(this.balancesLocation)
          .then(blob => blob.json())
          .then(data => this.balances.push(...data));
      // this.pushCities();
      // this.pushProducts();
    },

  },

  beforeMount() {
    this.fetchBalances()
  }
}
</script>

<style lang="css">
</style>
