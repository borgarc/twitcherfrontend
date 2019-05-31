<template>
  <div>asdasd</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  created() {
    this.fetchPeople();
  },
  computed: {
    ...mapGetters({
      people: 'getPeople',
    }),
  },
  methods: {
    ...mapActions({
      fetchPeople: 'fetchPeople',
    }),
  },
};
</script>
