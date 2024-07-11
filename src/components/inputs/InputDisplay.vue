<template>
  <div class="container"></div>
</template>

<script>
import { images } from "@/assets/buttons/button";

export default {
  mounted() {
    console.log(images);
  },
  data() {
    return {
      images,
      inputTestDisplay: ["down", "downRight", "right", "lp"],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  padding: 1rem;
  margin: 2rem;
  gap: 2rem;
  width: 50%;
  border: 1px solid #a39d9c;
}
</style>
