<template lang="html">
  <td class="field-label col-md-2 active">
    <input type="checkbox" :value="product.checked" :id="product.name" @change="toggleProduct" checked>
    <label> {{product.name}}</label>
  </td>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {

    }
  },
  methods: {
    toggleProduct() {
      this.product.checked = !this.product.checked;
      this.$emit('productToggled', this.product.checked);
    }
  }
}
</script>

<style lang="css">
</style>
