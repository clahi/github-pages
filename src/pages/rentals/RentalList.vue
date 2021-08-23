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
      location: "All",
      price: 400000,
      locations: [
        "Bugoloobi",
        "Bukoto",
        "Busega",
        "Kabalagala",
        "Kampala Hill",
        "Kasanga",
        "Katwe",
        "Kibuli",
        "Makerere",
        "Makerere Kikoni",
        "Makindye",
      ],
    };
  },
  computed: {
    // rentals() {
    //   return this.$store.getters["rentals/properties"];
    // },
    filteredRentals() {
      const rentals = this.$store.getters["rentals/properties"];
      return rentals.filter((rental) => {
        if (this.location === "All" && rental.price <= this.price) {
          return true;
        }
        for (let i = 0; i < this.locations.length; i++) {
          if(this.location === this.locations[i] && rental.location === this.locations[i] && rental.price <= this.price) {
            return true
          }
        }
        return false;
      });
    },
  },
  methods: {
    async loadRentals() {
      await this.$store.dispatch("rentals/loadRentals");
    },
    search(value) {
      console.log(value.price)
      this.location = value.location;
      this.price = value.price
    },
  },
  created() {
    this.loadRentals();
  },
  updated() {
    this.loadRentals();
  }
};
</script>

<style scoped>
div {
  margin-top: 0.5rem;
}
</style>