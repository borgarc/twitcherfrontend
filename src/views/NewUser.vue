<template>
  <div class="container-fluid d-flex justify-content-center align-items-center h-100">
    <div class="card col-8">
      <div>
        <label for="inputEmail4">Nombre</label>
        <input type="text" class="form-control" id="inputEmail4"
        placeholder="Nombre" v-model="userData.first_name">
      </div>
      <div>
        <label for="Apellidos">Apellidos</label>
        <input type="text" class="form-control" id="Apellidos"
        placeholder="Apellidos" v-model="userData.last_name">
      </div>
      <div>
        <label for="Nick">Nick</label>
        <input type="text" class="form-control" id="Nick"
        placeholder="Nick" v-model="userData.username">
      </div>
      <div>
        <label for="inputPassword4">Contraseña</label>
        <input type="password" class="form-control" id="inputPassword4"
        placeholder="Password" v-model="userData.password">
      </div>
      <div class="d-flex justify-content-end mt-2 p-2">
        <button class="btn btn-dark mr-2" @click="goToLogin">Atras</button>
        <button class="btn btn-dark" @click="onCreateUser">Crear</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      userData: {
        first_name: '',
        last_name: '',
        username: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions({
      createUser: 'addUser',
    }),
    onCreateUser() {
      this.createUser(this.userData).then(() => {
        this.$router.push({ name: 'login' });
      });
    },
    goToLogin() {
      this.$router.push({ name: 'login' });
    },
  },
};
</script>
