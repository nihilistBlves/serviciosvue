import axios from 'axios';
import Global from './../components/Global'

export default class ServicioEmpleados {

    getOficios () {
        return new Promise(function(resolve) {
            var request = "/api/empleados/oficios";
            var url = Global.urlEmpleados + request;
            axios.get(url).then(response => {
                resolve(response.data);
            })
        });
    }

    getEmpleadosPorOficio (oficio) {
        return new Promise(function(resolve) {
            var request = "/api/empleados/empleadosoficio/" + oficio;
            var url = Global.urlEmpleados + request;
            axios.get(url).then(response => {
                resolve(response.data);
            })
        });
    }
}