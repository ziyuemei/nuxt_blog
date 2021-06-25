export default {
    mode: 'universal',
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
        '~/plugins/element-ui.js'
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [],
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