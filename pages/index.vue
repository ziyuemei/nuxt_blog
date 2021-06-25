<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <!-- 左侧 -->
      <el-col class="hidden-sm-and-down" :md="3">
        <el-divider content-position="left">技术频道</el-divider>
        <!-- 类目 -->
        <el-menu active-text-color="#ffffff" router :default-active="$route.path">
          <el-menu-item index="/">推荐</el-menu-item>
          <el-menu-item index="/1">Java</el-menu-item>
          <el-menu-item index="/2">前端</el-menu-item>
          <el-menu-item index="/3">Python</el-menu-item>
          <el-menu-item index="/4">小程序</el-menu-item>
        </el-menu>
      </el-col>
      <!-- 中间轮播 -->
      <el-col :md="16">
        <div class="blog-center">
          <!-- 走马灯 -->
          <div class="banner">
            <el-carousel height="230px">
              <el-carousel-item v-for="item in 4" :key="item">
                <!-- nuxt-link 会作为子路由跳转，而要广告要跳转到外链就需要a标签href才行 -->
                <a target="_blank" href="http://www.mengxuegu.com/">
                  <img
                    src="https://img.alicdn.com/bao/uploaded/i2/3603079088/O1CN01rGCkfb2H0M1O7Lj45_!!0-item_pic.jpg"
                  />
                </a>
              </el-carousel-item>
            </el-carousel>
          </div>
          <!-- 文章列表 -->
          <nuxt-child />
        </div>
      </el-col>
      <!-- 右侧 -->
      <el-col class="hidden-sm-and-down" :md="5">
        <el-card class="right-card" shadow="hover" :body-style="{padding: '10px'}">
          <p>课程推荐</p>
          <el-carousel height="210px">
            <el-carousel-item v-for="item in 4" :key="item">
              <!-- nuxt-link 会作为子路由跳转，而要广告要跳转到外链就需要a标签href才行 -->
              <a target="_blank" href="http://www.mengxuegu.com/">
                <img
                  src="https://img.alicdn.com/bao/uploaded/i2/3603079088/O1CN01rGCkfb2H0M1O7Lj45_!!0-item_pic.jpg"
                />
                <span>canvas 必备的动画效果大全果大全</span>
              </a>
            </el-carousel-item>
          </el-carousel>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* scoped 局部引入 */
@import "@/assets/css/blog/index.css"; /*这个分号一定要写，不然报错*/
</style>