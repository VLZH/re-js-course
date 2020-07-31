module.exports = {
    title: "Re: Javascript-Course",
    tagline: "Javascript tutorial",
    url: "https://re-js-course.vercel.app/",
    baseUrl: "/",
    favicon: "/img/logo.svg",
    organizationName: "vlzh",
    projectName: "Re: Javascript-Course",
    onBrokenLinks: "ignore",
    themeConfig: {
        prism: {
            theme: require("prism-react-renderer/themes/github"),
        },
        navbar: {
            title: "Re: Javascript-Course",
            logo: {
                alt: "Re: Javascript-Course",
                src: "/img/logo.svg",
            },
            items: [
                {
                    to: "docs/",
                    activeBasePath: "docs",
                    label: "Docs",
                    position: "left",
                },
                {
                    href: "https://github.com/VLZH/re-js-course",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [],
            copyright: `Copyright © ${new Date().getFullYear()} https://github/VLZH. Built with Docusaurus🦖.`,
        },
        algolia: {
            apiKey: "09b09ff88c1bdeb54ba45a0f76db60b0",
            indexName: "re-js-course",
            appId: "LLSC0F76HG",
            algoliaOptions: {},
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    routeBasePath: "/",
                    homePageId: "main",
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl: "https://github.com/VLZH/re-js-course",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
    themes: ["@docusaurus/theme-live-codeblock"],
    plugins: ["@docusaurus/plugin-ideal-image"],
    stylesheets: [
        "antd/es/timeline/css/index.css"
    ]
};
