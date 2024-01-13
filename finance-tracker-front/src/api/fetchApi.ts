import axios from "axios";
import config from "./config";

class Api {
  public async getCategories() {
    const response = await axios.get(config.apiUrl + "/v0/Categories/List", {
      headers: { ApiKey: "key "+ config.apiKey },
    });

    return response.data;
  }
}

export const api = new Api();
