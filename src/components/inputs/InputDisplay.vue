<template>
  <div class="container">
    <img
      v-for="(imageName, index) in selectedImageNames"
      :key="index"
      :src="getImagePath(imageName)"
      @click="removeImage(index)"
    />
  </div>
</template>

<script>
import { imagesMouvement, imagesAttack } from "@/assets/buttons/button";

export default {
  props: {
    selectedImageNames: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getImagePath(imageName) {
      return (
        imagesMouvement[imageName]?.path || imagesAttack[imageName]?.path || ""
      );
    },
    removeImage(index) {
      console.log(index);
      this.selectedImageNames.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  margin: 2rem;
  gap: 1rem;
  width: 50%;
  border: 1px solid #a39d9c;
}

img {
  max-width: 50px;
  height: 50px;
}
</style>
