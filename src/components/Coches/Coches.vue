<template>
  <div class="row d-flex justify-content-center">
      <div class="row m-3 text-center">
        <h1>Api Coches</h1>
      </div>
      <div class="row mt-3 d-flex justify-content-center">
        <div v-for="(coche, index) in coches" :key="index" class="col d-flex justify-content-center text-center m-3">
            <div class="card" style="width: 18rem;">
                <img :src="coche.imagen" class="card-img-top" height="200rem">
                <div class="card-body">
                    <h5 class="card-title">{{coche.marca + " : " + coche.modelo}}</h5>
                    <p class="card-text">{{coche.conductor}}</p>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import Global from '../Global.js'

//AQUI PODEMOS DECLARAR VARIABLES GLOBALES
//PARA TODOS LOS METODOS DEL COMPONENTE
var urlCoches = Global.urlCoches;

export default {
    name: "Coches",
    data() {
        return {
            coches: []
        }
    },
    mounted() {
        this.cargarCoches();
    },
    methods: {
        cargarCoches() {
            var request = "/webresources/coches";
            var url = urlCoches + request;
            axios.get(url).then(res => {
                this.coches = res.data;
            });
        },
    }
}
</script>

<style>

</style>