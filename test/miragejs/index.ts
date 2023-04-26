import { createServer } from "miragejs";
import { BASE_URL } from "../../src/config";

createServer({
  routes() {
    this.urlPrefix = BASE_URL;
    this.namespace = "api";

    this.get("/movies", () => {
      return {
        movies: [
          { id: 1, name: "Inception", year: 2010 },
          { id: 2, name: "Interstellar", year: 2014 },
          { id: 3, name: "Dunkirk", year: 2017 },
        ],
      };
    });
  },
});
