<template>
  <div class="card">
    <img :src="rental.imageUrl" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">
        Owner: <span>{{ rental.ownerName }}</span>
      </h5>
      <p>Email: <span>{{rental.emailAddress}}</span></p>
      <p>
        Location: <span>{{ rental.location }}</span>
      </p>
      <p>
        <span
          >Price: <strong>{{ rental.price }}</strong></span
        >
      </p>
      <p class="card-text">
        Description: <span>{{ rental.description }}</span>
      </p>
      <router-link :to="rentalLink" class="btn btn-primary"
        >View Details</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["rental"],
  computed: {
    rentalLink() {
      return "/rentals/" + this.rental.id;
    },
  },
};
</script>

<style scoped>
div {
  margin: 0.5rem;
  max-height: 100vh;
  max-width: 18rem;
}
span {
  font-weight: bold;
}
</style>