module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    // Add any Storybook addons you want here: https://storybook.js.org/addons/
    addons: [
        'storybook-addon-styled-component-theme/dist/preset',
        '@storybook/addon-docs',
        'storybook-addon-styled-components-themes/register'
    ]
}
