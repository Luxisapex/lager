<template lang="html">
  <tr class="city-row">
    <td class="field-label col-md-2 active">
      <label>SALDO</label>
    </td>
    <td class="field-label col-md-2 active">
      <input type="checkbox" :value="cupertino" id="Cupertino" @change="toggleCupertino" checked>
      <label for="Cupertino"> Cupertino</label>
    </td>
    <td class="field-label col-md-2 active">
      <input type="checkbox" :value="norrkoping" id="Norrkoping" @change="toggleNorrkoping" checked>
      <label for="Norrkoping"> Norrköping</label>
    </td>
    <td class="field-label col-md-2 active">
      <input type="checkbox" :value="frankfurt" id="Frankfurt" @change="toggleFrankfurt" checked>
      <label for="Frankfurt"> Frankfurt</label>
    </td>
    <td class="field-label col-md-2 active">
      <label>Total</label>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['cupertino, norrkoping, frankfurt'],
  data() {
    return {
      cupertino: true,
      norrkoping: true,
      frankfurt: true
    }
  },
  methods: {
    toggleCupertino() {
      this.cupertino = !this.cupertino;
      this.$emit('cupertinoToggled', this.cupertino);
    },
    toggleNorrkoping() {
      this.norrkoping = !this.norrkoping;
      this.$emit('norrkopingToggled', this.norrkoping);
    },
    toggleFrankfurt() {
      this.frankfurt = !this.frankfurt;
      this.$emit('frankfurtToggled', this.frankfurt);
    }
  }
}
</script>

<style lang="css">
</style>
