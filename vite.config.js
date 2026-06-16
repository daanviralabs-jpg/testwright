import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
// `base` must match the GitHub Pages subpath (repo name) so built asset
// URLs resolve under https://<user>.github.io/testwright/.
export default defineConfig({
  base: '/testwright/',
  plugins: [react()],
});
