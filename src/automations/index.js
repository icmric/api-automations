import ModuleComponent from './module.vue';

export default {
	id: 'automations-module',
	name: 'Automations',
	icon: 'build',
	routes: [
		{
			path: '',
			props: true,
			component: ModuleComponent,
		},
		{
			name: 'page',
			path: ':page',
			props: true,
			component: ModuleComponent,
		},
	],
};
