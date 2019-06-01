<template>
  <div class="card col-11 px-3 py-2 mt-2">
    <div class="d-flex pb-2">
      <div class="flex-grow-1">
        <small><strong>{{ reply.user.name }}</strong></small>
        <small class="text-muted"> {{ reply.user.username }}</small>
      </div>
      <div class="flex-grow-0">
        <small class="text-muted"> {{ formatedDate }}</small>
      </div>
    </div>
    <small>{{ reply.content }}</small>
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
      getReplyByID: 'getReplyByID',
    }),
    reply() {
      return this.getReplyByID(this.id);
    },
    formatedDate() {
      return moment(this.reply.created).toNow(true);
    },
  },
};
</script>

<style lang="scss">
small {
  color: black;
}
</style>
