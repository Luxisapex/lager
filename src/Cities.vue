<template lang="html">
  <form class="cities">
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
