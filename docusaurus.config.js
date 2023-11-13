const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Pixelize",
  tagline:
    "Pixelize Coding Community Docs",
  url: "https://pixelize.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "./pixelize-logo-rounded.png",
  organizationName: "PixelizeCC", // Usually your GitHub org/user name.
  projectName: "pixelize-docs", // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: "Pixelize",
      logo: {
        alt: "Pixelize",
        src: "img/pixelize.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://discord.gg/4Y6HjD2uyU",
          label: "Discord",
          position: "right",
        },
        {
          href: "https://github.com/apulhpa/pixelize-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Documentation",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/4Y6HjD2uyU",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/apulhpa/pixelize-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pixelize`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          lastVersion: "0.9.1",
          // Please change this to your repo.
          editUrl: "darkCodeTheme",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
