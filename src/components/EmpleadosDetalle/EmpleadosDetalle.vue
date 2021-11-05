<template>
  <div class="row d-flex justify-content-center">
      <div class="row d-flex justify-content-center m-3">
        <div class="col d-flex justify-content-center">
            <h1>Empleados Detalle</h1>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
          <div class="col-7 d-flex justify-content-center text-center">
              <form action="post" v-on:submit.prevent="mostrarDetalleEmpleado">
                  <div class="mb-3">
                        <label class="form-label">Seleccione un empleado</label>
                        <select class="form-select text-center" v-model="idEmpleado">
                            <option v-for="(emp, index) in empleados" :key="index" :value="emp.idEmpleado">
                                {{emp.idEmpleado + ". " + emp.apellido}}
                            </option>
                        </select>
                  </div>
                  <button class="btn btn-success">Mostrar detalles</button>
              </form>
          </div>
      </div>
      <div class="row d-flex justify-content-center">
          <div class="col-7 d-flex justify-content-center text-center">
              <table v-if="empleado != null" class="table table-striped mt-3">
                  <thead>
                      <tr>
                          <th>ID</th>
                          <th>Apellido</th>
                          <th>Oficio</th>
                          <th>Salario</th>
                          <th>Departamento</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>{{empleado.idEmpleado}}</td>
                          <td>{{empleado.apellido}}</td>
                          <td>{{empleado.oficio}}</td>
                          <td>{{empleado.salario}}</td>
                          <td>{{empleado.departamento}}</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  </div>
</template>

<script>
import Global from '../Global.js'
import axios from 'axios'

export default {
    name: "EmpleadosDetalle",
    data() {
        return {
            empleados: [],
            idEmpleado: 0,
            empleado: null
        }
    },
    mounted() {
        this.cargarEmpleados();
    },
    methods: {
        cargarEmpleados() {
            var request = "/api/empleados";
            var url = Global.urlEmpleados + request;
            axios.get(url).then(response =>{
                this.empleados = response.data;
            });
        },
        mostrarDetalleEmpleado() {
            var request = "/api/empleados/" + this.idEmpleado;
            var url = Global.urlEmpleados + request;
            axios.get(url).then(response => {
                this.empleado = response.data;
            });
        }
    },
}
</script>

<style>

</style>