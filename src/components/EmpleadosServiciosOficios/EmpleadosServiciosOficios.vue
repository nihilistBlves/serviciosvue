<template>
  <div class="row d-flex justify-content-center mt-3">
      <div class="row d-flex justify-content-center">
            <div class="col-7 d-flex justify-content-center">
                <h1>Empleados Servicios Oficios</h1>
            </div>
      </div>
      <div class="row d-flex justify-content-center">
            <div class="col-7 d-flex justify-content-center">
                <form v-on:submit.prevent="mostrarEmpleados">
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
            <div class="col-7 d-flex justify-content-center">
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
import ServicioEmpleados from './../../services/ServicioEmpleados.js'

const service = new ServicioEmpleados();

export default {
    name: "EmpleadosServiciosOficios",
    data() {
        return {
            oficios: [],
            oficio: "",
            empleados: null,
        }
    },
    mounted() {
        service.getOficios().then(result => {
            this.oficios = result;
        })
    },
    methods: {
        mostrarEmpleados() {
            service.getEmpleadosPorOficio(this.oficio).then(result => {
                this.empleados = result;
            })
        }
    }
}
</script>

<style>

</style>