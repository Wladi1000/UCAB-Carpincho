<script setup>
import { onMounted } from "vue";

onMounted(() => {
  let router = document.getElementById("router");
  router.classList.toggle("router");
  console.log(router);
});

//  console.log(router[0].nodeName);
</script>



<template>
  <div class="login">
    <div class="login-bc">
      <form class="login__form" action="">
        <h2 class="login__form--msg">Ingresar a la aplicación</h2>
        <div class="login__form__mail">
          <!--<h3>Cédula</h3>-->
          <input type="number" placeholder="Cédula" />
        </div>
        <div class="login__form__password">
          <!--<h3>Contraseña</h3>-->
          <input type="password" placeholder="Contraseña" />
        </div>
        <button class="login__form__btn succes">Iniciar Sesión</button>
        <button class="login__form__btn cancel">Cancelar</button>
        <a class="login__form--forget" ref="/council"
          >Se me olvidó la contraseña</a
        >
      </form>
    </div>
  </div>
</template>