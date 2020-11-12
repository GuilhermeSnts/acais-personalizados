export default [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/size-and-flavor",
    name: "SizeAndFlavor",
    component: () =>
      import(
        /* webpackChunkName: "size-and-flavor" */ "../views/SizeAndFlavor.vue"
      )
  },
  {
    path: "/customize",
    name: "Customize",
    component: () =>
      import(/* webpackChunkName: "customize" */ "../views/Customize.vue")
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () =>
      import(/* webpackChunkName: "checkout" */ "../views/Checkout.vue")
  }
];
