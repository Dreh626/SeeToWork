<template>
    <div class="container-menu" id="app">
        <div class="logo">
            <img src="@/assets/img/logo.png" alt="Logo SeeToWork"><p>SeeToWork</p>
        </div>
        <div class="btnMenu">
            <a href="http://" :class="{fundoLink: aplicarFundo }" @click="aplicarFundo = !aplicarFundo"><img src="https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=20&txt_altura=20&extensao=png&fundo_r=1&fundo_g=0.4392156862745098&fundo_b=0.12549019607843137&texto_r=0&texto_g=0&texto_b=0&texto=Gerador Imagem %234Devs&tamanho_fonte=10" alt="" srcset=""> TEXTO TEXTO TEXTO</a>
            <a href="http://"><img src="https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=20&txt_altura=20&extensao=png&fundo_r=1&fundo_g=0.4392156862745098&fundo_b=0.12549019607843137&texto_r=0&texto_g=0&texto_b=0&texto=Gerador Imagem %234Devs&tamanho_fonte=10" alt="" srcset=""> TEXTO TEXTO TEXTO</a>
            <a href="http://"><img src="https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=20&txt_altura=20&extensao=png&fundo_r=1&fundo_g=0.4392156862745098&fundo_b=0.12549019607843137&texto_r=0&texto_g=0&texto_b=0&texto=Gerador Imagem %234Devs&tamanho_fonte=10" alt="" srcset=""> TEXTO TEXTO TEXTO</a>
            <a href="http://"><img src="https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=20&txt_altura=20&extensao=png&fundo_r=1&fundo_g=0.4392156862745098&fundo_b=0.12549019607843137&texto_r=0&texto_g=0&texto_b=0&texto=Gerador Imagem %234Devs&tamanho_fonte=10" alt="" srcset=""> TEXTO TEXTO TEXTO</a>
            <a href="http://"><img src="https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=20&txt_altura=20&extensao=png&fundo_r=1&fundo_g=0.4392156862745098&fundo_b=0.12549019607843137&texto_r=0&texto_g=0&texto_b=0&texto=Gerador Imagem %234Devs&tamanho_fonte=10" alt="" srcset=""> TEXTO TEXTO TEXTO</a>
        </div>
    </div>
</template>

<script>
    // new Vue({
    //     el: '#app',
    //     data:{
    //         aplicarFundo: false
    //     }
    // })
</script>

<style lang="scss" scoped>
    .container-menu{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: left;
        padding: 25% 0;

        .logo{
            display: flex;
            width: 180px;
            flex-direction: column-reverse;
            align-items: center;

            img{
                width: 100%;
            }
        }

        .btnMenu{
            display: flex;
            flex-direction: column;
            margin: 15px 10px;
            align-items: center;
        }

        .btnNav{
            width: 120px;
            color: #000;
            background: #7c7c7c;
            border: #7c7c7c;
            border-radius: 10px;
            margin: 5px;
            text-shadow: 0.04em 0.04em 0.1em rgba(255,112,32,1);
        }
        a{
            display: block;
            border-radius: 10px;
            padding: 5%;
            margin: 0 10px;
            width: 200px;
            text-decoration: none;
            color: #000;
            text-shadow:0.04em 0.04em 0.1em rgba(255,112,32,1) ;
        }

        a:hover{
            border: 1px solid  rgba(255,112,32,1);
        }

        .fundoLink{
            background-color: #639;
        }

        .btnNav:hover{
             border: #FF7020;
        }
    }
</style>