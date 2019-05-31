<template>
  <div id="app" class="d-flex flex-column">
    <router-view name="header"/>
    <router-view name="menu"/>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  created() {
    this.fetchProfile().catch(() => {
      this.$router.push({ name: 'login' });
    });
  },
  methods: {
    ...mapActions({
      fetchProfile: 'fetchProfile',
    }),
  },
};
</script>

<style lang="scss">
#app {
  height: 100vh;
}
</style>
