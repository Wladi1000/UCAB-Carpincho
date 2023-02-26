<script setup>

    import { ref, reactive, onMounted} from 'vue';
    
    const emit = defineEmits(['response']);
    const data = reactive([]);
    
    let alumno = reactive({
        id_usuario: '',
        nombres: '',
        apellidos: '',
        cedula: '',
        correo: ''
    });
    let profesor = reactive({
        id_usuario: '',
        nombres: '',
        apellidos: '',
        cedula: '',
        correo: ''
    });

    // Datos solicitud
    let organizacion = ref('');
    const respuestaEmpresas = reactive([]);

    // Datos faltantes
    let telefonoAlumno = ref('');
    let oficinaAlumno = ref('');
    let habitacionAlumno = ref('');

    // Datos primordiales    
    let temaPropuesto = ref('');
    let cedulaAlumno = ref('');
    let cedulaProfesor = ref('');

    onMounted( async () =>{
        //const res = await fetch("http://localhost:3000/SPTG");
        //data.value = await res.json();
        //console.log(data);

        const res = await fetch(`http://localhost:3000/Empresas`);
        respuestaEmpresas.value = await res.json();
        console.log(respuestaEmpresas);
    });

    function swapMostrarPlanilla(){
        emit('response', false);
    }

    async function obtenerAlumno (){

        const res = await fetch(`http://localhost:3000/Estudiantes/cedula/${cedulaAlumno.value}`);
        const respuestaAlumno = await res.json();
        
        alumno.id_usuario = respuestaAlumno.id_usuario;
        alumno.nombres = respuestaAlumno.nombres;
        alumno.apellidos = respuestaAlumno.apellidos;
        alumno.cedula = respuestaAlumno.cedula;
        alumno.correo = respuestaAlumno.correo;
    }
    async function obtenerProfesor (){

        const res = await fetch(`http://localhost:3000/Profesores/cedula/${cedulaProfesor.value}`);
        const respuestaProfesor = await res.json();
        
        profesor.id_usuario = respuestaProfesor.id_usuario;
        profesor.nombres = respuestaProfesor.nombres;
        profesor.apellidos = respuestaProfesor.apellidos;
        profesor.cedula = respuestaProfesor.cedula;
        profesor.correo = respuestaProfesor.correo;
    }
    async function llenarSolicitud (){
        //Aqui no sabemos que hacer pero debe crear la planilla

        //Esta es la funcion que crea la solicitud de trabajo de grado
        const res = await fetch(`http://localhost:3000/SPTG`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'titulo': temaPropuesto.value,
                'id_ta': profesor.id_usuario
            })
        });
        const last_sptg = await fetch(`http://localhost:3000/ultimoSPTG`);
        const respuesta_last_sptg = await last_sptg.json();
        /*
        const realiza_sptg = await fetch(`http://localhost:3000/realiza_sptg`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'id_s': temaPropuesto.value,
                'id_ta': profesor.id_usuario
            })
        });
        */
        console.log(respuesta_last_sptg);

    }

</script>
<template>
    <div class="planilla solicitud" action="">
        <button @click="swapMostrarPlanilla" >Este boton echa para atras</button>
        <h2>Tema Propuesto</h2>
        <input type="text" v-model="temaPropuesto" />
        <h2>Organizacion donde se presentará</h2>
        <input type="text" />
        <div class="solicitud__alumno">
            <h2>Alumno</h2>
            <label>Cedula: {{ alumno.cedula }}</label>
            <p>{{ cedulaAlumno }}</p>
            <input type="text" v-model="cedulaAlumno" />
            <button @click="obtenerAlumno()" >Buscar Alumno</button>
            <label>Nombres: {{ alumno.nombres }}</label>
            <label>Apellidos: {{ alumno.apellidos }}</label>
            <label>Correo: {{ alumno.correo }}</label>
            <label>Telefono: </label>
            <label>Oficina: </label>
            <label>Habitación: </label>
            <button disabled>No hacer caso a este boton seguir</button>
        </div>
        <div class="solicitud__tutor-academico">
            <h2>Tutor Academico</h2>
            <label>Cédula {{ profesor.cedula }}</label>
            <input type="text" v-model="cedulaProfesor"/>
            <p>{{ cedulaProfesor }}</p>
            <button @click="obtenerProfesor()" >Buscar Tutor </button>
            <label>Nombres {{ profesor.nombres }}</label>
            <label>Apellidos {{ profesor.apellidos }}</label>
            <label>Profesión</label>
            <label>Años de experiencia profesional</label>
            <label>Cargo actulal</label>
            <label>Correo {{ profesor.correo }}</label>
            <label>Telefono</label>
            <button disabled>No hacer caso a este boton seguir</button>
        </div>
        <div class="solicitud__empresa">
            <h2>Empresa</h2>
            <label>Nombres</label>
            <select name="empresas" >
                <option 
                    v-for="emp in respuestaEmpresas.value" :key="emp.id_empresa" :value="emp.nombre"
                    >{{ emp.nombre }}</option>
            </select>
            
            <label>Direccién</label>
            <label>Teléfono</label>
            <button disabled>No hacer caso a este boton seguir</button>
        </div>
        <button @click="llenarSolicitud()" >Llenar solicitud</button>
        <button>Elimitar solicitud</button>
        <button>Actualizar solicitud</button>
    </div>
</template>
<style>
    .planilla{
        position: absolute;
        margin: 10px 0;
        padding: 15px;
        width: 500px;
        background-color: #D9D9D9;
        border: solid 1px #000;
        border-radius: 10px;
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