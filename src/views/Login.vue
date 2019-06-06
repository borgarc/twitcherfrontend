<template>
  <div class="container-fluid d-flex justify-content-center align-items-center h-100">
    <div class="card col-10 px-3 py-2 mt-2 d-flex justify-content-center align-items-center">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Username</span>
        </div>
        <input type="text" class="form-control" placeholder="Username"
        aria-label="Username" aria-describedby="basic-addon1" v-model="username">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Password</span>
        </div>
        <input type="password" class="form-control" placeholder="Password" aria-label="Password"
        aria-describedby="basic-addon1" v-model="password">
      </div>
      <button class="btn btn-dark" @click="onLogin">Log In</button>
      <a class="nav-link" href="#" @click="goToCreateUser">Create new user</a>
    </div>
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
    goToCreateUser() {
      this.$router.push({ name: 'new-user' });
    },
  },
};
</script>
