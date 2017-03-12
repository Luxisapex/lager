<template lang="html">
  <form class="form-group" action="/callingbackend">
    <label>Antal</label>
    <input type="text" class="form-control" onkeypress="return event.charCode >= 48 && event.charCode <= 57" placeholder="Antal produkter som flyttas">
    <label>Produkt</label>
    <input type="text" class="form-control" list="products" placeholder="Välj produkt"/>
    <datalist id="products">
      <option>Telefon</option>
      <option>Platta</option>
      <option>Päronklocka</option>
    </datalist>
    <label class="radio-inline"><input type="radio" name="f/t">från</label>
    <label class="radio-inline"><input type="radio" name="f/t">till</label>
    <br/>
    <label>Lager</label>
    <input type="text" class="form-control" list="places" placeholder="Välj lager"/>
    <datalist id="places">
      <option>Cupertino</option>
      <option>Norrköping</option>
      <option>Frankfurt</option>
    </datalist>
    <input type="submit" value="Skicka">
  </form>
</template>

<script>
export default {
  }
</script>

<style lang="css">
</style>
