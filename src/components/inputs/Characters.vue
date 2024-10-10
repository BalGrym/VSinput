<template>
  <div class="characters-containers">
    <h1>Characters</h1>
    <div class="characters-list">
      <img
        v-for="characterName in characterKeys"
        :key="characterName"
        :src="getImagePath(characterName)"
        :alt="characterName"
      />
    </div>
  </div>
</template>

<script>
import { imagesCharacters } from "@/assets/characters/characters";

export default {
  data() {
    return {
      imagesCharacters,
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
}
</style>
