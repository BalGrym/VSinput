<template>
  <button class="buttonSave" @click="saveCombo">Save</button>
</template>

<script>
import axios from "axios";

export default {
  props: {
    selectedImages: {
      type: Array,
    },
  },
  methods: {
    saveCombo() {
      axios
        .post("http://localhost:3000/api/combos", {
          inputs: this.selectedImages,
        })
        .then(() => {
          console.log("Combo Créé");
          this.$emit("reset-selected-images");
          this.$emit("combo-saved");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
