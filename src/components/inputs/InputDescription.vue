<template>
  <div class="description-container">
    <label for="description">Description (optionnel) </label>
    <textarea
      name="description"
      id="description"
      placeholder="Tu peux ajouter des précisions au combo si tu le souhaite."
      v-model="description"
      @input="emitDescription"
    ></textarea>
    <p v-if="description.length > 500" class="description-error">
      La description est trop longue, elle ne doit pas dépasser 500 caractères.
      Actuellement elle contient : {{ description.length }} caractères
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: "",
    };
  },
  methods: {
    emitDescription() {
      this.$emit("get-description", this.description);
    },
  },
};
</script>

<style scoped>
.description-container {
  display: flex;
  flex-direction: column;
  margin: 32px;
  border: 1px solid #a39d9c;
  padding: 8px;
}
.description-container > label {
  font-size: 2em;
  font-weight: bold;
}

.description-container > textarea {
  resize: none;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #6774a1;
  color: white;
}
.description-container > textarea::placeholder {
  color: rgb(185, 185, 185);
}

.description-error {
  margin-top: 8px;
  padding: 8px;
  background-color: rgb(163, 2, 2);
  border-radius: 4px;
  border: 2px solid #ccc;
}
</style>
