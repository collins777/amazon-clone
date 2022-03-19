import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-d1541.cloudfunctions.net/api",
  //   baseURL: "http://localhost:5001/clone-d1541/us-central1/api",
});

export default instance;
