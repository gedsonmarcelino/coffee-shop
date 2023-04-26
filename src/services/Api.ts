import { BASE_URL } from "../config";

export const Api = {
  get: async (path: string) => {
    return await fetch(BASE_URL + "/api" + path).then((resp) => resp.json());
  },
};
