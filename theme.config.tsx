import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import Search from '@components/Search';

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://taxzyyyscripts.dev${asPath}`;
  const description = frontMatter.description || "Documentation for Taxzyyy's resources for FiveM";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/static/ox.ico" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
    </>
  );
}

function useNextSeoProps() {
  const { asPath } = useRouter();
  const arr = asPath.replace(/[-_]/g, ' ').split('/');
  const category = (arr[1][0] !== '#' && arr[1]) || 'Taxzyyy Scripts';
  const rawTitle = arr[arr.length - 1];
  const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s';

  return {
    titleTemplate: `${title} - ${
      rawTitle === category ? 'Documentation' : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
    }`,
  };
}

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        paddingLeft: '50px',
        lineHeight: '38px',
        background: "url('https://cdn.discordapp.com/attachments/1231714390353510512/1232329370006196224/txzscrims.png?ex=6739f629&is=6738a4a9&hm=a2e04f72fbbe468f23a8340d9fdaf34e136b99cad977e73701f3bddb2261efd6& ') no-repeat left",
        backgroundSize: '38px',
        fontWeight: 550,
      }}
    >
      Taxzyyy Scripts
    </div>
  ),
  project: {
    link: 'https://github.com/TaxiMax1/taxzyyyscripts.github.io',
  },
  chat: {
    link: 'https://discord.gg/5Y8hqr64fJ',
  },
  docsRepositoryBase: 'https://github.com/TaxiMax1/taxzyyyscripts.github.io/blob/main',
  footer: {
    text: 'Taxzyyy Scripts',
  },
  search: {
    component: <Search />,
  },
  head: useHead,
  primaryHue: { dark: 200, light: 200 },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    backToTop: true,
  },

  useNextSeoProps: useNextSeoProps,
};

export default config;
