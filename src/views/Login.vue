<template>
  <div class="container-fluid">
    <label for="user">Usuario:</label>
    <input type="text" id="user" v-model="username">
    <label for="pass">Contraseña:</label>
    <input type="password" id="pass" v-model="password">
    <button @click="onLogin">Log In</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    ...mapActions({
      login: 'login',
    }),
    onLogin() {
      this.login({
        username: this.username,
        password: this.password,
      }).then(() => {
        this.$router.push({ name: 'home' });
      });
    },
  },
};
</script>
