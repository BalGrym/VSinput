<template>
  <the-header></the-header>
  <main>
    <input-form></input-form>
    <input-display></input-display>
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
    };
  },
};
</script>

<style scoped></style>
