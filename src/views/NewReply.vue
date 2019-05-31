<template>
  <div class="container-fluid">
    <div class="row">
      <small class="text-muted col-12">Reply:</small>
      <div class="col-12">
        <textarea v-model="replyData.content" placeholder="New Reply" class="w-100"></textarea>
      </div>
      <div class="col-3 offset-9 col-md-1 offset-md-11">
        <button type="button" class="btn btn-dark" @click="submit">Reply</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      replyData: {
        content: '',
      },
    };
  },
  computed: {
    ...mapGetters({
      getProfile: 'getProfile',
    }),
  },
  methods: {
    ...mapActions({
      createReply: 'createReply',
    }),
    submit() {
      this.replyData.user = this.getProfile.id;
      this.replyData.twit = this.$route.params.twitID;
      this.createReply(this.replyData);
      this.$router.push({ name: 'home' });
    },
  },
};
</script>
