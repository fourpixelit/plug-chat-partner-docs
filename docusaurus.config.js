/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
    localeConfigs: {
      pt: {
        label: 'Português',
      },
      // en: {
      //   label: 'English',
      // },
    },
  },
  title: 'Plug Chat Docs',
  tagline: 'Para parceiros parceiros',
  url: 'https://partner.plugchat.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon:
    'https://www.plugchat.com.br/white-label/plug-chat/favicon_plugchat.png',
  organizationName: 'Plug Chat',
  projectName: 'plug-chat-partner-docs',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Plug Chat Logo',
        src:
          'https://www.plugchat.com.br/white-label/plug-chat/logo-v2-oficial-branco.png',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/fourpixelit/plug-chat-partner-docs/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
