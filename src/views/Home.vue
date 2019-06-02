<template>
  <div class="main-view container-fluid">
    <Twit :key="twit.id" v-for="twit in twits" :id="twit.id" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Twit from '@/components/Twit.vue';

export default {
  components: {
    Twit,
  },
  created() {
    this.fetchTwits(this.userID);
  },
  watch: {
    '$route'() {
      this.fetchTwits(this.userID);
    },
  },
  computed: {
    ...mapGetters({
      twits: 'getTwits',
      profile: 'getProfile',
    }),
    userID() {
      return this.$route.params.userID || this.profile.id;
    },
  },
  methods: {
    ...mapActions({
      fetchTwits: 'fetchTwits',
    }),
  },
};
</script>

<style lang="scss" scoped>
.main-view {
  flex: 1 1;
}
</style>
