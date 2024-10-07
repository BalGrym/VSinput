<template>
  <div class="combos-container">
    <div class="combo" v-for="combo in combosSaved" :key="combo._id">
      <div class="combo-list">
        <img
          v-for="input in combo.inputs"
          :src="getImagePath(input)"
          alt="input"
        />
      </div>
      <button class="btn-suppr" @click="deleteCombo(combo._id)">
        Supprimer
      </button>
    </div>
  </div>
</template>

<script>
import { imagesMouvement, imagesAttack } from "@/assets/buttons/button";
import axios from "axios";

export default {
  data() {
    return {
      combosSaved: {},
    };
  },
  created() {
    this.getCombos();
  },
  methods: {
    getImagePath(input) {
      return imagesMouvement[input]?.path || imagesAttack[input]?.path || "";
    },
    deleteCombo(id) {
      axios
        .delete(`http://localhost:3000/api/combos/${id}`)
        .then(() => {
          this.getCombos();
          console.log(`Combo avec l'id ${id} a été supprimé.`);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCombos() {
      axios
        .get("http://localhost:3000/api/combos")
        .then((comboData) => {
          this.combosSaved = comboData.data;
        })
        .catch((error) => {
          console.log(error);
        });
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
  flex-direction: column;
  gap: 10px;
  border: 1px solid #a39d9c;
  padding: 8px;
}

.combo-list {
  display: flex;
}

img {
  max-width: 50px;
  height: 50px;
}

.btn-suppr {
  background-color: rgb(250, 51, 51);
  color: white;
  border-radius: 4px;
  border: none;
  width: 100px;
  padding: 8px;
}
</style>
