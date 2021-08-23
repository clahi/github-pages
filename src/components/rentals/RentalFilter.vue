<template>
  <div class="row">
    <base-card class="col-4">
    <form @submit.prevent="search">
      <div class="form-group">
        <label for="location">Search Location</label>
        <select class="form-control" id="location" v-model="location">
          <option value="All">All</option>
          <option value="Bugoloobi">Bugoloobi</option>
          <option value="Bukoto">Bukoto</option>
          <option value="Busega">Busega</option>
          <option value="Kabalagala">Kabalagala</option>
          <option value="Kampala Hill">Kampala Hill</option>
          <option value="Kasanga">Kasanga</option>
          <option value="Katwe">Katwe</option>
          <option value="Kibuli">Kibuli</option>
          <option value="Makerere">Makerere</option>
          <option value="Makerere Kikoni">Makerere Kikoni</option>
          <option value="Makindye">Makindye</option>

        </select>
      </div>
      
      <button type="submit" class="btn btn-primary">Search</button>
    </form>
  </base-card>
  <base-card class="col-4">
    <form @submit.prevent="search">
      <div class="form-group">
        <label for="price">Maximum Price</label>
        <input
          type="number"
          class="form-control"
          id="price"
          v-model="price"
        />
      </div>
      
      <button type="submit" class="btn btn-primary">Search</button>
    </form>
  </base-card>
  </div>
</template>

<script>
export default {
  emits: ["search"],
  data() {
    return {
      location: "All",
      price: 400000
    };
  },
  methods: {
    search() {
      // console.log(this.location)
      // console.log(this.price)
      const location = this.location
      const price  = this.price
      this.$emit("search", {location, price});
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

.flex {
  display: flex;
}

</style>