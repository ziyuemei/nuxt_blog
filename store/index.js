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
    // 刷新页面后，重新更新状态
    UPDATE_ALL_STATE(state, data) {
        state.userInfo = data.userInfo
        state.accessToken = data.accessToken
        state.refreshToken = data.refreshToken
    },

}

// 定义行为
const actions = {
    // nuxt 提供的，每次发送请求前都会先调用此方法
    // 此方法第一个参数是store 对象{commit, state}，第2参数是上下文对象context
    nuxtServerInit({ commit }, { app }) {
        const data = {}
        data.userInfo = app.$cookies.get('userInfo')
        data.accessToken = app.$cookies.get('accessToken')
        data.refreshToken = app.$cookies.get('refreshToken')
        commit("UPDATE_ALL_STATE", data)
    },

    // 跳转登录页
    LoginPage({ commit }) {
        // 重置用户状态
        commit('RESET_USER_STATE');
        // 跳转到认证客户端（登录页）， redirectURL 作为请求参数，参数值是引发跳转的地址
        // window 是属于浏览器的对象，所以在触发这个action时，只能在客户端中进行触发 ，不能在服务端进行触发（asyncData）
        window.location.href = `${process.env.authURL}?redirectURL=${window.location.href}`;
    },

    UserLogout({ commit }) {
        // 重置状态
        commit('RESET_USER_STATE');
        // 跳转认证客户端实现退出
        window.location.href = `${process.env.authURL}/logout?redirectURL=${window.location.href}`;
    }
}

// 不要忘记
export default {
    state,
    mutations,
    actions
}