<template>
  <div class="me">
    <h1>This is Me</h1>
  </div>
</template>

<script>
import AuthService from "@/services/auth-service.js";
export default {
  name: "Me",
  async mounted() {
    await this.loadMe();
  },
  methods: {
    async loadMe() {
      const dataRes = await AuthService.me();
      if (dataRes && dataRes.code === 200) {
        console.log(" Show popup login thanh cong");
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style>
</style>