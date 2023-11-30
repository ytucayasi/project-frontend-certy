import http from "../common/http-common.jsx";

class EstudianteService {
  getAll() {
    return http.get("/estudiantes");
  }

  get(id) {
    return http.get(`/estudiantes/${id}`);
  }

  create(data) {
    return http.post("/estudiantes", data);
  }

  update(id, data) {
    return http.put(`/estudiantes/${id}`, data);
  }

  delete(id) {
    return http.delete(`/estudiantes/${id}`);
  }
}

export default new EstudianteService();