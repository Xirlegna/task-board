import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  webpackFinal: async (config) => {
    config.module?.rules?.push({
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: { sourceMap: true },
        },
        'sass-loader',
      ],
    });

    return config;
  },
  framework: '@storybook/react-webpack5',
};
export default config;
