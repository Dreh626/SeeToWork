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
        "footer footer footer";
        grid-template-columns: auto  auto auto;
        grid-template-rows: auto auto auto;
        max-width: 1279px;

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
            height: 20vh;
        }
    }
</style>

<script>
import Menu from '@/components/Menu.vue'

export default {
  name: 'FristScreen',
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