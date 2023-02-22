<script setup>
    import { onMounted } from 'vue';
    
    onMounted(() => {
        let router = document.getElementById('router');
        router.classList.toggle('router')
        console.log(router);
    });

    
  //  console.log(router[0].nodeName);
      
    

</script>

<template>
    <div class="login">
        <div class="login__form">
            <form action="">
                <div class="login__form__welcome">
                    <h1>¡Bienvenido a Practicas Profesionales!</h1>
                    <h2>Inicia sesión para continuar</h2>
                </div>
                <div class="login__form__mail">
                    <h2>Correo</h2>
                    <input type="text" placeholder="example.num@est.ucab.edu.ve">
                </div>
                <div class="login__form__password">
                    <h2>Contraseña</h2>
                    <input type="password" placeholder="...........................">
                </div>
                <button>Iniciar Sesion</button>
            </form>
        </div>
    </div>
</template>