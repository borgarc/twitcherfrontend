<template>
  <div class="header p-3">
    <template v-if="user">
      <h4 class="mb-0">{{ user.name }}</h4>
      <small class="text-muted">{{ user.username }}</small>
      <div class="pt-2">
        <small><strong>{{ user.follows.length }}</strong></small>
        <small class="pl-1 text-muted">Siguiendo</small>
        <small class="pl-2"><strong>{{ user.followers.length }}</strong></small>
        <small class="pl-1 text-muted">Seguidores</small>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      getPersonByID: 'getPersonByID',
      profile: 'getProfile',
    }),
    user() {
      if (this.$route.params.userID) {
        return this.getPersonByID(parseInt(this.$route.params.userID, 10));
      }
      return this.profile;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  flex: 0 0 auto;
}
</style>
