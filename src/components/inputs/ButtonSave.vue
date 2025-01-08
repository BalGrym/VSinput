<template>
  <button
    class="buttonSave"
    @click="saveCombo"
    :disabled="selectedImages.length < 1"
  >
    Save
  </button>
</template>

<script>
import axios from "axios";
import { selectedCharacterStore } from "@/stores/characterStore";

export default {
  data() {
    return {
      characterName: selectedCharacterStore().selectedCharacter,
    };
  },
  props: {
    selectedImages: {
      type: Array,
    },
  },
  computed: {
    selectedCharacter() {
      return selectedCharacterStore().selectedCharacter;
    },
  },
  methods: {
    saveCombo() {
      const characterStore = selectedCharacterStore();
      const selectedCharacter = characterStore.selectedCharacter;
      console.log(this.selectedCharacter);

      axios
        .post(
          `${import.meta.env.VITE_API_URL}/api/combos/${selectedCharacter}`,
          {
            inputs: this.selectedImages,
          }
        )
        .then(() => {
          console.log(this.selectedImages);
          this.$emit("reset-selected-images");
          this.$emit("combo-saved", selectedCharacter);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
button:disabled {
  cursor: not-allowed;
}
</style>
