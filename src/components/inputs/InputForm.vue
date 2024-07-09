<template>
  <div class="container">
    <div class="box-mouvement">
      <img :src="upLeft" @click="inputRegister" name="upLeft" />
      <img :src="up" @click="inputRegister" name="up" />
      <img :src="upRight" @click="inputRegister" name="upRight" />
      <img :src="left" @click="inputRegister" name="left" />
      <img :src="nutral" @click="inputRegister" name="nutral" />
      <img :src="right" @click="inputRegister" name="right" />
      <img :src="downLeft" @click="inputRegister" name="downLeft" />
      <img :src="down" @click="inputRegister" name="down" />
      <img :src="downRight" @click="inputRegister" name="downRight" />
    </div>
    <div class="box-attack">
      <img :src="lp" @click="inputRegister" name="lp" />
      <img :src="mp" @click="inputRegister" name="mp" />
      <img :src="hp" @click="inputRegister" name="hp" />
      <img :src="lk" @click="inputRegister" name="lk" />
      <img :src="mk" @click="inputRegister" name="mk" />
      <img :src="hk" @click="inputRegister" name="hk" />
    </div>
  </div>
</template>

<script>
import right from "@/assets/bouttons/mouvements/key-r.png";
import left from "@/assets/bouttons/mouvements/key-l.png";
import up from "@/assets/bouttons/mouvements/key-u.png";
import down from "@/assets/bouttons/mouvements/key-d.png";
import downLeft from "@/assets/bouttons/mouvements/key-dl.png";
import downRight from "@/assets/bouttons/mouvements/key-dr.png";
import upLeft from "@/assets/bouttons/mouvements/key-ul.png";
import upRight from "@/assets/bouttons/mouvements/key-ur.png";
import nutral from "@/assets/bouttons/mouvements/key-nutral.png";
//naming follow the abbreviation from Street Fighter franchise. Meaning => P for Punch /// K for Kick /// L , M , H respectively for Light , Medium , Heavy
import lp from "@/assets/bouttons/attacks/icon_punch_l.png";
import mp from "@/assets/bouttons/attacks/icon_punch_m.png";
import hp from "@/assets/bouttons/attacks/icon_punch_h.png";
import lk from "@/assets/bouttons/attacks/icon_kick_l.png";
import mk from "@/assets/bouttons/attacks/icon_kick_m.png";
import hk from "@/assets/bouttons/attacks/icon_kick_h.png";

export default {
  data() {
    return {
      nutral,
      right,
      left,
      up,
      upLeft,
      upRight,
      down,
      downRight,
      downLeft,
      lp,
      mp,
      hp,
      lk,
      mk,
      hk,
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
