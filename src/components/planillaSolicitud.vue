<script setup>
</script>
<template>
    <div class="planilla solicitud" action="">
        <h2>Tema Propuesto</h2>
        <input type="text" />
        <h2>Organizacion donde se presentará: ucab</h2>
        <input type="text" />
        <div class="solicitud__alumno">
            <label>Nombre</label>
            <input type="text" />
            <label>Cedula</label>
            <input type="text" />
            <label>Telefono</label>
            <input type="text" />
            <label>Correo</label>
            <input type="text" />
            <label>Oficina</label>
            <input type="text" />
            <label>Habitación</label>
            <input type="text" />
            <button>seguir</button>
        </div>
        <div class="solicitud__tutor-academico">
            <label>Nombres</label>
            <input type="text" />
            <label>Apellidos</label>
            <input type="text" />
            <label>Cédula</label>
            <input type="text" />
            <label>Profesión</label>
            <input type="text" />
            <label>Años de experiencia profesional</label>
            <input type="text" />
            <label>Cargo actulal</label>
            <input type="text" />
            <label>Correo</label>
            <input type="text" />
            <label>Telefono</label>
            <input type="text" />
            <button>seguir</button>
            <input type="text" />
        </div>
        <div class="solicitud__empresa">
            <label>Nombres</label>
            <input type="text" />
            <label>Direccién</label>
            <input type="text" />
            <label>Teléfono</label>
            <input type="text" />
            <button>seguir</button>
        </div>
    </div>
</template>
<style>
    .planilla{
        padding: 15px;
        width: 500px;
        background-color: #D9D9D9;
    }
    .planilla h2{
        margin: 10px 0;
    }
    .planilla div{
        display:flex;
        flex-direction: column;
    }
    label, button{
        margin: 15px 0;
    }
</style>