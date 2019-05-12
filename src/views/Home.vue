<template>
  <div class="main-view container-fluid">
    <Twit :key="twit.id" v-for="twit in twits" :id="twit.id" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Twit from '@/components/Twit.vue';

export default {
  components: {
    Twit,
  },
  created() {
    this.fetchTwits();
  },
  computed: {
    ...mapState({
      twits: state => state.twits.twits,
    }),
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
