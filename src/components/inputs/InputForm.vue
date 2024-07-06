<template>
  <form>
    <p>Grande boite avec tout les bouttons pour rentrer les inputs</p>
    <img :src="right" />
    <img :src="left" />
    <img :src="up" />
    <img :src="down" />
  </form>
</template>

<script>
import right from "@/assets/bouttons/mouvements/key-r.png";
import left from "@/assets/bouttons/mouvements/key-l.png";
import up from "@/assets/bouttons/mouvements/key-u.png";
import down from "@/assets/bouttons/mouvements/key-d.png";

export default {
  data() {
    return {
      right,
      left,
      up,
      down,
    };
  },
};
</script>

<style scoped>
p {
  max-width: 100%;
  height: 300px;
}
/* Utiliser CSS Grid pour faire le positionnement des inputs */
/* Utliser "filter" pour modifier l'image quand selectionné https://developer.mozilla.org/en-US/docs/Web/CSS/filter */
</style>
