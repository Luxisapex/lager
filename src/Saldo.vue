<template lang="html">
  <div class="">
    <h1>{{phone}}{{pad}}{{watch}}{{cupertino}}{{norrkoping}}{{frankfurt}}</h1>
    <cities
      :cupertino="cupertino" @cupertinoToggled="cupertino = $event"
      :norrkoping="norrkoping" @norrkopingToggled="norrkoping = $event"
      :frankfurt="frankfurt" @frankfurtToggled="frankfurt = $event"
      >
    </cities>
    <products
      :phone="phone" @phoneToggled="phone = $event"
      :pad="pad" @padToggled="pad = $event"
      :watch="watch" @watchToggled="watch = $event"
      >
    </products>
    <h2>{{norrkopingTotal}}</h2>
    <ul class="balances">
      <li style="list-style-type: none" v-show="phone && pad" v-for="balance in balances">{{balance.product}} {{balance.place}} {{balance.amount}} </li>
    </ul>
  </div>
</template>

<script>

import Cities from './Cities.vue'
import Products from './Products.vue'

export default {
  data () {
    return {
      phone: true,
      pad: true,
      watch: true,
      cupertino: true,
      norrkoping: true,
      frankfurt: true,
      balances: [
        { product: "Telephone",
          place: "Cupertino",
          amount: 170000
        },
        {
          product: "Telephone",
          place: "Norrkoping",
          amount: 55000
        },
        {
          product: "Telephone",
          place: "Frankfurt",
          amount: 101700
        },
        {
          product: "Pad",
          place: "Cupertino",
          amount: 41500
        },
        {
          product: "Pad",
          place: "Norrkoping",
          amount: 104300
        },
        {
          product: "Pad",
          place: "Frankfurt",
          amount: 72400
        },
        {
          product: "Watch",
          place: "Cupertino",
          amount: 90000
        },
        {
          product: "Watch",
          place: "Norrkoping",
          amount: 38000
        },
        {
          product: "Watch",
          place: "Frankfurt",
          amount: 25000
        }
      ]
    }
  },
  computed: {
    selected() {
      if(!phone) {

      }
    },
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
  components: {
    'cities': Cities,
    'products': Products
  }
}
</script>

<style lang="css">
</style>
