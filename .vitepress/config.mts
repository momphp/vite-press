import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "MomPHP",
    description: "The PHP packages that have your back",
    head: [
        ['link', {rel: 'icon', href: '/favicon.jpeg'}]
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Packages', link: '/data/what-is-mom-php-data'},
        ],

        sidebar: [
            {
                text: 'Data',
                items: [
                    {text: 'What is MomPHP data', link: '/data/what-is-mom-php-data'},
                    {text: 'Getting Started', link: '/data/getting-started'},
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/momphp'}
        ]
    }
})
