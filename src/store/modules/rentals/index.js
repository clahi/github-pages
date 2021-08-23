export default {
  namespaced: true,
  state() {
    return {
      rentals: [],
    };
  },
  mutations: {
    addRental(state, payload) {
      state.rentals.push(payload);
    },
    setRentals(state, payload) {
      state.rentals = payload;
    },
  },
  actions: {
    async addRental(context, payload) {
      // const rental = {
      //   ...paylaod
      // };
      const userId = context.rootGetters.userId;
      const email = context.rootGetters.userEmail
      const rental = {
        ownerName: payload.ownerName,
        imageUrl: payload.imageUrl,
        description: payload.description,
        price: payload.price,
        location: payload.location,
        emailAddress: email,
        ownerId: userId
      };

      const token = context.rootGetters.token;

      const response = await fetch(
        `https://real-state-project-a228a-default-rtdb.firebaseio.com/rentals.json?auth=` +
        token,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(rental),
        }
      );
      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(
          responseData.message || "Failed to send request"
        );
        throw error;
      }
      // context.commit("addRental", {
      //   ...rental,
      //   id: userId
      // });
      console.log(userId)
      context.commit("addRental", rental)
    },
    async loadRentals(context) {
      const response = await fetch(
        `https://real-state-project-a228a-default-rtdb.firebaseio.com/rentals.json`
      );
      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(responseData.message || "Failed to fetch Data");
        throw error;
      }
      const rentals = [];
      for (const key in responseData) {
        // console.log(responseData[key]);
        const rental = {
          // id: responseData[key].id,
          id:key,
          ownerName: responseData[key].ownerName,
          imageUrl: responseData[key].imageUrl,
          description: responseData[key].description,
          emailAddress: responseData[key].emailAddress,
          location: responseData[key].location,
          price: responseData[key].price,
        };
        rentals.push(rental);
      }
      context.commit("setRentals", rentals);
    },
  },
  getters: {
    properties(state) {
      return state.rentals;
    },
    rentalId(state) {
      // console.log(state.rentals)
      return state.rentals;
    },
  },
};
