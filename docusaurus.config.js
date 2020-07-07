module.exports = {
  title: 'Javascript [ITR]',
  tagline: 'Javascript tutorial for ITR',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: '/img/logo.svg',
  organizationName: 'ITR', // Usually your GitHub org/user name.
  projectName: 'Javascript [ITR]', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'You dont know JS',
      logo: {
        alt: 'Javascript [ITR]',
        src: '/img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/VLZH/js-course',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
        copyright: `Copyright © ${new Date().getFullYear()} https://github/VLZH. Built with Docusaurus🦖.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
            homePageId: 'main',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/vlzh/js-course/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
