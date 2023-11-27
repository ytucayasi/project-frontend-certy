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
    return http.post("/estudiantes-usuarios", data);
  }

  update(id, data) {
    return http.put(`/estudiantes-usuarios/${id}`, data);
  }

  delete(id) {
    return http.delete(`/estudiantes-usuarios/${id}`);
  }

  login(data) {
    return http.post("/login", data);
  }
}

export default new UserService();