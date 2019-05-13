<template>
  <div class="card col-12 px-3 py-2 mt-2">
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
      <small><Icon icon="comment" /></small>
      <small><Icon icon="retweet" /></small>
      <small><Icon icon="heart" /> {{ twit.liked_by.length }}</small>
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
};
</script>
