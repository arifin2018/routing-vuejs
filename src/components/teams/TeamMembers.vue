<template>
  <router-link to="/teams/t2">Test button 2</router-link>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['teams', 'users'],
  props: ['data'],
  data() {
    return {
      teamName: 'Test',
      members: [
        // { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
        // { id: 'u2', fullName: this.$route.params.data, role: 'Engineer' },
      ],
    };
  },
  methods: {
    filterDataUserMembers(data) {
      const members = this.teams.find(
        // (element) => element.id == this.$route.params.data
        (element) => element.id == this.data
      );
      this.teamName = members.name;

      let datas = [];

      for (const member of members.members) {
        datas.push(data.find((element) => element.id == member));
      }

      return datas;
    },
  },
  created() {
    this.members = this.filterDataUserMembers(this.users);
  },
  watch: {
    data() {
      this.members = this.filterDataUserMembers(this.users);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
