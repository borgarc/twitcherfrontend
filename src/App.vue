<template>
  <div v-if="isLoaded" id="app" class="d-flex flex-column">
    <router-view name="header"/>
    <router-view name="menu"/>
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  created() {
    Promise.all([
      this.fetchPeople(),
      this.fetchProfile(),
    ]).catch(() => {
      this.$router.push({ name: 'login' });
    });
  },
  computed: {
    ...mapGetters({
      getProfile: 'getProfile',
    }),
    isLoaded() {
      return this.getProfile || this.$route.name === 'login';
    },
  },
  methods: {
    ...mapActions({
      fetchPeople: 'fetchPeople',
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
