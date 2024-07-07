<template>
  <div class="container">
    <div class="box-mouvement">
      <img :src="upLeft" />
      <img :src="up" />
      <img :src="upRight" />
      <img :src="left" />
      <img :src="nutral" />
      <img :src="right" />
      <img :src="downLeft" />
      <img :src="down" />
      <img :src="downRight" />
    </div>
    <div class="box-attack">
      <img :src="lp" />
      <img :src="mp" />
      <img :src="hp" />
      <img :src="lk" />
      <img :src="mk" />
      <img :src="hk" />
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
    };
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
/* Utliser "filter" pour modifier l'image quand selectionné https://developer.mozilla.org/en-US/docs/Web/CSS/filter */
</style>
