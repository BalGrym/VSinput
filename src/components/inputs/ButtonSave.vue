<template>
  <button class="buttonSave" @click="saveCombo">Save</button>
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
        .post(`http://localhost:3000/api/combos/${selectedCharacter}`, {
          inputs: this.selectedImages,
        })
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
