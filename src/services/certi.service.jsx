import http from "../common/http-common.jsx";

class CertiService {
  getAll(id) {
    const endpoint = id ? `/certificados/${id}` : "/certificados";
    return http.get(endpoint);
  }

  create(data) {
    return http.post("/certificados", data);
  }

  update(id, data) {
    return http.put(`/certificados-documento/${id}`, data);
  }

  delete(id) {
    return http.delete(`/certificados/${id}`);
  }
}

export default new CertiService();