import { defineStore } from "pinia";

export const selectedCharacterStore = defineStore("character", {
  state: () => ({ selectedCharacter: null }),
  actions: {
    setSelectedCharacter(character) {
      this.selectedCharacter = character;
    },
  },
});
