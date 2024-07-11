<template>
  <div class="container">
    <div class="box-mouvement">
      <img :src="images.upLeft" @click="inputRegister" name="upLeft" />
      <img :src="images.up" @click="inputRegister" name="up" />
      <img :src="images.upRight" @click="inputRegister" name="upRight" />
      <img :src="images.left" @click="inputRegister" name="left" />
      <img :src="images.nutral" @click="inputRegister" name="nutral" />
      <img :src="images.right" @click="inputRegister" name="right" />
      <img :src="images.downLeft" @click="inputRegister" name="downLeft" />
      <img :src="images.down" @click="inputRegister" name="down" />
      <img :src="images.downRight" @click="inputRegister" name="downRight" />
    </div>
    <div class="box-attack">
      <img :src="images.lp" @click="inputRegister" name="lp" />
      <img :src="images.mp" @click="inputRegister" name="mp" />
      <img :src="images.hp" @click="inputRegister" name="hp" />
      <img :src="images.lk" @click="inputRegister" name="lk" />
      <img :src="images.mk" @click="inputRegister" name="mk" />
      <img :src="images.hk" @click="inputRegister" name="hk" />
    </div>
  </div>
</template>

<script>
import { images } from "@/assets/buttons/button.js";

export default {
  data() {
    return {
      images,
      // state managment pour passer la data input en temps réel ?
      input: [],
    };
  },
  methods: {
    inputRegister(e) {
      let value = e.currentTarget.getAttribute("name");
      this.input.push(value);
      console.log(this.input);
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
/* Utliser "filter" pour modifier l'image quand selectionné https://developer.mozilla.org/en-US/docs/Web/CSS/filter */
</style>
