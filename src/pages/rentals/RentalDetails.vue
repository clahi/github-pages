<template>
  
  <div class="card container special  mt-5">
    <div class="row justify-content-center">
        <div class="card-title">
            <h1>Rental Details</h1>
        </div>
      <div class="col-sm-6 col-md-4 py-0">
        <img :src="selectedRental.imageUrl" class="card-img-top" alt="..." />
      </div>
      <div class="col-sm-6 col-md-4 py-0">
          <div class="card-body">
           <p>Owner Name: <span>{{selectedRental.ownerName}}</span></p>
           <p>Location: <span>{{selectedRental.location}}</span></p>
           <p>Email: <span>{{selectedRental.emailAddress}}</span></p>
          <p class="card-text">
            {{ selectedRental.description }}
          </p>
          <p>
            <span
              >Price: <strong>{{ selectedRental.price }}</strong></span
            >
          </p>
          <router-link class="btn btn-primary" :to="BookLink">Contact</router-link>
          
        </div>
      </div>
      <div class="col">
          <router-view></router-view>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedRental: null,
    };
  },
  computed: {
    price() {
      return this.selectedRental.price;
    },
    imageUrl() {
      return this.selectedRental.imageUrl
    },
    BookLink() {
        return this.$route.path + '/contact' 
    }
  },
  created() {
    this.selectedRental = this.$store.getters["rentals/properties"].find(
      (property) => property.id === this.id
    );
    console.log(this.selectedRental)
  },
};
</script>

<style scoped>
.special {
    margin-top: 3rem;
}
span {
    font-weight: bold;
}
#email {
  font-weight: bold;
}
</style>