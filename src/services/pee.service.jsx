import http from "../common/http-common.jsx";

class PEEService {
  getAll() {
    return http.get("/pee-mejorado");
  }
  get(id) {
    return http.get(`/pee-mejorado/${id}`);
  }
  getPrograma(id) {
    return http.get(`/pepe-programa/${id}`);
  }
  getProgramas(id) {
    return http.get(`/pepe-programas/${id}`);
  }
  getModulosPorId(id) {
    return http.get(`/pemf-programas/${id}`);
  }
}

export default new PEEService();