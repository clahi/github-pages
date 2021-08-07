<template>
  <base-card>
    <header>
      <h2>Requests Recived</h2>
    </header>
    <ul>
      <request-item
        v-for="request in requests"
        :key="request"
        :request="request"
      ></request-item>
    </ul>
  </base-card>
</template>

<script>
import RequestItem from "../../components/requests/RequestItem.vue";
export default {
  components: {
    RequestItem,
  },

  computed: {
    requests() {
      return this.$store.getters["requests/requests"];
    },
  },
  methods: {
    // async loadRequests() {
    //   await this.$store.dispatch('requests/loadRequests')
    // }
  },
  async created() {
    // this.loadRequests()
    await this.$store.dispatch('requests/loadRequests')
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  width: 25rem;
  max-width: 30rem;
  text-align: start;
}

h3 {
  text-align: center;
}
</style>