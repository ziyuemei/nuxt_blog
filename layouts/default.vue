<template>
  <div>
    <!-- 头部 -->
    <blog-header></blog-header>
    <!-- 主体内容 -->
    <div class="mxg-main">
      <nuxt />
    </div>
    <!-- 底部 -->
    <blog-footer></blog-footer>
    <!-- 回到顶部，bottom 下拉距离顶部多高时，显示回到顶部图标。注意不要加 :target -->
    <el-backtop :bottom="80"></el-backtop>
  </div>
</template>
<script>
import BlogHeader from "@/components/layout/Header";
import BlogFooter from "@/components/layout/Footer";
export default {
  components: {
    BlogHeader,
    BlogFooter,
  },
};
</script>

<style scoped>
.mxg-main {
  padding-top: 90px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>

