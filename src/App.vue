<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
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

