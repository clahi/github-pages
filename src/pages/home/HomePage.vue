<template>
  <div>
    <section>
        <img src="../../assets/cover.jpg" alt="Responisve image" class="img-fluid cover">
    </section>
    <section class="container sec">
      <div class="row justify-content-between">
        <div class="col-sm-12 col-lg-3 each">
          <div class="row justify-content-center tex-align-center">
            <img
              class="col col-lg-12 img-fluid"
              src="../../assets/buy.png"
              alt="Responsive image"
            />
            <div class="col col-lg-12 text-center">
              <h2>Buy a home</h2>
              <p>
                Find your place with an immersive photo experience and the most
                listings,including things you won't find anywhere else.
              </p>
             <button type="button" class="btn btn-outline-primary">
                <router-link to="/rentals">Search houses</router-link>
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-3 each">
          <div class="row justify-content-center tex-align-center">
            <img
              class="col col-lg-12 img-fluid"
              src="../../assets/residential.png"
              alt="Responsive image"
            />
            <div class="col col-lg-12 text-center">
              <h2>Sell a home</h2>
              <p>
                Whether you get a cash offer through Madina Offers or choose to
                sell traditionally, we can help you navigate a successful sale.
              </p>
              <button type="button" class="btn btn-outline-primary">
                <router-link to="/register">Register your house</router-link>
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-3 each">
          <div class="row justify-content-center">
            <img
              class="col col-lg-12 img-fluid"
              src="../../assets/house.png"
              alt="Responsive image"
            />
            <div class="col col-lg-12 text-center">
              <h2>Rent a home</h2>
              <p>
                  We're creating a aseamless online experience - from shopping on the largest rental network, to applying, to paying rent.
              </p>
              <button type="button" class="btn btn-outline-primary">
                <router-link to="/rentals">Find rentals</router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cover {
    width: 100%;
    height: 100%;
    /* background-image: url('../../assets/cover.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; */
}
img {
  width: 200px;
  text-align: center;
}
.each {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
a {
    text-decoration: none;
}
a:hover {
    color: white;
}
</style>