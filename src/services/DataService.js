import http from "../http-common";

class DataService {
  getAll() {
    return http.get("/ContentAreas");
  }

  get(id) {
    return http.get(`/ContentAreas/${id}`);
  }

  create(data) {
    return http.post("/ContentAreas", data);
  }

  update(id, data) {
    return http.put(`/ContentAreas/${id}`, data);
  }

  delete(id) {
    return http.delete(`/ContentAreas/${id}`);
  }

  deleteAll() {
    return http.delete(`/ContentAreas`);
  }

  findAllEnabled(enabled) {
    return http.get(`/ContentAreas/${enabled}`);
  }
}

export default new DataService();