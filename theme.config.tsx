import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import "@feelback/react/styles/feelback.css";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: (
    <Image
      src={"./logo.svg"}
      alt=""
      width={160}
      height={80}
      className="nx-logo"
    />
  ),
  darkMode: true,
  project: {
    link: "https://github.com/zeko-labs/zeko",
  },
  footer: {
    text: "Zeko Documentation",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
  },
  feedback: {
    content: "",
  },
  editLink: {
    text: "",
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s | Zeko Docs",
      };
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://zeko-labs.github.io/" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "Zeko Docs"} />
        <meta
          property="og:description"
          content={frontMatter.description || "Zeko Docs for developers"}
        />
        <link
          rel="icon"
          href="/img/icons/favicon.ico"
          type="image/x-icon"
        ></link>
      </>
    );
  },
};

export default config;
