<template lang="html">
  <form class="form-group" onsubmit="alert('Formulär skickat, ändring registreras i databasen')">
    <label>Antal</label>
    <input type="text" class="form-control" onkeypress="return event.charCode >= 48 && event.charCode <= 57" placeholder="Antal produkter som flyttas" required pattern="[0-9]+">
    <label>Produkt</label>
    <input type="text" class="form-control" list="products" placeholder="Välj produkt" required
           pattern="[Tt]elefon|[Pp]latta|[Pp]äronklocka"/>
    <datalist id="products">
      <option>Telefon</option>
      <option>Platta</option>
      <option>Päronklocka</option>
    </datalist>
    <fieldset>
      <label for="f" class="radio-inline"><input type="radio" id="f" name="f/t" required>från</label>
      <label for="t" class="radio-inline"><input type="radio" id="t" name="f/t" required>till</label>
    </fieldset>
    <label>Lager</label>
    <input type="text" class="form-control" list="places" placeholder="Välj lager" required pattern="[Cc]upertino|[Nn]orrköping|[Ff]rankfurt"/>
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
