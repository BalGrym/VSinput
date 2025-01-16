<template>
  <div class="container">
    <div class="box-one">
      <div class="box-mouvement">
        <img
          v-for="(image, key) in imagesMouvement"
          :key="key"
          :src="image.path"
          @click="inputRegister(image.name)"
        />
      </div>
      <div class="box-attack">
        <img
          v-for="(image, key) in imagesAttack"
          :key="key"
          :src="image.path"
          @click="inputRegister(image.name)"
        />
      </div>
    </div>
    <div class="box-special">
      <img
        v-for="(image, key) in imagesSpecial"
        :key="key"
        :src="image.path"
        :alt="image.name"
        @click="inputRegister(image.name)"
      />
    </div>
  </div>
</template>

<script>
import {
  imagesMouvement,
  imagesAttack,
  imagesSpecial,
} from "@/assets/buttons/button.js";

export default {
  mounted() {
    console.log(imagesMouvement);
  },
  data() {
    return {
      imagesMouvement,
      imagesAttack,
      imagesSpecial,
      input: [],
    };
  },
  methods: {
    inputRegister(imageName) {
      this.$emit("input-selected", imageName);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 2rem;
  width: fit-content;
  border: 1px solid #a39d9c;
}

.box-one {
  display: flex;
}

.box-mouvement {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 3px;
  grid-row-gap: 3px;
  width: fit-content;
}

.box-attack {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  width: fit-content;
}
.box-special {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  width: fit-content;
}

img {
  max-width: 50px;
  height: 50px;
  cursor: pointer;
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
