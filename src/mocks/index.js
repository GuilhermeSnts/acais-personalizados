import { createServer, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      size: Model,
      flavor: Model,
      customization: Model,
      order: Model
    },

    seeds(server) {
      // sizes
      server.create("size", {
        id: 1,
        name: "pequeno (300ml)",
        prep: 5,
        price: 10
      });
      server.create("size", {
        id: 2,
        name: "médio (500ml)",
        prep: 7,
        price: 13
      });
      server.create("size", {
        id: 3,
        name: "grande (700ml)",
        prep: 10,
        price: 15
      });
      // flavors
      server.create("flavor", {
        id: 1,
        name: "morango",
        prep: 0,
        price: 0
      });
      server.create("flavor", {
        id: 2,
        name: "banana",
        prep: 0,
        price: 0
      });
      server.create("flavor", {
        id: 3,
        name: "kiwi",
        prep: 5,
        price: 0
      });
      // customizations
      server.create("customization", {
        id: 1,
        name: "granola",
        prep: 0,
        price: 0
      });
      server.create("customization", {
        id: 2,
        name: "paçoca",
        prep: 3,
        price: 3
      });
      server.create("customization", {
        id: 3,
        name: "leite ninho",
        prep: 0,
        price: 3
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/sizes", schema => {
        return schema.sizes.all();
      });
      this.get("/customizations", schema => {
        return schema.customizations.all();
      });
      this.get("/flavors", schema => {
        return schema.flavors.all();
      });
    }
  });

  return server;
}
