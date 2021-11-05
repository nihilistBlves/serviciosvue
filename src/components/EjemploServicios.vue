<template>
  <div class="row d-flex justify-content-center mt-3">
      <div class="row d-flex justify-content-center">
            <div class="col-7 d-flex justify-content-center">
                <h1>Ejemplo servicios Api</h1>
            </div>
      </div>
      <div class="row d-flex justify-content-center">
            <div class="col-7 d-flex justify-content-center">
                <h2 style="color:red">{{saludo}}</h2>
            </div>
      </div>
      <div class="row d-flex justify-content-center">
            <div class="col-7 d-flex justify-content-center">
                <h2 style="color:orange">{{resultadoPromesa}}</h2>
            </div>
      </div>
      <div class="row d-flex justify-content-center">
            <div class="col-7 d-flex justify-content-center">
                <h3 v-if="empleado1" style="color:lightseagreen">{{"PROMESA SIN PARAMETRO: " + empleado1.apellido}}</h3>
                <h3 v-else style="color:orange">No hay empleado1</h3>
                <h3 v-if="empleado2" style="color:purple">{{"PROMESA CON PARAMETRO: " + empleado2.apellido}}</h3>
                <h3 v-else style="color:orange">No hay empleado1</h3>
            </div>
      </div>
  </div>
</template>

<script>
import ServiceEjemplo from './../services/ServiceEjemplo.js'
//ESTO ES UNA CLASE JS, DEBEMOS TENER UN OBJETO
//PARA LLAMAR A SUS METODOS
const service = new ServiceEjemplo();

export default {
    name: "EjemploServicios",
    data() {
        return {
            saludo: "",
            resultadoPromesa: "",
            empleado1: {},
            empleado2: {}
        }
    },
    mounted() {
        this.saludo = service.getSaludo("Alejo");
        
        service.getEmpleadoSinParametro.then(result => {
            this.empleado1 = result;
        });

        //SE LLAMA A LAS PROMESAS CON THEN
        service.getPromesa.then(result => {
            //AQUI LOS DATOS OK
            this.resultadoPromesa = result;
        });

        service.getEmpleadoConParametro(7369).then(result => {
            this.empleado2 = result;
        });
    },
    methods: {

    }
}
</script>

<style>

</style>