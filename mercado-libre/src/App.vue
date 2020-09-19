<template>
  <div id="app">
    
    <consulta />
    
    <router-view/>
  </div>
</template>

<script>
import Consulta from './components/Consulta.vue'

export default{
  name: 'app',
  components:{
    Consulta
  }
}
</script>

