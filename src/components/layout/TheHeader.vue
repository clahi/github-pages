<template>
  <div class="head">
    <nav class="navbar navbar-default navbar-static-top navbar-custom navbar-expand-lg navbar-light fixed-top">
      <router-link class="navbar-brand" to="/rentals">Find a Rental</router-link>
      <button
        class="navbar-toggler hidden-sm-up"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/rentals"
              style="color: white">Rental Properties
              <span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <router-link class="nav-link" to="/requests"
              style="color: white">Rental Requests</router-link
            >
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <router-link class="nav-link" to="/register"
              style="color: white">Register a Rental</router-link
            >
          </li>
          <li class="nav-item"  v-else>
            <router-link class="nav-link" style="color: white" to="/auth">Login</router-link>
          </li>

          <li v-if="isLoggedIn" class="nav-item" style="color: white;">
            <base-button @click="logout">Logout</base-button>
          </li>
          
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    computed: {
        isLoggedIn() {
            return this.$store.getters.isAuthenticated
        },

    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
            this.$router.replace('rentals')
        }
    }
}
</script>

<style scoped>
.navbar-custom {
  background-color: #3d008d;
}
.navbar-custom .navbar-brand,
.navbar-custom .navbar-text {
    color: white;
}
.head {
  margin-bottom: 57px;
}
li {
  color: white;
}
</style>