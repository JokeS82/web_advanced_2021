<template>
  <div class="building-item">
    <h2>Imperial Barracks</h2>
    <label>Gold: {{gold}}</label>
    <label>resources needed: {{steel}} steel, {{ammunition}} ammunition</label>
  </div>

</template>

<script>
export default {
  name: "BuildingItems",
  data(){
    return{
      gold: 5000,
      steel: 100,
      ammunition: 100
    }
  }
}
</script>

<style scoped>
.building-item{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>