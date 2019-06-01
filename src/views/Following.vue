<template>
  <div class="main-view container-fluid">
    <Follower :key="person.id" v-for="person in people" :id="person.id"/>
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
    this.fetchFollowers();
  },
  computed: {
    ...mapGetters({
      people: 'getFollowedPeople',
    }),
  },
  methods: {
    ...mapActions({
      fetchFollowers: 'fetchFollowers',
    }),
  },
};
</script>
