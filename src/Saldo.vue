<template lang="html">
  <div class="">
    <!-- <ul class="balances">
      <li style="list-style-type: none" class="col-md-4" v-for="balance in balances">{{balance.amount}} </li>
    </ul> -->
    <table class="table table-bordered">
      <cities
        :cupertino="cupertino" @cupertinoToggled="cupertino = $event"
        :norrkoping="norrkoping" @norrkopingToggled="norrkoping = $event"
        :frankfurt="frankfurt" @frankfurtToggled="frankfurt = $event"
        >
      </cities>
      <tr>
        <td class="field-label col-md-2 active">
          <label>Telefon</label>
        </td>
        <td class="col-md-2">
          {{ balances[0] && phone && cupertino ? balances[0].amount : "Loading..." }}
        </td>
        <td class="col-md-2">
          {{ balances[1] ? balances[1].amount : "Loading..." }}
        </td>
        <td class="col-md-2">
          {{ balances[2] ? balances[2].amount : "Loading..." }}
        </td>
        <td class="col-md-2">
          {{ balances[0] && balances[1] && balances[2] ? balances[0].amount + balances[1].amount + balances[2].amount : "Loading..."}}
        </td>
      </tr>
      <tr>
        <td class="field-label col-md-2 active">
          <label>Platta</label>
        </td>
        <td class="col-md-2">
          {{ balances[3] ? balances[3].amount : "Loading..." }}
        </td>
        <td class="col-md-2">
          {{ balances[4] ? balances[4].amount : "Loading..." }}
        </td>
        <td class="col-md-2">
          {{ balances[5] ? balances[5].amount : "Loading..." }}
        </td>
        <td class="col-md-2">
          {{ balances[3] && balances[4] && balances[5] ? balances[3].amount + balances[4].amount + balances[5].amount : "Loading..."}}
        </td>
      </tr>
      <tr>
        <td class="field-label col-md-2 active">
          <label>Päronklocka</label>
        </td>
        <td class="col-md-2">
          {{ balances[6] ? balances[6].amount : "Loading..." }}
        </td>
        <td class="col-md-2">
          {{ balances[7] ? balances[7].amount : "Loading..." }}
        </td>
        <td class="col-md-2">
          {{ balances[8] ? balances[8].amount : "Loading..." }}
        </td>
        <td class="col-md-2">
          {{ balances[6] && balances[7] && balances[8] ? balances[6].amount + balances[7].amount + balances[8].amount : "Loading..."}}
        </td>
      </tr>
      <tr>
        <td class="field-label col-md-2 active">
          <label>Total</label>
        </td>
        <td class="col-md-2">
          {{ balances[0] && balances[3] && balances[6] ? balances[0].amount + balances[3].amount + balances[6].amount : "Loading..."}}
        </td>
        <td class="col-md-2">
          {{ balances[1] && balances[4] && balances[7] ? balances[1].amount + balances[4].amount + balances[7].amount : "Loading..."}}
        </td>
        <td class="col-md-2">
          {{ balances[2] && balances[5] && balances[8] ? balances[2].amount + balances[5].amount + balances[8].amount : "Loading..."}}
        </td>
        <td class="col-md-2">
          {{ balances[0] && balances[1] && balances[2]
            && balances[3] && balances[4] && balances[5]
            && balances[6] && balances[7] && balances[8]
            ?
            balances[0].amount + balances[1].amount + balances[2].amount +
            balances[3].amount + balances[4].amount + balances[5].amount +
            balances[6].amount + balances[7].amount + balances[8].amount
            : "Loading..."}}
        </td>
      </tr>
    </table>
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
      balances: [],
      balancesLocation: '../balances.json'
    }
  },

  components: {
    'cities': Cities,
    'products': Products
  },

  computed: {
    balance(place, product) {
      return this.balances.filter(balance => balance.product === product && balance.place === place);
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

  methods: {
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
