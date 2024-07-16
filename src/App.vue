<template>
  <the-header></the-header>
  <main>
    <div class="input-container">
      <input-form @input-selected="addSelectedImage"></input-form>
      <input-display :selectedImages="selectedImages"></input-display>
    </div>
  </main>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import InputForm from "./components/inputs/InputForm.vue";
import InputDisplay from "./components/inputs/InputDisplay.vue";

export default {
  components: {
    TheHeader,
    InputDisplay,
    InputForm,
  },

  data() {
    return {
      title: "[VS]input",
      selectedImages: [],
    };
  },
  methods: {
    addSelectedImage(image) {
      console.log(this.selectedImages);
      this.selectedImages.push(image);
    },
  },
};
</script>

<style scoped>
.input-container {
  display: flex;
}
</style>
