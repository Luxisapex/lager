<template>
  <div id="app">
    <router-link to="/">Hem</router-link>
    <router-link to="/lagersaldo">Lagersaldo</router-link>
    <h2>{{norrkopingTotal}}</h2>
    <ul class="balances">
      <li style="list-style-type: none" v-for="balance in balances">{{balance.product}} {{balance.place}} {{balance.amount}} </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import saldo from './Saldo.vue';
export default {
  data () {
    return {
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
  }
}
</script>

<style>

</style>
