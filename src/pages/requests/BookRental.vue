<template>
  <base-card>
    <form @submit.prevent="customerRequest">
      <div class="form-group">
        <label for="first-name">First Name</label>
        <input
          type="text"
          class="form-control"
          id="first-name"
          v-model="firstName"
        />
      </div>
      <div class="form-group">
        <label for="last-name">Last Name</label>
        <input
          type="text"
          class="form-control"
          id="last-name"
          v-model="lastName"
        />
      </div>
      <div class="form-group">
        <label for="bid">Your bid</label>
        <input
          type="number"
          class="form-control"
          id="bid"
          v-model="bid"
        />
      </div>
      <div class="form-group">
        <label for="email">Your Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          v-model="emailAddress"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <button class="btn btn-primary">Submit</button>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      emailAddress: "",
      bid: null
    };
  },
  methods: {
      
      customerRequest() {
          const request = {
              firstName: this.firstName,
              lastName: this.lastName,
              emailAddress: this.emailAddress,
              rentalId: this.$route.params.id,
              bid: this.bid,
          }
          this.$store.dispatch('requests/addRequest', request)
          this.firstName = ''
          this.lastName = ''
          this.emailAddress = ''
          this.bid = null
          console.log(this.$route.params.emailAddress)

          this.$router.replace('/rentals')
      }
  }
};
</script>