<template>
  <div>
    <section>
      <rental-filter @search="search"></rental-filter>
    </section>
    <section>
      <div class="container">
        <div class="row justify-content-around">
          <rental-item
            class="col-sm-5 col-md-4"
            v-for="rental in filteredRentals"
            :key="rental.id"
            :rental="rental"
          ></rental-item>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import RentalItem from "../../components/rentals/rentalItem.vue";
import RentalFilter from "../../components/rentals/RentalFilter.vue";
export default {
  components: {
    RentalItem,
    RentalFilter,
  },
  data() {
    return {
      // activeFilters: {
      //   kampala: true,
      //   mbarara: true,
      //   jinja: true,
      // },
      location: 'All'
    };
  },
  computed: {
    // rentals() {
    //   return this.$store.getters["rentals/properties"];
    // },
    filteredRentals() {
      const rentals = this.$store.getters["rentals/properties"];
      return rentals.filter(rental => {
        if(this.location === 'All') {
          return true
        }
        if(this.location === 'Kampala' && rental.location === 'Kampala') {
          return true
        }
        if(this.location === 'Mbarara' && rental.location === 'Mbarara') {
          return true
        }
        if(this.location === 'Jinja' && rental.location === 'Jinja') {
          return true
        }
        return false
      })
    },
  },
  methods: {
    async loadRentals() {
      await this.$store.dispatch("rentals/loadRentals");
    },
    search(location) {
      this.location = location
    }
  },
  created() {
    this.loadRentals();
  },
};
</script>

<style scoped>
div {
  margin-top: 0.5rem;
}
</style>