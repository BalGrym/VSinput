<template>
  <div class="combos-container">
    <div class="combo" v-for="combo in combos" :key="combo.id">
      <img
        v-for="input in combo.inputs"
        :src="getImagePath(input)"
        alt="input"
      />
    </div>
  </div>
</template>

<script>
import { imagesMouvement, imagesAttack } from "@/assets/buttons/button";
import combosData from "../../assets/data/combos.json";

export default {
  data() {
    return {
      combos: combosData,
    };
  },
  methods: {
    getImagePath(input) {
      return imagesMouvement[input]?.path || imagesAttack[input]?.path || "";
    },
  },
};
</script>

<style scoped>
.combos-container {
  display: grid;
  margin: 32px;
  gap: 10px;
}
.combo {
  display: flex;
  border: 1px solid #a39d9c;
  padding: 8px;
}
img {
  max-width: 50px;
  height: 50px;
}
</style>
