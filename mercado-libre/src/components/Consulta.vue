<template>
  <div>
    <div class="hero is-white is-gradient is-bold">
      <div class="hero-body">
        <h1 class="title">
          <span class="has-text-success">Super</span>
          <span class="subtitle">tienda</span>
        </h1>
        <input class="input is-small is-rounded is-primary" v-model="texto" v-on:keyup.enter="consultar"/> 
        <button id="bot" class="button is-success is-rounded" @click="consultar">buscar</button>
      </div>
    </div>
    <div class="container">
        <articulos v-bind:productos="productos" />

        <nav class="pagination" role="navegation" aria-label="pagination">
            <a class="pagination-previous" v-on:click="cambiarPagina(page - 1)">Anterior</a>
            
            <ul class="pagination-list">
                <li>
                    <a class="pagination-link is-current">{{page}}</a>
                </li>
            </ul>

            <a class="pagination-next" v-on:click="cambiarPagina(page + 1)">Siguiente</a>
        </nav>

    </div>
    </div>   
  </div>
</template>

<script>
import articulos from "./Articulos.vue";
import axios from "axios";

export default {
  name: "Consulta",
  data() {
    return {
      texto: "",
      productos: [],
      page: 1,
      pages: 1,
      paging: {},
      contador: 0
    };
  },
  components: {
    articulos,
  },
  methods: {
    consultar() {
        const params = {
            page: this.page
        }
      //var entrada = this.texto;
      if (this.contador == 0) {
          var url = "https://api.mercadolibre.com/sites/MCO/search?q=" + this.texto + '/';
          this.contador++;
      }else{
          var url = "https://api.mercadolibre.com/sites/MCO/search?q=" + this.texto + '/'+this.page;
          this.contador--;
      }
      
      console.log(url);
      let resultados = axios
        .get(url)
        .then((res) => {
          console.log(res.data);
          this.productos = res.data.results;
          this.paging = res.data.paging;
          
          this.pages = this.paging.total;
        })
        .catch((err) => {
          console.log(err);
        });
        
    },
    cambiarPagina(page){
        this.page = (page <= 0 || page >this.pages) ? this.page : page 
        this.consultar();
    }
  },
};
</script>

<style>
</style>