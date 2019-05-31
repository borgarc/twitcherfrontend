<template>
  <div class="container-fluid">
    <div class="row">
      <small class="text-muted col-12">Twit:</small>
      <div class="col-12">
        <textarea v-model="twitData.content" placeholder="New Twit" class="w-100"></textarea>
      </div>
      <div class="col-3 offset-9 col-md-1 offset-md-11">
        <button type="button" class="btn btn-dark" @click="submit">Crear</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      twitData: {
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
      createTwit: 'createTwit',
    }),
    submit() {
      this.twitData.user = this.getProfile.id;
      this.createTwit(this.twitData);
      this.$router.push({ name: 'home' });
    },
  },
};
</script>
