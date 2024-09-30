<template>
  <div class="combos-container">
    <div class="combo" v-for="combo in combos" :key="combo.id">
      {{ combo.inputs }}
    </div>
  </div>
</template>

<script>
import combosData from "../../assets/data/combos.json";

export default {
  data() {
    return {
      combos: combosData,
    };
  },
};
</script>

<style>
.combos-container {
  display: grid;
  margin: 32px;
  gap: 10px;
}
</style>
