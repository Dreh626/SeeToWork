<template>
  <div class="page">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row box-page d-flex justify-content-center align-items-center">
            <div class="col-md-6 d-flex justify-content-center">
                <div class="box">
                  <form>
                    <div class="mb-3 text-center">
                      <h1>CADASTRO</h1>
                    </div>
                    <input type="text" name="nome" class="form-control input mb-4" placeholder="NOME">
                    <input type="text" name="tel" class="form-control input mb-4" placeholder="TELEFONE OU CELULAR">
                    <input type="text" name="cpf" class="form-control input mb-4" placeholder="CPF">
                    <input type="email" name="email" class="form-control input mb-4" placeholder="EMAIL">
                    <input type="password" name="senha" class="form-control input mb-4" placeholder="SENHA">
                    <div class="d-flex justify-content-between mb-4">
                      <button type="submit">CADASTRAR</button>
                      <button type="button">VOLTAR</button>
                    </div>
                    <a href="#">
                      <div class="d-flex align-items-center">
                        <p class="m-0">ENTRAR COM</p>
                        <img src="../assets/img/google_plus.svg" class="google" alt="Logo Google E-mail">
                      </div>
                    </a>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.row,
.col {
  margin: 0;
  padding: 0;
}
.page {
  background: #292c29;
  height: 100vh;
  width: 100vw;
}
.box-page{
  height: 100vh;
}
.box {
  border: 5px solid green;
  max-width: 400px;
  border-radius: 30px;
  width: 100%;
  padding: 30px;
}
.google{
  width: 40px;
  margin-left: 10px;
}
/* ||||||||||||||||||||||||||||||||||||| */
form{
  background: #292c29;
  color: #f6f6f6;
  width: 100%;
}

.input {
  background: #f6f6f6;
  border: 2px solid orange;
  border-radius: 13px;
  padding: 3px 10px;
}
input::placeholder{
  color: #292c29;
}
button{
  border: none;
  padding: 10px 20px;
  border-radius: 13px;
  background: orange;
  color: #292c29;
}
a{
  text-decoration: none;
  color: #f6f6f6;
}
a:hover{
  text-decoration: none;
  color: #f6f6f6;
}

</style>
