import nextra from 'nextra'
import remarkCodeImport from 'remark-code-import'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  mdxOptions: {
    remarkPlugins: [
      remarkCodeImport,
    ]
  }
})

export default {
  ...withNextra(),
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}
