<template>
  <div class="home">
    <Login v-if="login"/>
    <Cadastro v-if="cadastro" />
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import Cadastro from '@/components/Cadastro.vue'

export default {
  name: 'Home',
  components: {
    Login,
    Cadastro
  },
  data(){
    return{
      login: false,
      cadastro: false
    }
  }
}
</script>
