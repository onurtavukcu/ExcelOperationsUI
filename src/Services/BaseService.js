import axios from "axios";

class Service {
  constructor(token = null) {
    this.authInfo = token;
    let service = axios.create({
      baseURL: "http://localhost:5005",
      responseType: "json",
    });

    service.interceptors.request.use((cfg) => {
      const token = localStorage.getItem("token") ?? null;
      if (!!token) {
        cfg.headers.Authorization = `Bearer ${token}`;
      }
      return cfg;
    });

    this.service = service;
  }

  getService(parameters) {
    return this.service.get(parameters.url).then((response) => response);
  }
}
export default Service;
