<template lang="html">
  <form class="selectors">

      <input type="checkbox" :value="phone" id="Phone" @change="togglePhone" checked>
      <label for="Phone"> Phone</label>
      <input type="checkbox" :value="pad" id="Pad" @change="togglePad" checked>
      <label for="Pad"> Pad</label>
      <input type="checkbox" :value="watch" id="Watch" @change="toggleWatch" checked>
      <label for="Watch"> Watch</label>

      <input type="checkbox" :value="cupertino" id="Cupertino" @change="toggleCupertino" checked>
      <label for="Cupertino"> Cupertino</label>
      <input type="checkbox" :value="norrkoping" id="Norrkoping" @change="toggleNorrkoping" checked>
      <label for="Norrkoping"> Norrköping</label>
      <input type="checkbox" :value="frankfurt" id="Frankfurt" @change="toggleFrankfurt" checked>
      <label for="Frankfurt"> Frankfurt</label>

  </form>
</template>

<script>
export default {
  props: ['phone', 'pad', 'watch', 'cupertino', 'norrkoping', 'frankfurt'],
  data() {
    return {
      checkedPhone: true,
      checkedPad: true,
      checkedWatch: true,
      checkedCupertino: true,
      checkedNorrkoping: true,
      checkedFrankfurt: true
    }
  },
  methods: {
    togglePhone() {
      this.checkedPhone = !this.checkedPhone;
      this.$emit('phoneToggled', this.checkedPhone);
    },
    togglePad() {
      this.checkedPad = !this.checkedPad;
      this.$emit('padToggled', this.checkedPad);
    },
    toggleWatch() {
      this.checkedWatch = !this.checkedWatch;
      this.$emit('watchToggled', this.checkedWatch);
    },
    toggleCupertino() {
      this.checkedCupertino = !this.checkedCupertino;
      this.$emit('cupertinoToggled', this.checkedCupertino);
    },
    toggleNorrkoping() {
      this.checkedNorrkoping = !this.checkedNorrkoping;
      this.$emit('norrkopingToggled', this.checkedNorrkoping);
    },
    toggleFrankfurt() {
      this.checkedFrankfurt = !this.checkedFrankfurt;
      this.$emit('frankfurtToggled', this.checkedFrankfurt);
    }
  }
}
</script>

<style lang="css">
</style>
