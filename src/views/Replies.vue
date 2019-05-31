<template>
  <div class="main-view container-fluid">
    oihjoihjok
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  created() {
    this.fecthTwit(this.$route.params.twitID);
    this.fetchReplies(this.$route.params.twitID);
  },
  computed: {
    ...mapGetters({
      getTwitByID: 'getTwitByID',
      getRepliesByTwit: 'getRepliesByTwit',
    }),
    twit() {
      return this.getTwitByID(parseInt(this.$route.params.twitID, 10));
    },
    replies() {
      return this.getRepliesByTwit(parseInt(this.$route.params.twitID, 10));
    },
  },
  methods: {
    ...mapActions({
      fecthTwit: 'fecthTwit',
      fetchReplies: 'fetchReplies',
    }),
  },
};
</script>
