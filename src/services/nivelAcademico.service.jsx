import http from "../common/http-common.jsx";

class NivelAcademicoService {
  getAll(id) {
    const endpoint = id ? `/niveles-academicos/${id}` : "/niveles-academicos";
    return http.get(endpoint);
  }

  create(data) {
    return http.post("/niveles-academicos", data);
  }

  update(id, data) {
    return http.put(`/niveles-academicos/${id}`, data);
  }

  delete(id) {
    return http.delete(`/niveles-academicos/${id}`);
  }
}

export default new NivelAcademicoService();