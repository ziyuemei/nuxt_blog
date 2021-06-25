export default {
    mode: 'universal',
    env: {
        // 认证客户端URL  process.env.authURL
        authURL: process.env.NODE_ENV === 'dev' ? '//localhost:7000' : '//login.ziyuemei.com'
    },
    /*
     ** Headers of the page
     */
    head: {
        title: "个人博客门户网站",
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: "IT技术交流，前端学习，记录生活和工作" }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/meng.ico' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
        'element-ui/lib/theme-chalk/index.css',
        'element-ui/lib/theme-chalk/display.css',
        '@/assets/css/global.css'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/element-ui.js',
        '~/plugins/interceptor.js'
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/axios',
        'cookie-universal-nuxt',
    ],
    axios: {
        proxy: true, // 开启代理转发
        prefix: '/api' // 请求接口添加前缀: /test => /api/test
    },
    proxy: { // 代理转发
        '/api': { // /api/test => https://mock.mengxuegu.com/mock/60d04a6a1138164f2236b369/mengxuegu/blog/test
            target: 'https://mock.mengxuegu.com/mock/60d04a6a1138164f2236b369/mengxuegu/blog',
            pathRewrite: { '/api': '' }
        }
    },
    /*
     ** Build configuration
     */
    build: {
        // 将 node-modules 里面的 element-ui 导出
        transpile: [/^element-ui/],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}