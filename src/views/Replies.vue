<template>
  <div class="main-view container-fluid">
    <Twit :id="twit.id"/>
    <div class="d-flex justify-content-end flex-wrap">
      <Reply :key="reply.id" v-for="reply in replies" :id="reply.id"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Twit from '@/components/Twit.vue';
import Reply from '@/components/Reply.vue';

export default {
  components: {
    Twit,
    Reply,
  },
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
