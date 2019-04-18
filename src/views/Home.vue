<template>
  <div class="container-fluid">
    <Twit :key="twit.id" v-for="twit in twits" :id="twit.id" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Twit from '@/components/Twit';

export default {
  components: {
    Twit
  },
  created() {
    this.fetchTwits()
  },
  computed: {
    ...mapState({
      twits: state => state.twits.twits,
    })
  },
  methods: {
    ...mapActions({
      fetchTwits: 'fetchTwits'
    })
  }
}
</script>
