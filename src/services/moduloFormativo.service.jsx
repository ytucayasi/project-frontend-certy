import http from "../common/http-common.jsx";

class ModuloFormativoService {
  getAll() {
    return http.get("/modulos_formativo");
  }

  get(id) {
    return http.get(`/modulos_formativo/${id}`);
  }

  create(data) {
    return http.post("/modulos_formativo", data);
  }

  update(id, data) {
    return http.put(`/modulos_formativo/${id}`, data);
  }

  delete(id) {
    return http.delete(`/modulos_formativo/${id}`);
  }
}

export default new ModuloFormativoService();