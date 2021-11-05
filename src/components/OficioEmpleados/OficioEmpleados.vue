<template>
  <div class="row d-flex justify-content-center mt-3">
        <div class="row d-flex justify-content-center">
            <div class="col d-flex justify-content-center">
                <h1>Oficio Empleados</h1>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col d-flex justify-content-center">
                <form action="post" v-on:submit.prevent="cargarEmpleados">
                    <div class="mb-3">
                        <label class="form-label">Seleccione un oficio</label>
                        <select class="form-select" v-model="oficio">
                            <option v-for="(oficio, index) in oficios" :key="index" :value="oficio">
                                {{oficio}}
                            </option>
                        </select>
                    </div>
                    <button class="btn btn-success">Mostrar empleados</button>
                </form>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-6 d-flex justify-content-center text-center">
              <table v-if="empleados != null" class="table table-striped mt-3">
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
                      <tr v-for="(empleado, index) in empleados" :key="index">
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
import axios from 'axios';
import Global from '../Global';
export default {
    name: "OficioEmpleados",
    data() {
        return {
            oficios: [],
            empleados: null,
            oficio: ""
        }
    },
    mounted() {
        this.cargarOficios();
    },
    methods: {
        cargarOficios() {
            var request = "/api/empleados/oficios";
            var url = Global.urlEmpleados + request;
            axios.get(url).then(response =>{
                this.oficios = response.data;
            });
        },
        cargarEmpleados() {
            var request = "/api/Empleados/EmpleadosOficio/" + this.oficio;
            var url = Global.urlEmpleados + request;
            axios.get(url).then(response =>{
                this.empleados = response.data;
            });
        }

    }
}
</script>

<style>

</style>