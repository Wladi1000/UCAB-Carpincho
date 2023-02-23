<template>
    <div class="navbar">
        <img src="../assets/ucab - isotipo.png" alt="">
        <ul class="navbar__list">
            <li class="navbar__list__element"><router-link to="/">Login</router-link></li>
            <li class="navbar__list__element"><router-link to="/upload-propouse">Upload<br>propuose</router-link></li>
            <li class="navbar__list__element"><router-link to="/requests">Requests</router-link></li>
            <li class="navbar__list__element"><router-link to="/reviewers">Reviewers</router-link></li>
            <li class="navbar__list__element"><router-link to="/committee">Committee</router-link></li>
            <li class="navbar__list__element"><router-link to="/council">Council</router-link></li>
            <li class="navbar__list__element"><router-link to="/assignment">Assignment</router-link></li>
        </ul>
    </div>
</template>