<template>
  <div class="container-fluid">
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
    <div class="d-flex justify-content-between mt-2">
      <button class="btn btn-dark" @click="goToLogin">Atras</button>
      <button class="btn btn-dark" @click="onCreateUser">Crear</button>
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
