<template>
  <the-header></the-header>
  <main>
    <characters></characters>
    <div class="input-container">
      <input-form @input-selected="addSelectedImage"></input-form>
      <input-display :selectedImageNames="selectedImages"></input-display>
    </div>
    <button-save
      :selected-images="selectedImages"
      @combo-saved="refreshCombos"
      @reset-selected-images="resetSelectedImages"
    ></button-save>
    <combo-saved ref="refreshGetCombos"></combo-saved>
  </main>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import InputForm from "./components/inputs/InputForm.vue";
import InputDisplay from "./components/inputs/InputDisplay.vue";
import ButtonSave from "./components/inputs/ButtonSave.vue";
import ComboSaved from "./components/inputs/ComboSaved.vue";
import Characters from "./components/inputs/Characters.vue";

export default {
  components: {
    TheHeader,
    InputDisplay,
    InputForm,
    ComboSaved,
    ButtonSave,
    Characters,
  },

  data() {
    return {
      title: "[VS]input",
      selectedImages: [],
    };
  },
  methods: {
    addSelectedImage(imageName) {
      console.log(this.selectedImages);
      this.selectedImages.push(imageName);
    },
    refreshCombos() {
      this.$refs.refreshGetCombos.getCombos();
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
}

.buttonSave {
  margin: 32px;
  padding: 16px;
  background-color: #282e41;
  color: white;
  border-radius: 8px;
}
</style>
