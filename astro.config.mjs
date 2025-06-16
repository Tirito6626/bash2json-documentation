// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "tirito's docs",
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Tirito6626' }],
			sidebar: [
				{
					label: 'bash2json', 
					autogenerate: { directory: 'bash2json' },
				},
				{
					label: 'bashcord',
					autogenerate: { directory: 'bashcord' },
				},
			],
		}),
	],
});
