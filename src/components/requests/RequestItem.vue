<template>
    <li>
        <p>Customer Name: <span> {{request.firstName}} {{request.lastName}}</span></p>
        <div>
           <p>Customer Email: <a :href="emailLink">{{request.emailAddress}}</a></p>
        </div>
        <p>Customer Bid: <span>{{request.bid}}</span></p>
        <p>Rental Property: <span>{{request.rentalId}}</span></p>
        <p>Property Owner: <span>{{requestOwner[0].ownerName}}</span></p>
        <p>Property Location: <span>{{requestOwner[0].location}}</span></p>
        <p>Owner Email: <span>{{requestOwner[0].emailAddress}}</span></p>
    </li>
</template>

<script>
export default {
    props: ['request'],
    computed: {
        emailLink() {
            return 'mailto:' + this.request.emailAddress
        },
        requestOwner() {
            return this.$store.getters["rentals/properties"].filter(property => property.id === this.request.rentalId)
        }
    }
}
</script>

<style scoped>
span {
  font-weight: bold;
}
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

a {
  color: #3d008d;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: #8d007a;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>