<template>
  <base-card>
    <form @submit.prevent="rentalRegister">
      <div class="form-group">
        <label for="owner-name">Owner Name</label>
        <input
          type="text"
          class="form-control"
          id="owner-name"
          v-model="ownerName"
        />
      </div>
      <div class="form-group">
        <label for="image-url">Image Url</label>
        <input
          type="text"
          class="form-control"
          id="image-url"
          v-model="imageUrl"
        />
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input
          type="number"
          class="form-control"
          id="price"
          v-model="price"
        />
      </div>
      <div class="form-group">
        <label for="location">Location</label>
        <input
          type="text"
          class="form-control"
          id="location"
          v-model="location"
        />
      </div>
      <div class="form-group">
        <label for="description">Example textarea</label>
        <textarea
          class="form-control"
          id="description"
          rows="3"
          v-model="description"
        ></textarea>
      </div>
      <!-- <div class="form-group">
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
      </div> -->
      <button class="btn btn-primary">Submit</button>
    </form>
  </base-card>
</template>

<script>
export default {
    data() {
        return {
            ownerName: '',
            imageUrl: '',
            description: '',
            // emailAddress: '',
            location: '',
            price: null
        }
    },
    methods: {
        rentalRegister() {
            const rental = {
                ownerName: this.ownerName,
                imageUrl: this.imageUrl,
                description: this.description,
                location: this.location,
                price: this.price
            }
            this.$store.dispatch('rentals/addRental', rental)

            this.ownerName= '',
            this.imageUrl= '',
            this.description= '',
            this.price= null,
            this.location= ''

            this.$router.replace('/rentals')
        }
    }
}
</script>