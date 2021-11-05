import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Coches from './components/Coches/Coches.vue'
import Home from './components/Home.vue'
import EmpleadosDetalle from './components/EmpleadosDetalle/EmpleadosDetalle.vue'
import OficioEmpleados from './components/OficioEmpleados/OficioEmpleados.vue'
import EjemploServicios from './components/EjemploServicios.vue'
import EmpleadosServiciosOficios from './components/EmpleadosServiciosOficios/EmpleadosServiciosOficios.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: "/coches", component: Coches},
  {path: "/empleadosdetalle", component: EmpleadosDetalle},
  {path: "/oficioempleados", component: OficioEmpleados},
  {path: "/ejemploservicios", component: EjemploServicios},
  {path: "/empleadosserviciosoficios", component: EmpleadosServiciosOficios},
  {path: "/", component: Home}
]

const router = new VueRouter({
  routes,
  mode: "history",
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
