<template>
    <div>
        <div class="page">
            <div class="container-dash">
                <header class="o-header"><Menu v-if="menu"/></header>
                <main class="o-main"></main>
                <footer class="o-footer"></footer>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .container-dash{
        display: grid;
        grid-template-areas:
        "header main main"
        "header main main"
        "header main main"
        "footer footer footer";
        grid-template-columns: 35vh repeat(2 , 83vh);
        grid-template-rows: repeat(3, 28.35vh) 15vh;

        .o-header{
            grid-area: header;
            background-color: #7c7c7c;
        }

        .o-main{
            grid-area: main;
            background-color: blue;
        }

        .o-footer{
            grid-area: footer;
            background-color: green;
        }
    }
</style>

<script>
import Menu from '@/components/Menu.vue'

export default {
  name: 'Dashboard',
  components: {
    Menu
  },
  data(){
    return{
      menu: true
    }
  }
}
</script>