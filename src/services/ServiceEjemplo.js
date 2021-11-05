import axios from "axios";
import Global from './../components/Global'

export default class ServiceEjemplo {
    getSaludo(nombre) {
        return "Welcome to my service, " + nombre;
    }

    getPromesa = new Promise(function(resolve, reject) {
        var num = 0;
        if (num == 0) {
            //DEBEMOS DEVOLVER ALGO EN RESOLVE O EN REJECT
            resolve("OK!");
        } else {
            reject("NOT OKAY!");
        }
    });

    getPromesaSimple = new Promise(function(resolve) {
        resolve("OK!");
    });

    getEmpleadoSinParametro = new Promise(function(resolve) { 
        var request = "/api/empleados/7369";
        var url = Global.urlEmpleados + request;
        var empleado = {
            apellido: "No soy nadie..."
        };
        axios.get(url).then(response => {
            empleado = response.data;
            resolve(empleado);
        });
    });

    getEmpleadoConParametro(id) {
        return new Promise(function(resolve) { 
            var request = "/api/empleados/" + id;
            var url = Global.urlEmpleados + request;
            var empleado = {
                apellido: "No soy nadie..."
            };
            axios.get(url).then(response => {
                empleado = response.data;
                resolve(empleado);
            });
        });
    }
}