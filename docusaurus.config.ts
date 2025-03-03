import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: 'S Technologies Docs',
	tagline: 'S Technologies Docs',
	favicon: 'favicon.ico',

	// Set the production url of your site here
	url: 'https://docs.stechbd.net',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'STechBD', // Usually your GitHub org/user name.
	projectName: 'Docs', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: [ 'en' ],
	},

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/STechBD/Docs/tree/main/',
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: [ 'rss', 'atom' ],
						xslt: true,
					},
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/STechBD/Docs/tree/main/',
					// Useful options to enforce blogging best practices
					onInlineTags: 'warn',
					onInlineAuthors: 'warn',
					onUntruncatedBlogPosts: 'warn',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: 'image/Banner.webp',
		navbar: {
			title: 'S Technologies Docs',
			logo: {
				alt: 'S Technologies Docs',
				src: 'image/S-Technologies-Icon-Light.svg',
			},
			items: [
				{
					type: 'docSidebar',
					sidebarId: 'tutorialSidebar',
					position: 'left',
					label: 'Tutorial',
				},
				{ to: '/blog', label: 'Blog', position: 'left' },
				{
					href: 'https://github.com/STechBD/Docs',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Tutorial',
							to: '/docs/intro',
						},
					],
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Stack Overflow',
							href: 'https://stackoverflow.com/questions/tagged/stechbd',
						},
						{
							label: 'Discord',
							href: 'https://discordapp.com/invite/stechbd',
						},
						{
							label: 'X',
							href: 'https://x.com/STechBD_Net',
						},
					],
				},
				{
					title: 'More',
					items: [
						{
							label: 'Blog',
							to: '/blog',
						},
						{
							label: 'GitHub',
							href: 'https://github.com/STechBD/Docs',
						},
					],
				},
			],
			copyright: `Copyright © 2013-${ new Date().getFullYear().toString().slice(2, 4) } <a href="https://www.stechbd.net" target="_blank"><strong>S Technologies</strong></a>. All rights reserved.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,

	plugins: [
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'wp-next',
				routeBasePath: 'WP-Next',
				path: './wp-next',
				sidebarPath: require.resolve('./sidebars.ts'),
			},
		],
	],
}

export default config
