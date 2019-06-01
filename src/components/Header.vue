<template>
  <div class="header p-3">
    <template v-if="profile">
      <h4 class="mb-0">{{ profile.name }}</h4>
      <small class="text-muted">{{ profile.username }}</small>
      <div class="pt-2">
        <small><strong>{{ profile.follows.length }}</strong></small>
        <small class="pl-1 text-muted">Siguiendo</small>
        <small class="pl-2"><strong>{{ profile.followers.length }}</strong></small>
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
      profile: 'getProfile',
    }),
  },
};
</script>

<style lang="scss" scoped>
.header {
  flex: 0 0 auto;
}
</style>
