import { Model, createServer } from "miragejs";
import { BASE_URL } from "../../src/config";
import db from "./db";

createServer({
  models: {
    drink: Model,
  },
  routes() {
    this.urlPrefix = BASE_URL;
    this.namespace = "api";

    this.get("/drinks", (schema) => schema.all("drink"));

    this.get("/drinks/:id", (schema, request) => {
      let id = request.params.id;
      return schema.find("drink", id);
    });
  },
  seeds(server) {
    db.forEach((item) => {
      server.create("drink", item as any);
    });
  },
});
