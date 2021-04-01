<template>
  <main class="col-lg-10 col-12 p-0">
    <Navbar @onSearchRequested="search" />
    <div class="col-12 p-5">
      <h1>INVENTÁIO CARAIO</h1>
    </div>
  </main>
</template>

<script>
import Navbar from "../components/Navbar";
import { GANGS, USERS } from "../services/Database";

export default {
  name: "Inventory",
  components: {
    Navbar,
  },

  methods: {
    search(queryString) {
      if (queryString.length != 0) {
        GANGS.get("/getGang", {
          params: {
            search: queryString,
          },
        }).then((response) => {
          this.gang = "";
          this.gang = response.data;
          console.log(this.gang);
        });
      }
    },
    getUserUsername(userId) {
      if (userId) {
        USERS.get("/getUserUsernameById", {
          params: {
            search: userId,
          },
        }).then((response) => {
          this.user = response.data;
          console.log(this.user);
        });
      }
    },
  },
};
</script>
<style>
</style>