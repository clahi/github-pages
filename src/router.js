import { createRouter, createWebHistory } from "vue-router";

import RentalList from "./pages/rentals/RentalList";
import RentalDetails from "./pages/rentals/RentalDetails";
import BookRental from "./pages/requests/BookRental";

import RequestList from "./pages/requests/RequestList";
import RentalRegistration from "./pages/rentals/RentalRegistration";
import HomePage from "./pages/home/HomePage";
import NotFound from './pages/NotFound'
import UserAuth from "./pages/auth/UserAuth";

import store from "./store/index";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/rentals", component: RentalList },
    {
      path: "/rentals/:id",
      component: RentalDetails,
      props: true,
      children: [{ path: "contact", component: BookRental }],
    },
    {
      path: "/register",
      component: RentalRegistration,
      meta: { requiresAuth: true },
    },
    { path: "/requests", component: RequestList, meta: { requiresAuth: true } },
    { path: "/auth", component: UserAuth, meta: { requiresUnAuth: true } },
    {path: '/:notFound(.*)', component: NotFound}
  ],
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requiresUnAuth && store.getters.isAuthenticated) {
    next("/rentals");
  } else {
    next();
  }
});

export default router;
