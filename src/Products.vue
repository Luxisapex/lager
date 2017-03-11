<template lang="html">
  <form class="products">
    <input type="checkbox" :value="phone" id="Phone" @change="togglePhone" checked>
    <label for="Phone"> Phone</label>
    <input type="checkbox" :value="pad" id="Pad" @change="togglePad" checked>
    <label for="Pad"> Pad</label>
    <input type="checkbox" :value="watch" id="Watch" @change="toggleWatch" checked>
    <label for="Watch"> Watch</label>
  </form>
</template>

<script>
export default {
  props: ['phone, pad, watch'],
  data() {
    return {
      phone: true,
      pad: true,
      watch: true
    }
  },
  methods: {
    togglePhone() {
      this.phone = !this.phone;
      this.$emit('phoneToggled', this.phone);
    },
    togglePad() {
      this.pad = !this.pad;
      this.$emit('padToggled', this.pad);
    },
    toggleWatch() {
      this.watch = !this.watch;
      this.$emit('watchToggled', this.watch);
    }
  }
}
</script>

<style lang="css">
</style>
