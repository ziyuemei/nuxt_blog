<template>
  <div class="container">
    <el-button type="primary">主要按钮</el-button>
    <div v-for="i in 5" :key="i">
      {{i}}
      <br />
      {{$store.state.userInfo}}
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const res = await $axios.$get("/test");
  },
};
</script>
