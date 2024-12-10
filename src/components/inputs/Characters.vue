<template>
  <div class="characters-containers">
    <h1>Characters</h1>
    <div class="characters-list">
      <img
        v-for="(characterName, index) in characterKeys"
        :key="characterName"
        :src="getImagePath(characterName)"
        @click="activeCharacter(characterName, index)"
        :class="{ 'active-class': selectedCharacter === index }"
        :alt="characterName"
      />
    </div>
  </div>
</template>

<script>
import { imagesCharacters } from "@/assets/characters/characters";
import { selectedCharacterStore } from "@/stores/characterStore";

export default {
  data() {
    return {
      imagesCharacters,
      selectedCharacter: "",
    };
  },
  computed: {
    characterKeys() {
      return Object.keys(this.imagesCharacters);
    },
  },
  methods: {
    getImagePath(characterName) {
      return this.imagesCharacters[characterName]?.path || "";
    },
    activeCharacter(characterName, index) {
      this.selectedCharacter = index;
      const characterStore = selectedCharacterStore();
      characterStore.setSelectedCharacter(characterName);
      console.log(characterName);
    },
  },
};
</script>

<style scoped>
.characters-containers {
  margin: 32px;
  border: 1px solid #a39d9c;
  padding: 8px;
}

.characters-list {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}
img {
  border-radius: 50%;
  border: 2px solid #a39d9c;
  cursor: pointer;
}

.active-class {
  border: 2px solid #eeff00 !important;
}
</style>
