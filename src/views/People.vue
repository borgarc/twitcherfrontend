<template>
  <div class="main-view container-fluid">
    <Follower :key="person.id" v-for="person in people" :id="person.id" add/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Follower from '@/components/Follower.vue';

export default {
  components: {
    Follower,
  },
  created() {
    this.fetchPeople();
  },
  computed: {
    ...mapGetters({
      people: 'getPeopleToBeFriends',
    }),
  },
  methods: {
    ...mapActions({
      fetchPeople: 'fetchPeople',
    }),
  },
};
</script>
