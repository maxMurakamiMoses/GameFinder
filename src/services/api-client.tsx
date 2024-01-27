import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "44a55ea0bfa841118b2694c8a43441f1",
  },
});