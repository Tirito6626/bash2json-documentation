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
					items: [
					 { 
						label: 'Guides', 
						autogenerate: { directory: 'bash2json/guides' }
					 },
					 { 
						label: 'Reference', 
						autogenerate: { directory: 'bash2json/reference' }
					 }
					]
				},
				{
					label: 'bashcord',
					items: [
						{ 
						   label: 'Guides', 
						   autogenerate: { directory: 'bashcord/Guides' }
						},
						{ 
							label: 'Builders', 
							autogenerate: { directory: 'bashcord/Builders' }
						},
						{ 
						   label: 'Functions', 
						   autogenerate: { directory: 'bashcord/Functions' }
						}
					   ]
				},
			],
		}),
	],
});
