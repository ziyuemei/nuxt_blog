<template>
  <div class="mxg-header mxg-header-fixed">
    <div class="mxg-nav">
      <el-row type="flex" justify="space-between">
        <el-col class="logo" :xs="4" :sm="4" :md="4">
          <!-- Logo -->
          <!-- Logo， 任意宽度都是占4格-->
          <nuxt-link to="/">
            <img src="~/assets/images/logo.png" height="40px" />
          </nuxt-link>
        </el-col>
        <!-- 导航菜单， 手机与平板坚屏都占0格，也就是隐藏，其他10格-->
        <el-col class="hidden-sm-and-down" :md="10">
          <!-- 导航菜单 ，horizontal 水平， router 开启 index 指定路由地址， default-active默认哪个被选中-->
          <el-menu
            mode="horizontal"
            router
            default-active="/"
            active-text-color="#345dc2"
            background-color="#fafafa"
          >
            <el-menu-item index="/">博客</el-menu-item>
            <el-menu-item index="/question">问答</el-menu-item>
            <el-menu-item index="/label">标签</el-menu-item>
          </el-menu>
        </el-col>
        <!-- 登录、注册/头像 手机与平板坚屏都占18格，其他占8格式-->
        <el-col class="nav-right" :xs="18" :sm="18" :md="8">
          <!-- 登录、注册/头像 -->
          <div class="nav-sign">
            <el-button type="text">管理后台</el-button>
            <el-button v-if="!userInfo" type="text" @click="$store.dispatch('LoginPage')">登录</el-button>
            <el-button
              v-if="!userInfo"
              type="primary"
              size="small"
              round
              @click="$store.dispatch('LoginPage')"
            >注册</el-button>
          </div>
          <el-dropdown @command="handleCommand">
            <div class="el-dropdown-link">
              <!-- src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" -->
              <el-avatar icon="el-icon-user-solid" :src="userInfo?userInfo.imageUrl:null"></el-avatar>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="article">写文章</el-dropdown-item>
              <el-dropdown-item command="question">提问题</el-dropdown-item>
              <el-dropdown-item command="user">我的主页</el-dropdown-item>
              <el-dropdown-item v-if="userInfo" command="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
  methods: {
    // 下拉点击后调用
    handleCommand(command) {
      if (!this.userInfo) {
        return this.$store.dispatch("LoginPage");
      }
      switch (command) {
        case "article":
          // 打开新窗口
          let routeData = this.$router.resolve("/article/edit");
          window.open(routeData.href, "_blank");
          // 当前窗口打开
          // this.$router.push("/article/edit");
          break;
        case "question":
          // 打开新窗口
          routeData = this.$router.resolve("/question/edit");
          window.open(routeData.href, "_blank");
          break;
        case "logout":
          // 退出
          this.$store.dispatch("UserLogout");
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
/* 头部 */
.mxg-header {
  width: 100%;
  height: 60px;
  border-top: 3px solid #345dc2;
  background-color: #fafafa;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  z-index: 1501;
}
/* 固定头部 */
.mxg-header-fixed {
  position: fixed;
}

/* 导航 */
.mxg-header .mxg-nav {
  max-width: 1140px;
  /* 居中 */
  margin: auto;
  padding: 10px;
}

.el-menu.el-menu--horizontal {
  /* 去除底部边框 */
  border-bottom: 0px;
  margin-top: -10px;
}

/* 导航右侧 */
.nav-right {
  text-align: right;
}
.nav-sign {
  position: absolute;
  right: 0;
  margin-right: 50px;
}

/* 防止点击头像有边框 */
div:focus {
  outline: none;
}
</style>