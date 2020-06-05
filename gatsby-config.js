module.exports = {
  siteMetadata: {
    title: 'Frontend Maters Gatsby workshop',
    description: 'A site we built together from FEM',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
  ],
};
