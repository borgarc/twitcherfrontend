<template>
  <ul class="nav justify-content-between">
    <li class="nav-item">
      <a class="nav-link active" href="#" @click="goToHome"><small><Icon icon="home" /></small></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" @click="goToNewTwit">
        <small><Icon icon="comment-dots" /></small>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><small><Icon icon="users" /></small></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <small><Icon icon="user-plus" @click="goToAddFollower"/></small>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    goToNewTwit() {
      this.$router.push({ name: 'new' });
    },
    goToHome() {
      this.$router.push({ name: 'home' });
    },
    goToAddFollower() {
      this.$router.push({ name: 'people' });
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  flex: 0 0 auto;
}

small {
  color: black;
}

ul {
  flex: 0 0 auto;
}
</style>
