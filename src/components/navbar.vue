<template>
  <div class="navbar">
    <img src="../assets/ucab - isotipo.png" alt="" />
    <ul class="navbar__list">
      <li class="navbar__list__element">
        <router-link to="/">Login</router-link>
      </li>
      <!--<li class="navbar__list__element"><router-link to="/upload-propouse">Upload<br>propuose</router-link></li>-->
      <li class="navbar__list__element">
        <router-link to="/requests">Planilla Solicitud</router-link>
      </li>
      <li class="navbar__list__element">
        <router-link to="/committee">Comité de escuela</router-link>
      </li>
      <li class="navbar__list__element">
        <router-link to="/reviewers">Asignacion de revisor</router-link>
      </li>
      <li class="navbar__list__element">
        <router-link to="/reviewers_evaluation">Evaluaciones de Revisor</router-link>
      </li>
      <li class="navbar__list__element">
        <router-link to="/council">Consejo Escuela</router-link>
      </li>
      <li class="navbar__list__element">
        <router-link to="/assignment">Asignacion de tutor academico</router-link>
      </li>
    </ul>
  </div>
</template>