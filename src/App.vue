<template>
  <the-header></the-header>
  <main>
    <div class="input-container">
      <input-form @input-selected="addSelectedImage"></input-form>
      <input-display :selectedImageNames="selectedImages"></input-display>
    </div>
    <button class="buttonSave">Save</button>
    <combo-saved></combo-saved>
  </main>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import InputForm from "./components/inputs/InputForm.vue";
import InputDisplay from "./components/inputs/InputDisplay.vue";
import ComboSaved from "./components/inputs/ComboSaved.vue";

export default {
  components: {
    TheHeader,
    InputDisplay,
    InputForm,
    ComboSaved,
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
