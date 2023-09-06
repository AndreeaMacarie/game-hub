import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "831d521c89bd4dfd96e694a332c0df3c",
  },
});
