<template>
  <header>
    <nav>
      <ul>
        <li>
          <!-- <button @click="setActivePage('teamsList')">Teams</button> -->
          <router-link :to="{ name: 'teams' }"
            ><button>Teams</button></router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'users' }"
            ><button>Users</button></router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  // emits: ['set-page'],
  // methods: {
  //   setActivePage(page) {
  //     this.$emit('set-page', page);
  //   },
  // },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

button {
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

button:hover,
button:active,
.router-link-active > button {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #2709ab;
}
</style>
