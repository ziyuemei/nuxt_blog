// nuxt 声明状态，必须是function
const state = () => ({
    userInfo: null,
    accessToken: null,
    refreshToken: null
})

// 改变状态值
const mutations = {
    // 状态置空
    RESET_USER_STATE(state) {
        // 状态置空
        state.userInfo = null;
        state.accessToken = null;
        state.refreshToken = null;
    },
}

// 定义行为
const actions = {
    // 跳转登录页
    LoginPage({ commit }) {
        // 重置用户状态
        commit('RESET_USER_STATE');
        // 跳转到认证客户端（登录页）， redirectURL 作为请求参数，参数值是引发跳转的地址
        // window 是属于浏览器的对象，所以在触发这个action时，只能在客户端中进行触发 ，不能在服务端进行触发（asyncData）
        window.location.href = `http://localhost:7000/?redirectURL=${window.location.href}`;
    },
}

// 不要忘记
export default {
    state,
    mutations,
    actions
}