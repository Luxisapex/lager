<template lang="html">
  <td class="field-label col-md-2 active">
    <input type="checkbox" :value="city.checked" :id="city.name" @change="toggleCity" checked>
    <label> {{city.name}}</label>
  </td>
</template>

<script>
export default {
  props: ['city'],
  data() {
    return {

    }
  },
  methods: {
    toggleCity() {
      this.city.checked = !this.city.checked;
      this.$emit('cityToggled', this.city.checked);
    }
  }
}
</script>

<style lang="css">
</style>
