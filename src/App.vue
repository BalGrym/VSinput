<template>
  <the-header></the-header>
  <main>
    <characters></characters>
    <div :class="{ 'hide-class': character.selectedCharacter === null }">
      <div class="input-container">
        <input-form @input-selected="addSelectedImage"></input-form>
        <input-display :selectedImageNames="selectedImages"></input-display>
      </div>
      <input-description @get-description="getDescription"></input-description>
      <button-save
        :selected-images="selectedImages"
        :description="description"
        @combo-saved="refreshCombos"
        @reset-selected-images="resetSelectedImages"
      ></button-save>
    </div>

    <combo-saved ref="refreshGetCombos"></combo-saved>
  </main>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import InputForm from "./components/inputs/InputForm.vue";
import InputDisplay from "./components/inputs/InputDisplay.vue";
import InputDescription from "./components/inputs/InputDescription.vue";
import ButtonSave from "./components/inputs/ButtonSave.vue";
import ComboSaved from "./components/inputs/ComboSaved.vue";
import Characters from "./components/inputs/Characters.vue";
import { selectedCharacterStore } from "@/stores/characterStore";

export default {
  components: {
    TheHeader,
    InputDisplay,
    InputForm,
    ComboSaved,
    ButtonSave,
    Characters,
    InputDescription,
  },

  data() {
    return {
      title: "[VS]input",
      selectedImages: [],
      description: "",
      character: selectedCharacterStore(),
    };
  },
  methods: {
    getDescription(description) {
      this.description = description;
    },
    addSelectedImage(imageName) {
      console.log(this.selectedImages);
      this.selectedImages.push(imageName);
    },
    refreshCombos(selectedCharacter) {
      this.$refs.refreshGetCombos.getCombos(selectedCharacter);
    },
    resetSelectedImages() {
      this.selectedImages = [];
    },
  },
};
</script>

<style scoped>
.input-container {
  display: flex;
  margin: 32px;
  gap: 32px;
}

.buttonSave {
  margin: 32px;
  padding: 16px;
  background-color: #282e41;
  color: white;
  border-radius: 8px;
  cursor: pointer;
}

.hide-class {
  display: none;
}

@media (max-width: 1024px) {
  .input-container {
    display: flex;
    flex-direction: column-reverse;
  }

  .hide-class {
    display: none;
  }
}
</style>
