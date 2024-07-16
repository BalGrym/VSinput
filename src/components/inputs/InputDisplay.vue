<template>
  <div class="container">
    <img v-for="image in selectedImages" :src="image" />
  </div>
</template>

<script>
export default {
  props: {
    selectedImages: {
      type: Array,
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
