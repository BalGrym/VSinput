<template>
  <div class="container">
    <div class="box-mouvement">
      <img
        v-for="image in imagesMouvement"
        :src="image"
        @click="inputRegister(image)"
      />
    </div>
    <div class="box-attack">
      <img
        v-for="image in imagesAttack"
        :src="image"
        @click="inputRegister(image)"
      />
    </div>
  </div>
</template>

<script>
import { imagesMouvement } from "@/assets/buttons/button.js";
import { imagesAttack } from "@/assets/buttons/button.js";

export default {
  data() {
    return {
      imagesMouvement,
      imagesAttack,
      input: [],
    };
  },
  methods: {
    inputRegister(image) {
      this.$emit("input-selected", image);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  padding: 1rem;
  margin: 2rem;
  gap: 2rem;
  width: 50%;
  border: 1px solid #a39d9c;
}

.box-mouvement {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 3px;
  grid-row-gap: 3px;
  width: 40%;
}

.box-attack {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  width: 60%;
}

.box-attack > img {
  padding: 0.5rem;
}

.box-mouvement img:nth-child(1) {
  grid-area: 2 / 2 / 3 / 3;
}
.box-mouvement img:nth-child(2) {
  grid-area: 2 / 3 / 3 / 4;
}
.box-mouvement img:nth-child(3) {
  grid-area: 2 / 1 / 3 / 2;
}
.box-mouvement img:nth-child(4) {
  grid-area: 1 / 2 / 2 / 3;
}
.box-mouvement img:nth-child(5) {
  grid-area: 1 / 1 / 2 / 2;
}
.box-mouvement img:nth-child(6) {
  grid-area: 1 / 3 / 2 / 4;
}
.box-mouvement img:nth-child(7) {
  grid-area: 3 / 2 / 4 / 3;
}
.box-mouvement img:nth-child(8) {
  grid-area: 3 / 3 / 4 / 4;
}
.box-mouvement img:nth-child(9) {
  grid-area: 3 / 1 / 4 / 2;
}
/* Utliser "filter" pour modifier l'image quand selectionné https://developer.mozilla.org/en-US/docs/Web/CSS/filter */
</style>
