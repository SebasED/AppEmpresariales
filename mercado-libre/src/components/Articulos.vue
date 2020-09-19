<template>
  <div>
    <div class="columns is-desktop is-mobile is-tablet is-multiline is-centered">
      <div
        class="column is-12-mobile is-4-desktop is-4-tablet"
        v-for="producto of productos"
        v-bind:key="producto.id"
      >
        <div class="card">
          <div class="card-header">
            <figure class="image is-fullwidth">
              <img v-bind:src="producto.thumbnail" />
            </figure>
          </div>
          <div class="card-content">
            <h3 class="title is-size-4">$ {{parseInt(producto.price)}}</h3>
            <h6 class="title is-size-4">{{producto.title}}</h6>
            <button class="button is-success is-rounded is-medium is-centered" @click="moverse">Ver</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import consulta from "./Consulta";

export default {
  name: "Articulos",
  data() {
    return {};
  },
  components: {
    consulta,
  },
  props: ["productos"],
  methods: {
      moverse(){
          console.log();
      }
  }
};
</script>

<style>
</style>