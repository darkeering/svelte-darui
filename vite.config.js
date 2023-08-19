import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { myPlugin } from './index.js';

export default defineConfig({
	plugins: [myPlugin(), sveltekit()]
});
