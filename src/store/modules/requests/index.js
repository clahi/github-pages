export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutations: {
    pushRequest(state, payload) {
      state.requests.push(payload);
    },
    setRequests(state, payload) {
        state.requests = payload
    }
  },
  actions: {
    // firstName: this.firstName,
    //           lastName: this.lastName,
    //           emailAddress: this.emailAddress,
    //           rentalId: this.$route.params.id,
    //           bid: this.bid,
    async addRequest(context, payload) {
      const ownerId = context.rootGetters.userId
      const newRequest = {
        ...payload,
        ownerId: ownerId
      }
      const response = await fetch(
        `https://real-state-project-a228a-default-rtdb.firebaseio.com/requests.json`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newRequest),
        }
      );
      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(
          responseData.message || "Failed to send request"
        );
        throw error;
      }
      context.commit("pushRequest", newRequest);
    },
    async loadRequests(context) {
      // const rentalId = context.rootGetters.rentalId
      const token = context.rootGetters.token
      const response = await fetch(
        `https://real-state-project-a228a-default-rtdb.firebaseio.com/requests.json?auth=` + token
      );
      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(
          responseData.message || "Failed to load request"
        );
        throw error;
      }
      const requests = [];
      for (const key in responseData) {
        const request = {
          id: key,
          firstName: responseData[key].firstName,
          lastName: responseData[key].lastName,
          emailAddress: responseData[key].emailAddress,
          rentalId: responseData[key].rentalId,
          bid: responseData[key].bid,
          ownerId: responseData[key].ownerId
        };
        requests.push(request);
      }
      context.commit("setRequests", requests);
    },
  },
  getters: {
    requests(state, _, _2, rootGetters) {
      // const rentals = rootGetters['rentals/rentalId']
      // const rentalId = []
      // for(let i=0; i < rentals.length; i++) {
      //   console.log(rentals[0])
      //   rentalId.push(rentals[i].id)
      // }
      // console.log(rentals.filter(rental => {return rental.id}))
      // console.log(rentalId)
      // return state.requests.filter(req => req.rentalId === rentalId);
      // console.log(state.requests.some(req => rentalId.includes(req.id)))
      // return state.requests.filter(req => req.id === rentalId.includes(req.id))
      // return state.requests.filter(function(req) {
      //   return rentalId.filter(rental => rental === req.rentalId)
      // })
      const ownerId = rootGetters.userId
      console.log(ownerId)
      // return state.requests.filter(req => req.ownerId === ownerId)
      // return state.requests.filter(function(req) {
      //   console.log(req.ownerId)
      // })
      return state.requests
    },
  },
};
