<template>
  <div class="combos-container">
    <div v-if="loadingMessage" class="loading-message">
      <p>{{ loadingMessage }}</p>
    </div>
    <div v-if="combosSaved.length < 1" class="empty-combo-message">
      <p>
        Ce personnage ne dispose pas de combo. Soyez le premier à en partager un
        !
      </p>
    </div>
    <div class="combo" v-for="combo in combosSaved" :key="combo._id">
      <div>
        <div class="combo-list">
          <img
            v-for="input in combo.inputs"
            :src="getImagePath(input)"
            alt="input"
          />
        </div>
        <p class="description" v-if="combo.description">
          {{ combo.description }}
        </p>
      </div>
      <button
        class="btn-suppr"
        @click="deleteCombo(combo._id, this.characterName)"
      >
        Supprimer
      </button>
    </div>
  </div>
</template>

<script>
import { imagesMouvement, imagesAttack } from "@/assets/buttons/button";
import { selectedCharacterStore } from "@/stores/characterStore";
import axios from "axios";

export default {
  data() {
    return {
      characterName: "",
      combosSaved: {},
      loadingMessage: null,
    };
  },
  computed: {
    selectedCharacter() {
      return selectedCharacterStore().selectedCharacter;
    },
  },
  watch: {
    selectedCharacter(newCharacter) {
      this.characterName = newCharacter;
      this.getCombos(newCharacter);
    },
  },
  methods: {
    getImagePath(input) {
      return imagesMouvement[input]?.path || imagesAttack[input]?.path || "";
    },
    deleteCombo(id) {
      axios
        .delete(
          `${import.meta.env.VITE_API_URL}/api/combos/${
            this.characterName
          }/${id}`
        )
        .then(() => {
          this.getCombos(this.characterName);
          console.log(`Combo avec l'id ${id} a été supprimé.`);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCombos(newCharacter) {
      this.loadingMessage = null;
      const timeout = setTimeout(() => {
        this.loadingMessage =
          "Le serveur peut être en veille, cela peut prendre une petite minute, veuillez patienter... ";
      }, 2000);
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/combos/${newCharacter}`)
        .then((comboData) => {
          clearTimeout(timeout);
          this.loadingMessage = null;
          this.combosSaved = comboData.data.combos;
        })
        .catch((error) => {
          clearTimeout(timeout);
          this.loadingMessage = null;
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

.loading-message > p {
  background-color: rgb(241, 80, 80);
  border: 1px solid #a39d9c;
  padding: 10px;
  border-radius: 10px;
}
.empty-combo-message > p {
  border: 1px solid #a39d9c;
  padding: 10px;
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
  flex-wrap: wrap;
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

.description {
  padding: 8px;
  background-color: #414a68;
  margin-top: 8px;
}
</style>
