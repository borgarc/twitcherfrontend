<template>
  <div class="card col-12 px-3 py-2 mt-2">
    <div class="d-flex pb-2">
      <div class="flex-grow-1">
        <small><strong>{{ people.name }}</strong></small>
        <small class="text-muted"> {{ people.username }}</small>
      </div>
    </div>
    <div class="d-flex justify-content-end">
      <a class="nav-link active" href="#" v-if="add" @click="onAddFollower">
        <small><Icon icon="plus" /></small>
      </a>
      <a class="nav-link active" href="#" v-else @click="onDeleteFollower">
        <small><Icon icon="minus" /></small>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    add: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters({
      getPeopleByID: 'getPeopleByID',
    }),
    people() {
      return this.getPeopleByID(this.id);
    },
  },
  methods: {
    ...mapActions({
      addFollower: 'addFollower',
      deleteFollower: 'deleteFollower',
    }),
    onAddFollower() {
      this.addFollower(this.id);
    },
    onDeleteFollower() {
      this.deleteFollower(this.id);
    },
  },
};
</script>
