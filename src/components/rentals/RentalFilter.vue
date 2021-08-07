<template>
  <base-card>
    <form @submit.prevent="search" justify-content-around>
      <div class="form-group">
        <label for="location">Search Location</label>
        <select class="form-control" id="location" v-model="location">
          <option value="All">All</option>
          <option value="Kampala">Kampala</option>
          <option value="Jinja">Jinja</option>
          <option value="Mbarara">Mbarara</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Search</button>
    </form>
  </base-card>
</template>

<script>
export default {
  emits: ["search"],
  data() {
    return {
      location: "All",
    };
  },
  methods: {
    search() {
      this.$emit("search", this.location);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>