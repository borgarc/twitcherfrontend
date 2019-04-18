<template>
  <div class="card col-12 mt-3">
    <div class="card-body">
      <p class="card-title text-bold">{{ twit.user }}</p>
      <p class="card-text">{{ twit.content }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
      return this.getTwitByID(this.id)
    }
  },
}
</script>