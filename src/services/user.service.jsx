import http from "../common/http-common.jsx";

class UserService {
  /* getAll() {
    return http.get("/usuarios");
  } */
  
  getAll() {
    return http.get("/estudiantes-usuarios");
  }

  /* get(id) {
    return http.get(`/usuarios/${id}`);
  } */

  get(id) {
    return http.get(`/estudiantes-usuarios/${id}`);
  }

  create(data) {
    return http.post("/usuarios", data);
  }

  update(id, data) {
    return http.put(`/usuarios/${id}`, data);
  }

  delete(id) {
    return http.delete(`/usuarios/${id}`);
  }
}

export default new UserService();