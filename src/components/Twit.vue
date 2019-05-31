<template>
  <div class="card col-12 px-3 py-2 mt-2" @click="goToReplies">
    <div class="d-flex pb-2">
      <div class="flex-grow-1">
        <small><strong>{{ twit.user.name }}</strong></small>
        <small class="text-muted"> {{ twit.user.username }}</small>
      </div>
      <div class="flex-grow-0">
        <small class="text-muted"> {{ formatedDate }}</small>
      </div>
    </div>
    <small>{{ twit.content }}</small>
    <div class="d-flex justify-content-between">
      <a class="nav-link active" href="#" @click.stop="goToNewReply">
        <small><Icon icon="comment" /></small>
      </a>
      <a class="nav-link active" href="#"><small><Icon icon="retweet" /></small></a>
      <a class="nav-link active" href="#">
        <small><Icon icon="heart" />{{ twit.liked_by.length }}</small>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      getTwitByID: 'getTwitByID',
    }),
    twit() {
      return this.getTwitByID(this.id);
    },
    formatedDate() {
      return moment(this.twit.created).toNow(true);
    },
  },
  methods: {
    goToNewReply() {
      this.$router.push({ name: 'reply', params: { twitID: this.twit.id } });
    },
    goToReplies() {
      this.$router.push({ name: 'replies', params: { twitID: this.twit.id } });
    },
  },
};
</script>

<style lang="scss">
small {
  color: black;
}
</style>
